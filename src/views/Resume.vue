<template lang="pug">
  transition(name="fade")
    full-page(ref="fullpage" :options="options")
      .section.fp-bg
        .row.fixed-top-right.q-mt-xl
          q-btn(color='primary', label='DOWNLOAD CV', type="a" target="_blank" href="../static/CV.pdf").q-ma-md
        .row.fixed-center
          .col-12
            .text-h1 Experience
      .section.bg-blue-2
        .row.q-col-gutter-xl.justify-center.q-pa-xl
          .col-md-4
            .text-h2 Jul 2019 - Present
            .text-h6 Graduate Web Software Developer
            .text-subtitle1 CGG
            .text-subtitle2 Crawley, UK
          .col-md-8
            .text-h6 Overview
            p Joined a small team dedicated to developing the company's internal sites. Worked with full-stack systems to develop functional web pages to be used by thousands of employees.
            .text-h6 Impacts
            ul
              li Communicated efficiently between Crawley and the management in Singapore, allowing smoother runs through projects as well as detailed updates.
              li Spearheaded the frontend design of a new website, including making important decisions along the way, demonstrating the value of a frontend framework over pure HTML.
              li Researched the best software to use as a central wiki to upgrade from the old 2005 installation. Now used by thousands of employees and has allowed these employees to access relevant information quicker and more effectively.
              li Redesigned pages to streamline access to relevant information. This included CSS changes as well as content changes.
            .text-h6 Projects
            ul
              li
                b Resource Visualisation: 
                span My main project in this job so far has been the development from scratch of a new system to manage the state of all of the machines in our server farm. I was tasked with the frontend development of this system. Because this was a fresh system, we were allowed to choose our own technology stack away from the confines of the current system. For the frontend, I went for a Vue.js framework using the Quasar component pack. This was my first experience developing a large-scale application with Vue.js as well as integrating a system with a backend API. It was received very well by colleagues in the office and would catch the attention of people walking by. Unfortunately, this system was shelved due to staffing issues, but the experience gained was incredibly useful.
              li
                b User Profile: 
                span Another project I undertook during this employment was the rewrite of the entire user profile section of the internal website. Other colleagues in the team had started to move the profile section to a new URL but it was initially put together with iframes to the old URL. I was tasked with recreating these pages outside of iframes in the new URL, this allowed me to gain extensive knowledge in PHP and I could make decisions with streamlining the new profile so that relevant information could be delivered in an effective format.
              li
                b Wiki: 
                span My most recent undertaking was to research and implement a centralised wiki system for both the geoscientists and us developers. This involved me researching multiple wiki software’s and ultimately making a decision on MediaWiki. I then took this decision and presented it to my Manager with pros and cons compared to other software’s. Once this decision had been approved, I then installed and configured a multi-domain wiki on our internal website. This is now used by all employees of the company to access any relevant information during their work.
      .section.bg-green-2
        .row.q-col-gutter-xl.justify-center.q-pa-xl
          .col-md-4
            .text-h2 2015 - Present
            .text-h6 IT Assistant
            .text-subtitle1 Jungleland Telford
            .text-subtitle2 Telford, UK
          .col-md-8
            .text-h6 Overview
            p Responsible for all design and maintenance of the website. Working to increase web presence and traffic to the website by making it a better source for information. Interacting often with management to come up with the best solution to their needs.
            .text-h6 Impacts
            ul
              li Designed and developed a user-friendly website, increasing web traffic and allowing for the website to be used as a central hub bringing it in line with other competitors.
              li Created a booking system allowing the company to reopen and manage capacity safely during the COVID-19 pandemic and allowing over 3000 families to revisit the soft-play center.
              li Made the decision to move the website to a framework, significantly improving functionality and speed of the website.
            .text-h6 Projects
            ul
              li
                b Booking System: 
                span The most recent undertaking for this role was to aid Jungleland with their COVID secure reopening. They were required to take bookings in order to limit capacity and my Manager asked if I would be able to build a system for them to use. The system used a Vue.js front end which communicated with an AWS AppSync GraphQL API. This enabled me to build a functional booking system for end users as well as an admin and statistic panel for the Jungleland management. This system enabled over 3000 families to book their play sessions in its first month of being operational.
              li
                b Website: 
                span When I took over the website maintenance for Jungleland, they had a static website made up of images that was old, slow and not inline with the most up-to-date technologies. I started with a full redesign using bootstrap and HTML5 which bought the website in line with current trends. This then changed a few years later after I had completed University when I recreated the basic design of my first website in Vue.js, which updated the website further and allowed for much easier maintenance and a refreshed look. It also opened the possibility for further upgrades in the future with npm packages and new features.
      .section.bg-yellow-3
        .row.q-col-gutter-xl.justify-center.q-pa-xl
          .col-md-4
            .text-h2 Jul 2016 - Aug 2017
            .text-h6 IT Web Technician (Placement)
            .text-subtitle1 The British School of Brussels
            .text-subtitle2 Tervuren, Belgium
          .col-md-8
            .text-h6 Overview
            p Provided first line support to both students and teachers. Worked mainly on the internal administration system to develop new modules and streamline general use.
            .text-h6 Impacts
            ul
              li Reduced complexity of bus route registers by converting paper registers into a new module inside the administration system, increasing available time for both teachers and coordinators.
              li Reduced response time of support tickets by creating a web application to alert technicians of new tickets.
              li Allowed the school to conform to GDPR regulations by creating an application for security to use after their administration system access had to be revoked.
            .text-h6 Projects
            ul
              li
                b Security Application: 
                span One of my projects during my time in Belgium was to create an application for Security to use to help them identify parents/guardians who wished to enter the school. This scope came about as, with the introduction of the GDPR, Security were having their access to the student management system revoked. The end product was a secure web application that allowed the Security team to see the names of all the Parents/Guardians and the basic details of the Students that they are responsible for. Using this, they were able to make informed decisions about any people or cars that wished to enter the premises.
              li
                b Digital Signage: 
                span Spearheaded the project to improve the signage displays around the school. This included moving to new software, training the relevant users on this software and hardware upgrades and configuration for the displays.
              li
                b One-to-One Devices: 
                span Each student from the years 7-9 was provided with a laptop for their school work. These laptops needed to be cleaned, wiped and reimaged at the end of the school year in preparation to be used by the next year of students. This amounted to around 400 existing machines as well as around 200 new devices for the year 7’s.
      .section.fp-bg-1
        .row.fixed-center
          .col-12
            .text-h1 Education
      .section.bg-red-3
        .row.justify-center.q-pa-md
          .col-6
            q-card
              q-card-section
                .row.q-col-gutter-xl.justify-center.q-pa-xl
                  .col-md-6
                    .text-h2 2018 - 2019
                    .text-h6 University of Huddersfield
                  .col-md-6
                    .text-h6 Pass with Distinction
                    .text-subtitle1 MEng Computing Science
        .row.justify-center.q-pa-md
          .col-6
            q-card
              q-card-section
                .row.q-col-gutter-xl.justify-center.q-pa-xl
                  .col-md-6
                    .text-h2 2014 - 2018
                    .text-h6 University of Huddersfield
                  .col-md-6
                    .text-h6 Upper Second-Class Honours
                    .text-subtitle1 BSc Computing Science
        .row.justify-center.q-pa-md
          .col-6
            q-card
              q-card-section
                .row.q-col-gutter-xl.justify-center.q-pa-xl
                  .col-md-6
                    .text-h2 2012 - 2014
                    .text-h6 Telford College
                  .col-md-6
                    .text-h6 Triple Distinction Star
                    .text-subtitle1 BTEC Extended Diploma Software Design and Development
      .section.fp-bg
        .row.fixed-center
          .col-12
            .text-h1 Skills
      .section.bg-orange-3
        .row.justify-center.q-pa-md.q-col-gutter-md
          .col-5
            q-card
              q-card-section
                .text-h6 Technical Skills
                .row.justify-center.q-pa-md.q-col-gutter-md.text-center
                  .col-6
                    .skill(v-for="i in skills")
                      .inner(v-if="i.id <= 4")
                        b {{i.name}}
                        .rating
                          q-rating(v-model='i.value', size='1.5em' color="primary" :max="10", icon='far fa-square' icon-selected="fas fa-square" readonly).q-mb-md.gt-sm
                          q-rating(v-model='i.mobile', size='1.5em' color="primary" :max="5", icon='far fa-square' icon-selected="fas fa-square" readonly).q-mb-md.lt-md
                  .col-6
                    .skill(v-for="i in skills")
                      .inner(v-if="i.id > 4")
                        b {{i.name}}
                        .rating
                          q-rating(v-model='i.value', size='1.5em' color="primary" :max="10", icon='far fa-square' icon-selected="fas fa-square" readonly).q-mb-md.gt-sm
                          q-rating(v-model='i.mobile', size='1.5em' color="primary" :max="5", icon='far fa-square' icon-selected="fas fa-square" readonly).q-mb-md.lt-md

          .col-5
            q-card
              q-card-section
                .text-h6 Other Skills
                ul
                  li Full UK driving license with access to transport
                  li Experience with Windows (XP, 7, 8 &amp; 10), macOS and Linux.
                  li Experience with building computers from scratch
                  li Proficient in the Microsoft Office package including Word and Excel
                  li Demonstrated a calm approach to working individually and in a team in pressurised work environments
