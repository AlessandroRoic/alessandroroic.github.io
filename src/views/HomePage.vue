<template>
  <button class="scroll-down" @click="scrollIntoView('about')">
    Scroll down for more <br />
    <svg viewBox="0 0 25 25" aria-label="click to scroll down">
      <use href="~@/assets/icons/icons.svg#chevron-down"></use>
    </svg>
  </button>
  <main class="main-container">
    <BaseSection id="info" class="align-self-center">
      <h1 class="mb-0"><WelcomeCard /></h1>
    </BaseSection>
    <BaseSection id="about">
      <h2 class="text-tart-orange">About Me</h2>
      <div class="about__summary">
        <img class="about__side-photo" alt="profile" src="~@/assets/images/profile.webp" aria-label="profile picture" />
        <div class="m-auto">
          Hi, I'm Alessandro and as you read before in the giant sign above I'm a Front End Developer. I have 2+ years of experience
          building modular and responsive website design. Right now my focus is on improving and developing my skills, but I'm always
          interested in trying new stuff out and learning more. I have many side-projects and ideas to realize and hopefully they will see
          the light soon, so stay tuned!
        </div>
      </div>
      <hr class="mx-2" />
      <h2 class="text-tart-orange">My Skills</h2>
      <div>Here some of the languages, frameworks and technologies that I'm using:</div>
      <div class="section__pill-wrapper">
        <div v-for="pill in pills" :key="pill" class="section__pill">
          {{ pill }}
        </div>
      </div>
      <hr class="mx-2" />
      <h2 class="text-tart-orange">What's Next</h2>
      <div>
        I aspire to be a Game Developer and it has been a dream of mine since I've realized how games make people engaged and passionate,
        and I always wanted to make something that would create that effect.
      </div>
    </BaseSection>

    <BaseSection id="work">
      <h2 class="text-tart-orange">Work</h2>
      <SwipeCard v-slot="{ index }" :card-number="3" style-class="work__cards" class-to-animate="card__content">
        <BaseCard v-if="index === 0">
          <template #content>
            <h2 class="text-tart-orange">Accenture</h2>
            <h3>Front End Developer</h3>
            <p class="mt-1">February 2021 - Currently</p>
            <ul>
              <li>Designed and developed a data visualization web application (Nexi)</li>
              <li>Optimized and improved a UI-kit embedded in a service platform (Italian Ministry of Economy)</li>
              <li>Build services and components for a customer service platform (Poste Italiane)</li>
              <li>
                <span
                  >Collaborated in a Scrum team, following closely and participated actively in daily activities with the engineers,
                  designers and clients.</span
                >
              </li>
              <li>Technologies used: Angular, NgRx, RxJs, Javascript (ES6+), SCSS</li>
            </ul>
          </template>
        </BaseCard>
        <BaseCard v-if="index === 1">
          <template #content>
            <h2 class="text-tart-orange">Jpanik</h2>
            <h3>Full Stack Developer</h3>
            <p class="mt-1">October 2019 - February 2021</p>
            <ul>
              <li>
                <span
                  >Developed a web enterprise platform for hospital management, using the Spring framework for back-end services and Angular
                  for the front-end components</span
                >
              </li>
              <li>
                <span>Integrated an applet into an interactive graph display platform using the Chart.js library</span>
              </li>
              <li>Technologies used: Angular/AngularJS, Java/Java EE, Spring, REST API, PostgreSQL, MongoDB</li>
            </ul>
          </template>
        </BaseCard>
        <BaseCard v-if="index === 2">
          <template #content>
            <h2 class="text-tart-orange">University</h2>
            <h3>Computer Science Bachelor</h3>
            <h4>University of Rome – La Sapienza</h4>
            <p class="mt-1">September 2016 – April 2020</p>
            <ul>
              <li>
                <span class="text-tart-orange"><b>E-Quality</b></span
                >: gamified video game built for kids to raise a wareness on gender equality in collaboration with the Italian Regional
                Councilor for Equal Opportunities
              </li>
              <li>
                <span class="text-tart-orange"><b>Curiosone Bot</b></span
                >: interactive chat bot written in Java during the Programming Methodologies course
              </li>
              <li>
                <span class="text-tart-orange"><b>Airborne Assault</b></span
                >: video game build with libGDX for the university Java course integrated into the Curiosone Bot project
              </li>
            </ul>
          </template>
        </BaseCard>
      </SwipeCard>
    </BaseSection>

    <BaseSection id="projects">
      <h2 class="text-tart-orange">Projects</h2>
      <div class="projects__cards">
        <BaseCard :centerText="true">
          <template #logo>
            <svg width="80" height="80" aria-label="site logo">
              <use href="~@/assets/icons/icons.svg#site-logo"></use>
            </svg>
          </template>
          <template #title><b>Personal Website</b></template>
          <template #content>Check this site source code on github for more details</template>
          <template #link>
            <BaseButton @click="openSite('github.com/AlessandroRoic/alessandroroic.github.io')">Check it</BaseButton>
          </template>
        </BaseCard>

        <BaseCard :centerText="true">
          <template #logo>
            <img src="~@/assets/images/e-quality.png" alt="e-quality logo" />
          </template>
          <template #title><b>E-Quality</b></template>
          <template #content>Children video game on gender equality awareness</template>
          <template #link>
            <BaseButton @click="openSite('github.com/AlessandroRoic/E-Quality')">Check it</BaseButton>
          </template>
        </BaseCard>

        <BaseCard :centerText="true">
          <template #logo>
            <img src="~@/assets/images/airborne-assault.png" alt="airbone assault logo" />
          </template>
          <template #title><b>Airborne Assault</b></template>
          <template #content>Video game build with libGDX for the university Java course</template>
          <template #link>
            <BaseButton @click="openSite('github.com/AlessandroRoic/AirborneAssault')">Check it</BaseButton>
          </template>
        </BaseCard>
      </div>
    </BaseSection>

    <BaseSection id="contacts" class="contacts">
      <h2 class="text-tart-orange">Get in touch</h2>
      <div class="mt-1 mb-1">
        I'm currenty looking for opportunities in Toronto, if you have any and you're interested in my curriculum and want to contact me,
        please do!
      </div>
      <div class="text-center">
        <BaseButton>
          <a class="reset-link" href="mailto:alessandro.roic@gmail.com" target="_blank" aria-label="email">Mail me</a>
        </BaseButton>
      </div>
    </BaseSection>
  </main>
