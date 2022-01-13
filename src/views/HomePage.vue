<template>
  <main class="container">
    <BaseSection id="info">
      <svg viewBox="0 0 169 60" aria-label="welcome card" class="section__welcome">
        <use href="~@/assets/icons/icons.svg#welcome-card"></use>
      </svg>
    </BaseSection>

    <BaseSection id="about">
      <h1 class="tart-orange">About Me</h1>
      <div class="row">
        <div class="about__profile-img">
          <img class="about__side-photo" alt="profile" src="~@/assets/images/profile.webp" aria-label="profile picture" />
        </div>
        <div class="about__intro">
          Hi, I'm Alessandro and as you read before in the giant sign above I'm a Front End Developer. I have 2 years of experience building
          modular and responsive website design. Right now my focus is on improving and developing my skills, but I'm always interested in
          trying new stuff out and learning more. I have many side-projects and ideas to realize and hopefully they will see the light soon,
          so stay tuned!
        </div>
      </div>
      <hr />
      <h2 class="tart-orange">My Skills</h2>
      <div class="col-12">Here some languages, frameworks and technologies that I'm using:</div>
      <div class="row">
        <div v-for="pill in pills" :key="pill" class="col-auto pr-1">
          <div class="section__pill">
            {{ pill }}
          </div>
        </div>
      </div>
      <hr />
      <h2 class="tart-orange">What's Next</h2>
      <div>
        I aspire to be a Game Developer and it has been a dream of mine since I've realized how games make people engaged and passionate,
        and I always wanted to build something that would create that effect.
      </div>
    </BaseSection>

    <BaseSection id="work">
      <h1 class="tart-orange">Work</h1>
      <BaseCard class="mb-2">
        <template #title><h2>Accenture</h2></template>
        <template #content>
          <h3 class="tart-orange">Front End Developer</h3>
          <p class="mt-1">February 2021 - Currently</p>
          <ul>
            <li>Designed and developed autonomously a web application for data visualization <span class="tart-orange">(Nexi)</span></li>
            <li>
              Optimized and improved a ui-kit embedded in a service platform
              <span class="tart-orange">(Italian Ministry of Economy)</span>
            </li>
            <li>Build services and components for a customer service platform <span class="tart-orange">(Poste Italiane)</span></li>
            <li>
              Collaborated in a Scrum team, following closely and participated actively in daily activities with the engineers, designers
              and clients.
            </li>
            <li>Technologies used: Angular, NgRx, RxJs, Javascript (ES6+), SCSS</li>
          </ul>
        </template>
      </BaseCard>
      <BaseCard class="mb-2">
        <template #title><h2>Jpanik</h2></template>
        <template #content>
          <h3 class="tart-orange">Full Stack Developer</h3>
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
        <template #title><h2>University</h2></template>
        <template #content>
          <h3 class="tart-orange">Computer Science Bachelor</h3>
          <h4>Sapienza University of Rome</h4>
          <p class="mt-1">September 2016 – April 2020</p>
          <ul>
            <li>
              <span class="tart-orange">E-Quality</span>: gamified video game built for kids to raise awareness on gender equality in
              collaboration with the Italian Regional Councilor for Equal Opportunities
            </li>
            <li>
              <span class="tart-orange">Curiosone Bot</span>
              : interactive chat bot written in Java during the Programming Methodologies course
            </li>
            <li>
              <span class="tart-orange">Airborne Assault</span>
              : video game build with libGDX for the university Java course integrated into the Curiosone Bot project
            </li>
          </ul>
        </template>
      </BaseCard>
    </BaseSection>

    <BaseSection id="projects">
      <h1 class="tart-orange">Projects</h1>
      <div class="row">
        <div class="projects__card">
          <BaseCard>
            <template #logo>
              <svg width="80" height="80" aria-label="site logo">
                <use href="~@/assets/icons/icons.svg#site-logo"></use>
              </svg>
            </template>
            <template #title-center><b>Personal Website</b></template>
            <template #content>You can check this site source code on github</template>
            <template #link>
              <button v-on:click="goTo('github.com/AlessandroRoic/alessandroroic.github.io')">Check it</button>
            </template>
          </BaseCard>
        </div>
        <div class="projects__card">
          <BaseCard>
            <template #logo>
              <img src="~@/assets/images/curiosone.png" alt="e-quality logo" />
            </template>
            <template #title-center><b>E-Quality</b></template>
            <template #content>Gamification built for kids on gender equality</template>
            <template #link>
              <button v-on:click="goTo('github.com/AlessandroRoic/E-Quality')">Check it</button>
            </template>
          </BaseCard>
        </div>
        <div class="projects__card">
          <BaseCard>
            <template #logo>
              <img src="~@/assets/images/curiosone.png" alt="airbone assault logo" />
            </template>
            <template #title-center><b>Airborne Assault</b></template>
            <template #content>Video game build with libGDX</template>
            <template #link>
              <button v-on:click="goTo('github.com/AlessandroRoic/AirborneAssault')">Check it</button>
            </template>
          </BaseCard>
        </div>
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
    goTo: (link) => {
      openSite(link);
    },
  },
  data: () => ({
    pills: [
      'Javascript (ES6+)',
      'Typescript',
      'Sass',
      'Angular',
      'Node.js',
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
@use '~@/styles/colors';
@use '~@/styles/lib/spacing';
@use '~@/styles/lib/breakpoint';

.section {
  &__welcome {
    font-size: 0.84rem;
  }

  &__pill {
    font-weight: bold;
    border-radius: variables.$card-border-radius;
    background: variables.$cultured;
    color: variables.$eerie-black-2;
    margin: 10px 0 10px 0;
    padding: 5px 8px 5px 8px;
    box-shadow: variables.$tart-orange-shadow;
    border: 2px solid variables.$eerie-black-2;
  }
}

.about {
  &__profile-img {
    @include layout.col(12);
    @include layout.col(5, desktop);
    @include layout.col(4, desktop-l);
    @include spacing.padding(1, right, desktop);
    @include spacing.margin(1, bottom);
    @include spacing.margin(auto, x, desktop);
    @include breakpoint.show-for-range(reset, tablet) {
      display: flex;
      align-self: center;
      justify-content: center;
    }
  }

  &__side-photo {
    @include spacing.margin('1/2', right, desktop);
    @include breakpoint.show-for(desktop) {
      max-width: 100%;
    }
    max-width: 80%;
    height: auto;
    border: 2px solid variables.$jet;
    box-shadow: variables.$tart-orange-shadow;
    border-radius: variables.$card-border-radius;
  }

  &__intro {
    @include layout.col(12);
    @include layout.col(7, desktop);
    @include layout.col(8, desktop-l);
    align-self: center;
    justify-content: center;
  }
}

.projects {
  &__card {
    @include layout.col(12);
    @include layout.col(4, desktop);
    @include spacing.padding('1/2', y);
    @include spacing.margin(1, bottom);
  }
}
</style>
