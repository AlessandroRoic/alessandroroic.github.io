<template>
  <main class="main-container">
    <BaseSection id="info" class="align-self-center">
      <svg viewBox="0 0 169 60" aria-label="welcome card" class="section__welcome">
        <use href="~@/assets/icons/icons.svg#welcome-card"></use>
      </svg>
    </BaseSection>

    <BaseSection id="about">
      <h1 class="text-tart-orange">About Me</h1>
      <div class="about__summary">
        <img class="about__side-photo" alt="profile" src="~@/assets/images/profile.webp" aria-label="profile picture" />
        <div class="m-auto">
          Hi, I'm Alessandro and as you read before in the giant sign above I'm a Front End Developer. I have 2 years of experience building
          modular and responsive website design. Right now my focus is on improving and developing my skills, but I'm always interested in
          trying new stuff out and learning more. I have many side-projects and ideas to realize and hopefully they will see the light soon,
          so stay tuned!
        </div>
      </div>
      <hr class="mx-2" />
      <h2 class="text-tart-orange">My Skills</h2>
      <div>Here some languages, frameworks and technologies that I'm using:</div>
      <div class="section__pill-wrapper">
        <div v-for="pill in pills" :key="pill" class="section__pill">
          {{ pill }}
        </div>
      </div>
      <hr class="mx-2" />
      <h2 class="text-tart-orange">What's Next</h2>
      <div>
        I aspire to be a Game Developer and it has been a dream of mine since I've realized how games make people engaged and passionate,
        and I always wanted to build something that would create that effect.
      </div>
    </BaseSection>

    <BaseSection id="work">
      <h1 class="text-tart-orange">Work</h1>
      <div class="work__cards">
        <BaseCard>
          <template #title><h2 class="text-tart-orange">Accenture</h2></template>
          <template #content>
            <h3>Front End Developer</h3>
            <p class="mt-1">February 2021 - Currently</p>
            <ul>
              <li>
                Designed and developed autonomously a web application for data visualization <span class="text-tart-orange">(Nexi)</span>
              </li>
              <li>
                Optimized and improved a ui-kit embedded in a service platform
                <span class="text-tart-orange">(Italian Ministry of Economy)</span>
              </li>
              <li>Build services and components for a customer service platform <span class="text-tart-orange">(Poste Italiane)</span></li>
              <li>
                Collaborated in a Scrum team, following closely and participated actively in daily activities with the engineers, designers
                and clients.
              </li>
              <li>Technologies used: Angular, NgRx, RxJs, Javascript (ES6+), SCSS</li>
            </ul>
          </template>
        </BaseCard>
        <BaseCard>
          <template #title><h2 class="text-tart-orange">Jpanik</h2></template>
          <template #content>
            <h3>Full Stack Developer</h3>
            <p class="mt-1">October 2019 - February 2021</p>
            <ul>
              <li>
                Developed Back End services with Spring framework suite and Front End components with Angular, for a web enterprise platform
                designed for clinical-hospital management
              </li>
              <li>
                Integrated an applet into the platform that processes and displays an interactive graph using the elaborated data using the
                Chart.js library.
              </li>
              <li>Technologies used: Angular/AngularJS, Java/Java EE, Spring, REST API, PostgreSQL, MongoDB</li>
            </ul>
          </template>
        </BaseCard>
        <BaseCard>
          <template #title><h2 class="text-tart-orange">University</h2></template>
          <template #content>
            <h3>Computer Science Bachelor</h3>
            <h4>Sapienza University of Rome</h4>
            <p class="mt-1">September 2016 – April 2020</p>
            <ul>
              <li>
                <span class="text-tart-orange">E-Quality</span>: gamified video game built for kids to raise awareness on gender equality in
                collaboration with the Italian Regional Councilor for Equal Opportunities
              </li>
              <li>
                <span class="text-tart-orange">Curiosone Bot</span>
                : interactive chat bot written in Java during the Programming Methodologies course
              </li>
              <li>
                <span class="text-tart-orange">Airborne Assault</span>
                : video game build with libGDX for the university Java course integrated into the Curiosone Bot project
              </li>
            </ul>
          </template>
        </BaseCard>
      </div>
    </BaseSection>

    <BaseSection id="projects">
      <h1 class="text-tart-orange">Projects</h1>
      <div class="projects__cards">
        <BaseCard>
          <template #logo>
            <svg width="80" height="80" aria-label="site logo">
              <use href="~@/assets/icons/icons.svg#site-logo"></use>
            </svg>
          </template>
          <template #title-center><b>Personal Website</b></template>
          <template #content>You can check this site source code on github</template>
          <template #link>
            <button @click="openSite('github.com/AlessandroRoic/alessandroroic.github.io')">Check it</button>
          </template>
        </BaseCard>

        <BaseCard>
          <template #logo>
            <img src="~@/assets/images/curiosone.png" alt="e-quality logo" />
          </template>
          <template #title-center><b>E-Quality</b></template>
          <template #content>Gamification built for kids on gender equality</template>
          <template #link>
            <button @click="openSite('github.com/AlessandroRoic/E-Quality')">Check it</button>
          </template>
        </BaseCard>

        <BaseCard>
          <template #logo>
            <img src="~@/assets/images/curiosone.png" alt="airbone assault logo" />
          </template>
          <template #title-center><b>Airborne Assault</b></template>
          <template #content>Video game build with libGDX</template>
          <template #link>
            <button @click="openSite('github.com/AlessandroRoic/AirborneAssault')">Check it</button>
          </template>
        </BaseCard>
      </div>
    </BaseSection>
  </main>
