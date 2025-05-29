<template>
  <button class="scroll-down" @click="scrollIntoView('about')">
    Scroll down for more <br />
    <svg viewBox="0 0 25 25" aria-label="click to scroll down">
      <use href="~@/assets/icons/icons.svg#chevron-down"></use>
    </svg>
  </button>
  <main class="main-container">
    <BaseSection id="info" class="align-self-center">
      <h1 class="mb-0">
        <WelcomeCard />
      </h1>
    </BaseSection>
    <BaseSection id="about" data-observable>
      <h2 class="text-tart-orange">About Me</h2>
      <div class="about__summary">
        <img class="about__side-photo" alt="profile" src="~@/assets/images/profile.webp" aria-label="profile picture" />
        <div class="m-auto">
          Hi, I'm Alessandro and as you read before in the huge card above I'm a Front End Developer. I have 5 years of experience building
          modular and responsive website design. Right now my focus is on improving and developing my skills, but I'm always interested in
          trying new stuff out and learning more. I have many side-projects and ideas to realize and hopefully they will see the light soon,
          so stay tuned!
          <div class="mt-2 text-center">
            <BaseButton @click="downloadCv()" aria-label="cv">Interested? Get my CV!</BaseButton>
          </div>
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

    <BaseSection id="work" data-observable>
      <h2 class="text-tart-orange">Work & Education</h2>
      <SwipeCard v-slot="{ index }" :card-number="4" style-class="work__cards" class-to-animate="card__content">
        <BaseCard v-if="index === 0" :is-swipe="true">
          <template #content>
            <h2 class="text-tart-orange">IBM - Turbonomic</h2>
            <h3>Front End Developer</h3>
            <p class="mt-1">May 2023 - Present</p>
            <ul>
              <li>
                <span>Developed 5+ key features for Turbonomic, a SaaS application for resource management.</span>
              </li>
              <li>
                <span
                  >Headed 3 feature teams of 10 people, driving successful project delivery and collaboration across cross-functional
                  teams.</span
                >
              </li>
              <li>
                <span
                  >Led the development of the user permission service, ensuring secure and granular access control to the application.
                </span>
              </li>
              <li>
                <span
                  >Executed a complex migration from AngularJS to React, resulting in measurable improvements to UX, performance
                  optimization, and streamlined maintainability for future scalability.
                </span>
              </li>
            </ul>
          </template>
        </BaseCard>
        <BaseCard v-if="index === 1" :is-swipe="true">
          <template #content>
            <h2 class="text-tart-orange">Accenture</h2>
            <h3>Front End Developer</h3>
            <p class="mt-1">February 2021 - January 2023</p>
            <ul>
              <li>
                <span
                  >Led a team of 4 software developers to enhance the accessibility of a government website, following web standards to
                  achieve a score of 93/100 on Google Lighthouse</span
                >
              </li>
              <li>
                <span
                  >Developed 3+ repositories for an international banking website, using React to build modular and reactive micro front
                  ends</span
                >
              </li>
              <li>
                <span
                  >Managed and deployed a data management app with Angular for a bank's internal tool, providing operators with a simple way
                  to view client data.</span
                >
              </li>
              <li>
                <span>Tested components using Karma & Jasmine for an online banking website, obtaining 100% code coverage.</span>
              </li>
              <li>Technologies used: React, Angular, NgRx, RxJs, Javascript (ES6+), SCSS, CSS, Karma, Jasmine, Jest</li>
            </ul>
          </template>
        </BaseCard>
        <BaseCard v-if="index === 2" :is-swipe="true">
          <template #content>
            <h2 class="text-tart-orange">Jpanik</h2>
            <h3>Full Stack Developer</h3>
            <p class="mt-1">October 2019 - February 2021</p>
            <ul>
              <li>
                <span
                  >Developed and implemented core front-end and back-end features for a hospital management web application, enhancing
                  overall functionality.</span
                >
              </li>
              <li>
                <span
                  >Integrated an interactive graph using the library Chart.js, providing a helpful visual reference to healthcare
                  professionals.</span
                >
              </li>
              <li>
                <span>Developed RESTful APIs using Java and Spring Boot to create scalable and performant services.</span>
              </li>
              <li>
                <span>Designed and implemented efficient data storage and retrieval solutions using PostgreSQL and MongoDB databases.</span>
              </li>
              <li>
                <span>Migrated AngularJS components to Angular 8 significantly reducing code complexity.</span>
              </li>
              <li>Technologies used: Angular/AngularJS, Java/Java EE, Spring, REST API, PostgreSQL, MongoDB</li>
            </ul>
          </template>
        </BaseCard>
        <BaseCard v-if="index === 3" :is-swipe="true">
          <template #content>
            <h2 class="text-tart-orange">University</h2>
            <h3>Computer Science Bachelor</h3>
            <h4>University of Rome – La Sapienza</h4>
            <p class="mt-1">September 2016 – April 2020</p>
            <ul>
              <li>
                <span class="text-tart-orange"><b>E-Quality</b></span
                >: video game aimed at raising gender-equality awareness, developed in collaboration with the Italian Regional Council for
                Equal Opportunities
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
        <BaseCard v-if="index === 4" :is-swipe="true">
          <template #content>
            <h2 class="text-tart-orange">Certifications</h2>
            <ul>
              <li>
                <BaseLink href="https://credly.com/badges/b233c696-03a7-493f-96d7-ba7431c0137c/linked_in?t=rh09bv" :show-underline="true">
                  <b>AWS Certified Developer - Associate</b>
                </BaseLink>
              </li>
            </ul>
          </template>
        </BaseCard>
      </SwipeCard>
    </BaseSection>

    <BaseSection id="projects" data-observable>
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
            <BaseButton @click="openSite('github.com/AlessandroRoic/alessandroroic.github.io')">Check it </BaseButton>
          </template>
        </BaseCard>

        <BaseCard :centerText="true">
          <template #logo>
            <img src="~@/assets/images/camo-notifications.webp" alt="" />
          </template>
          <template #title><b>CamoNotifications</b></template>
          <template #content>React notifications library that disguises itself in your application 🥷😶‍🌫️ </template>
          <template #link>
            <BaseButton @click="openSite('github.com/AlessandroRoic/CamoNotifications')">Check it </BaseButton>
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

        <BaseCard :center-text="true" class="more-to-come">
          <template #content>
            <h3>More to come!</h3>
          </template>
        </BaseCard>
      </div>
    </BaseSection>

    <BaseSection id="contacts" class="contacts" data-observable>
      <h2 class="text-tart-orange">Get in touch</h2>
      <div class="mt-1 mb-1">I'm looking for opportunities, so if you're interested in my resume and want to contact me, please do!</div>
      <div class="text-center">
        <BaseButton>
          <a class="reset-link" href="mailto:roic.alessandro@gmail.com" target="_blank" aria-label="email">Mail me</a>
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
import { downloadCv, openSite, scrollIntoView } from '@/helpers/utils';