</template>

<script>
import 'fullpage.js/dist/fullpage.css'
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      options: {
        menu: '#myMenu',
        anchors: ['experience', 'cgg', 'jungleland', 'bsb', 'education', 'eduOverview', 'skills', 'skillsOverview'],
        navigation: true,
      },
      skills: [
        {
          id: 1,
          name: 'HTML',
          value:10,
          mobile:5
        },
        {
          id: 2,
          name: 'CSS',
          value: 8,
          mobile: 4
        },
        {
          id: 3,
          name: 'SQL',
          value: 8,
          mobile: 4
        },
        {
          id: 4,
          name: 'Vue.js',
          value: 7,
          mobile: 4
        },
        {
          id: 5,
          name: 'Quasar',
          value: 7,
          mobile: 4
        },
        {
          id: 6,
          name: 'PHP',
          value: 7,
          mobile: 4
        },
        {
          id: 7,
          name: 'Git',
          value: 6,
          mobile: 3
        },
        {
          id: 8,
          name: 'React',
          value: 4,
          mobile: 2
        },
      ],
    }
  }
}
</script>

<style lang="sass" scoped>
b
  font-family: 'Poppins-SemiBold'
#myMenu
  position: absolute
  z-index: 1000
  left: 10
  top: 50
.fp-bg
  background: url("../assets/other.svg")
  background-size: cover
  background-position: 50% 100%
  top: 0
  bottom: 0
  width: 100%
  position: relative
  z-index: -1
  transform: translate3d(0,0,0)
.fp-bg-1
  background: url("../assets/vectors1.svg")
  background-size: cover
  background-position: 50% 100%
  top: 0
  bottom: 0
  width: 100%
  position: relative
  z-index: -1
  transform: translate3d(0,0,0)
.text-h6
  font-family: 'Poppins-SemiBold'
.text-h2
  font-family: 'Poppins-SemiBold'
.spacing
  letter-spacing: 0.25rem
.separator
  width: 25%
  height: 3px
  background-color: #cc3333
  margin: 0 auto
  margin-top: 25px
  margin-bottom: 25px
.text-h6
  font-family: 'Poppins-SemiBold'
  font-size: 1.5em
.date
  font-family: 'Poppins-SemiBold'
  font-size: 1.25em
</style>