</template>

<script>
import BaseSection from '@/components/BaseSection';
import BaseCard from '@/components/BaseCard';
import { openSite } from '@/helpers/utils';

export default {
  name: 'HomePage',
  components: {
    BaseCard,
    BaseSection,
  },
  methods: {
    openSite,
  },
  data: () => ({
    pills: [
      'Javascript (ES6+)',
      'Typescript',
      'Angular',
      'Vue',
      'Node.js',
      'Sass',
      'NgRx',
      'RxJs',
      'Redux',
      'Java EE',
      'Spring',
      'PostgreSQL',
      'Scrum',
    ],
  }),
};
</script>

<style scoped lang="scss">
@use '~@/styles/variables';
@use '~@/styles/mixins';
@use '~@/styles/lib/layout';
@use '~@/styles/lib/spacing';
@use '~@/styles/lib/breakpoint';

.main-container {
  @include layout.container();
  @include breakpoint.show-for(desktop) {
    max-width: 900px;
  }
  @include layout.width-columns(11);
  @include layout.width-columns(10, tablet);
  @include layout.grid-template(repeat(1, minmax(0, 1fr)), minmax(100vh, max-content), 20rem 0);
}

.about {
  &__summary {
    @include breakpoint.show-for(desktop) {
      grid-template-columns: auto auto;
    }
    @include layout.grid-template(repeat(1, minmax(0, 1fr)), null, 2rem);
  }

  &__side-photo {
    align-self: center;
    width: 100%;
    height: auto;
    border: 2px solid variables.$jet;
    border-radius: variables.$card-border-radius;
    box-shadow: variables.$tart-orange-shadow;
  }
}

.section {
  &__welcome {
    font-size: 0.79rem;
  }

  &__pill {
    font-weight: bold;
    border-radius: variables.$card-border-radius;
    background: variables.$cultured;
    color: variables.$eerie-black-2;
    margin: 10px 12px 10px 0;
    padding: 5px 8px 5px 8px;
    box-shadow: variables.$tart-orange-shadow;
    border: 2px solid variables.$eerie-black-2;

    &-wrapper {
      @include layout.row();
    }
  }
}

.work {
  &__cards {
    @include layout.grid-template(repeat(1, minmax(0, 1fr)), null, 1rem);
  }
}

.projects {
  &__cards {
    @include breakpoint.show-for(desktop) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    @include layout.grid-template(repeat(1, minmax(0, 1fr)), null, 1rem);
  }
}
</style>
