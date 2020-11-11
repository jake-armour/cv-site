<template lang="pug">
  
    .info.lt-md
      .bg-blue-2.q-mt-md
        .row.justify-center.q-col-gutter-md
          .col-md-7.col-xs-11
            h2.q-mb-xs Jungleland Booking System
            a(target="_blank" href="http://www.junglelandtelford.com") 
              b View Website
            br
            br
            p When the company wanted to reopen after their enforced closure due to COVID, they were required to limit their capacity to around 40% to enforce social distancing measures. They contacted me to find out if I could create a solution to allow them to do this.
            p Using AWS Amplify and their AppSync API, I was able to create and integrate a booking system utilising the Quasar Vue.js component framework and AppSync's GraphQL backend. This system is made up of the customer section, an admin section and also a statistics section.
            p
              b Customer Section: 
              | The customer section uses a dialog box triggered from a button on the main page of the Jungleland website. This then has a series of pages for customers to select the date and timeslot for their booking. It then prompts them for their information and then, once submitted, creates this booking in the AppSync endpoint.
            p
              b Admin Section: 
              | The admin section is simpler than the customer section. Stored behind a password protected URL, the receptionist is then able to select the date they want to see bookings for. They are then presented with buttons for each timeslot. Upon clicking these buttons, a table appears with all bookings for that timeslot, giving the receptionist an oppurtunity to mark the customer as arrived, or cancel unnecessary bookings.
            p
              b Statistics Section: 
              | I added this section to allow Jungleland management to keep track of how certain dates/timeslots are performing. It contains cards with graphs and general information on such as total bookings, bookings per timeslot per date and more.
            p Since its launch on the 10th September, there have been a total of over 3500 bookings made with this system.
          .col-xs-11.text-center
            .text-h6 Technologies Used
            .technologies.q-mt-md
              q-chip(color='dark', text-color='white', label='Vue.js').q-mr-sm
              q-chip(color='dark', text-color='white', label='Quasar').q-mx-sm
              q-chip(color='dark', text-color='white', label='HTML').q-mx-sm
              q-chip(color='dark', text-color='white', label='Pug').q-mx-sm
              q-chip(color='dark', text-color='white', label='CSS').q-mx-sm
              q-chip(color='dark', text-color='white', label='AWS Amplify').q-mx-sm
              q-chip(color='dark', text-color='white', label='GraphQL').q-mx-sm
              q-chip(color='dark', text-color='white', label='Auth0').q-mx-sm
              q-chip(color='dark', text-color='white', label='Git').q-ml-sm
          .col-md-4.col-xs-11.q-pb-lg
            q-carousel.shadow-1.rounded-borders(v-model='slide', transition-prev='jump-right', transition-next='jump-left', swipeable, animated, control-color='dark', prev-icon='fas fa-chevron-left', next-icon='fas fa-chevron-right', navigation-icon='far fa-circle', navigation, padding, arrows, height='250px')
              q-carousel-slide(name='1')
                img(src="@/assets/portfolio/slide1.png" style="width:100%")
              q-carousel-slide(name='2')
                img(src="@/assets/portfolio/slide2.png" style="width:100%")
              q-carousel-slide(name='3')
                img(src="@/assets/portfolio/slide3.png" style="width:100%")
              q-carousel-slide(name='4')
                img(src="@/assets/portfolio/slide4.png" style="width:100%")
              q-carousel-slide(name='5')
                img(src="@/assets/portfolio/slide5.png" style="width:100%")
      .section.bg-green-2.q-mt-md
        .row.justify-center.q-col-gutter-md
          .col-md-7.col-xs-11.text-dark
            h2.q-mb-xs Jungleland Telford Website
            a(target="_blank" href="http://www.junglelandtelford.com") 
              b View Website
            br
            br
            p I have been responsible for the design and management of Junglelands website for over 4 years now. They originally had a static website made up of images which was slow and approaching 6 years old. I offered to help out and redesign the website as I was after professional experience in the area I was studying. This went down very well and they got an up-to-date website utilising HTML5 and Bootstrap which bought the website in line with current trends.
            p Then, when I had started to learn Vue a couple of years later, I proposed to management that switching the website over from HTML5 to Vue would make a lot of sense in terms of market trends and ability to deliver information. This suggestion was received well and I started on the rewriting of the website using Vue.js and the Quasar component pack. This allowed for my development time to come down which meant that more information could be updated on the website easier. It also allowed for the introduction of reactive items like the "Currently Open/Closed" chip in the menu bar. This change then paid off during the COVID-19 pandemic when the booking system was introduced as it was easy to integrate with both of them using Vue.
          .col-xs-11.text-center
            .text-h6 Technologies Used
            .technologies.q-mt-md
              q-chip(color='dark', text-color='white', label='Vue.js').q-mr-sm
              q-chip(color='dark', text-color='white', label='Vue Router').q-mx-sm
              q-chip(color='dark', text-color='white', label='Quasar').q-ml-sm.q-mr-sm
              q-chip(color='dark', text-color='white', label='HTML').q-ml-sm.q-mr-sm
              q-chip(color='dark', text-color='white', label='Pug').q-ml-sm.q-mr-sm
              q-chip(color='dark', text-color='white', label='CSS').q-ml-sm.q-mr-sm
              q-chip(color='dark', text-color='white', label='Git').q-ml-sm
          .col-md-4.col-xs-11.q-pb-lg
            a(target="_blank" href="http://www.junglelandtelford.com") 
              img(src="@/assets/portfolio/jungleland.png" width="100%")
      .section.bg-yellow-3
        .row.justify-center.q-col-gutter-md
          .col-xs-11.text-dark
            h2.q-mb-xs My CV Website
            .overview.q-mt-md
              p When starting my refreshed job search, I wanted something that could not only contain my experience and education information, but also demonstrate the experience that I have. I decided to create a Vue SPA to act as my CV and portfolio to hopefully show to employers that, what I lack in professional experience, I have the amateur experience neccessary for a Front-end Developer role.
              p Development for this site was straightforward but I also wanted to challenge myself, so I introduced myself to fullpage.js, which allows for the smooth scrolling visible in my Resume page as well as this page. It culminated with an attractive and easy to use page that allows me to showcase my experience.
          .col-xs-11.q-pb-lg
            q-card
              img(src="@/assets/portfolio/cv.png" width="100%")
      .section.bg-orange-2.q-mt-md
        .row.justify-center.q-col-gutter-md
          .col-md-11.col-xs-11
            h2.q-mb-sm CGG
            p Unfortunately, due to it being an internal site and containing confidential information, I cannot showcase any of my work undertaken during my time at CGG.
            P I can however, talk about projects and what technologies were used.
            ul
              li.text-dark
                b Resource Visualisation: 
                span My main project in this job so far has been the development from scratch of a new system to manage the state of all of the machines in our server farm. I was tasked with the frontend development of this system. Because this was a fresh system, we were allowed to choose our own technology stack away from the confines of the current system. For the frontend, I went for a Vue.js framework using the Quasar component pack. This was my first experience developing a large-scale application with Vue.js as well as integrating a system with a backend API. It was received very well by colleagues in the office and would catch the attention of people walking by. Unfortunately, this system was shelved due to staffing issues, but the experience gained was incredibly useful.
              li.text-dark
                b User Profile: 
                span Another project I undertook during this employment was the rewrite of the entire user profile section of the internal website. Other colleagues in the team had started to move the profile section to a new URL but it was initially put together with iframes to the old URL. I was tasked with recreating these pages outside of iframes in the new URL, this allowed me to gain extensive knowledge in PHP and I could make decisions with streamlining the new profile so that relevant information could be delivered in an effective format.
              li.text-dark
                b Wiki: 
                span My most recent undertaking was to research and implement a centralised wiki system for both the geoscientists and us developers. This involved me researching multiple wiki software’s and ultimately making a decision on MediaWiki. I then took this decision and presented it to my Manager with pros and cons compared to other software’s. Once this decision had been approved, I then installed and configured a multi-domain wiki on our internal website. This is now used by all employees of the company to access any relevant information during their work.

</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data() {
    return {
      active: 1,
      slide: '1',
      options: {
        menu: '#menu',
      }
    }
  },
  methods: {
    onScroll(info) {
      console.log(info)
    }
  }
}
</script>

<style lang="sass" scoped>
li
  color: #ccc
li.active a, li.active i
  color: #000
.menu
  position: absolute
  left: 10px
  top: 50vh
  z-index: 10000
a
  text-decoration: none
  color: #333
.rotate
  -webkit-transform: rotate(-7deg)
  -ms-transform: rotate(-7deg)
  transform: rotate(-7deg)
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
.test
  height: 100vh
  width: 100%
  background-color: #e6dace
  position: relative
  z-index: 1
.text-h6
  font-family: 'Poppins-SemiBold'
  font-size: 1.5em
.date
  font-family: 'Poppins-SemiBold'
  font-size: 1.25em
</style>