</template>

<script setup>
import BaseSection from '@/components/BaseSection';
import BaseCard from '@/components/BaseCard';
import SwipeCard from '@/components/SwipeCard';
import { onMounted, ref } from 'vue';
import { openSite, scrollIntoView } from '@/helpers/utils';
import BaseButton from '@/components/BaseButton';
import { animateFade, fade, svgLineFade, svgTextFade } from '@/animations/fade-animations';
import anime from 'animejs';
import WelcomeCard from '@/components/WelcomeCard';
import { useVisible } from '@/composables/VisibleComposable';

const pills = ref(['Javascript (ES6+)', 'Typescript', 'Angular', 'Vue', 'Sass', 'NgRx', 'RxJs', 'Redux']);

onMounted(() => {
  const sectionElements = document.getElementsByTagName('section');
  const mappedElements = [...sectionElements].slice(1).map((element) => ({ elementRef: element }));
  useVisible(mappedElements, null, fadeSection);
  const timeline = anime.timeline();
  timeline.add(fade('#info')).add(svgTextFade('#welcome-card .letter')).add(svgLineFade('#welcome-card line')).add(fade('.scroll-down'));
});

const fadeSection = (entry) => animateFade(`#${entry.target.id}`, 1000);
</script>

<style scoped lang="scss">
@use '~@/styles/variables';
@use '~@/styles/mixins';
@use '~@/styles/lib/layout';
@use '~@/styles/lib/spacing';
@use '~@/styles/lib/breakpoint';
@use '~@/styles/utilities';

.main-container {
  @include layout.container();
  @include breakpoint.show-for(desktop) {
    max-width: 900px;
  }
  @include layout.width-columns(11);
  @include layout.width-columns(10, tablet);
  @include layout.grid-template(repeat(1, minmax(0, 1fr)), minmax(100vh, max-content), 20rem 0);
}

.scroll-down {
  color: variables.$cultured;
  position: absolute;
  top: 85vh;
  width: fit-content;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
  cursor: pointer;

  svg {
    @include mixins.scaleSvg(25px);
  }
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

    &:hover {
      cursor: pointer;
      filter: drop-shadow(5px 5px 10px variables.$eerie-black-2);
      transform: scale(1.2);
      transition: transform 0.3s ease-in-out;
    }
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

.work {
  &__cards {
    @include breakpoint.show-for(mobile-s) {
      height: 1050px;
    }
    @include breakpoint.show-for(mobile-m) {
      height: 850px;
    }
    @include breakpoint.show-for(mobile-l) {
      height: 740px;
    }
    @include breakpoint.show-for(tablet) {
      height: 500px;
    }
    @include breakpoint.show-for-range(desktop, desktop-l) {
      height: 400px;
    }
  }
}

.contacts {
  margin-bottom: 20rem;
}

#about,
#work,
#contacts,
#projects {
  opacity: 0;
}
</style>