import BaseButton from '@/components/BaseButton';
import { animateFade, fade, svgLineFade, svgTextFade } from '@/animations/fade-animations';
import anime from 'animejs';
import WelcomeCard from '@/components/WelcomeCard';
import useVisible from '@/composables/VisibleComposable';
import BaseLink from '@/components/BaseLink';

const pills = ref([
  'Javascript (ES6+)',
  'Typescript',
  'React',
  'Angular',
  'Vue',
  'Sass',
  'NgRx',
  'RxJs',
  'Redux',
  'Jasmine',
  'Karma',
  'Java (EE)',
  'Spring',
  'PostgreSQL',
  'MongoDB',
]);

onMounted(() => {
  useVisible(document.querySelectorAll('[data-observable]'), fadeSection);
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
      height: 1250px;
    }
    @include breakpoint.show-for(mobile-m) {
      height: 1050px;
    }
    @include breakpoint.show-for(mobile-l) {
      height: 880px;
    }
    @include breakpoint.show-for(tablet) {
      height: 550px;
    }
    @include breakpoint.show-for-range(desktop, desktop-l) {
      height: 470px;
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

.more-to-come {
  @include breakpoint.show-for(desktop) {
    grid-column: span 2;
    display: grid;
    place-items: center;
  }
}
</style>
