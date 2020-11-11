<template lang="pug">
  transition(name="fade")
    .q-pa-none
      full-page(ref="fullpage" :options="options").gt-sm
        .section.bg-blue-2
          q-carousel.bg-blue-2(v-model='bookingSlide', transition-prev='jump-right', padding transition-next='jump-left', animated, arrows navigation control-color='dark', height="100%")
            template(v-slot:navigation-icon="{active,btnProps, onClick}")
              q-btn(v-if="active", icon='fas fa-circle', size="7px" flat @click='onClick') 
              q-btn(v-else icon='fas fa-circle', size="3px" flat @click='onClick') 
            q-carousel-slide.column.no-wrap.flex-center(name='1')
              .row.justify-center.q-col-gutter-md
                .col-md-4.q-pt-xl
                  q-carousel.shadow-1.rounded-borders(v-model='slide', transition-prev='jump-right', transition-next='jump-left', swipeable, animated, control-color='dark', prev-icon='fas fa-chevron-left', next-icon='fas fa-chevron-right', navigation-icon='far fa-circle', navigation, padding, height='400px')
                    template(v-slot:navigation-icon="{active,btnProps, onClick}")
                      q-btn(v-if="active", icon='fas fa-circle', size="7px" flat @click='onClick') 
                      q-btn(v-else icon='fas fa-circle', size="3px" flat @click='onClick') 
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
                .col-md-8.text-dark
                  .text-h2 Jungleland Booking System
                  .overview.q-mt-md
                    p When the company wanted to reopen after their enforced closure due to COVID, they were required to limit their capacity to around 40% to enforce social distancing measures. They contacted me to find out if I could create a solution to allow them to do this.
                    p Using AWS Amplify and their AppSync API, I was able to create and integrate a booking system utilising the Quasar Vue.js component framework and AppSync's GraphQL backend. This system is made up of the customer section, an admin section and also a statistics section.
                    p
                      b Customer Section: 
                      | The customer section uses a dialog box triggered from a button on the main page of the Jungleland website. This then has a series of pages for customers to select the date and timeslot for their booking. It then prompts them for their information and then, once submitted, creates this booking in the AppSync endpoint.
                    p

                      b Admin Section: 
                      | The admin section is simpler than the customer section. Secured behind Auth0, the receptionist is then able to select the date they want to see bookings for. They are then presented with buttons for each timeslot. Upon clicking these buttons, a table appears with all bookings for that timeslot, giving the receptionist an oppurtunity to mark the customer as arrived, or cancel unnecessary bookings.
                    p
                      b Statistics Section: 
                      | I added this section to allow Jungleland management to keep track of how certain dates/timeslots are performing. It contains cards with graphs and general information on such as total bookings, bookings per timeslot per date and more.
                    p Since its launch on the 10th September, there have been a total of over 3500 bookings made with this system.
                .col-md-12.text-center.q-mt-lg
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
            q-carousel-slide.column.no-wrap.flex-center(name='2')
              .row.justify-between.q-col-gutter-md
                .col-md-12
                  .text-h2.q-mt-xl Vue Method
                  p.q-mt-md This is an example of the methods written for this project. This specific method is used to book the customer into their selected timeslot. I have omitted some code to save some space, but this example shows the process for error handling and routing as well as the GraphQL queries to retrieve and create bookings.
                  .code.text-center
                    BookingCode
            q-carousel-slide.column.no-wrap.flex-center(name='3')
              .row.justify-center.q-col-gutter-md
                .col-md-5.text-dark.q-mt-xl
                  .text-h2.q-mt-xl GraphQL Schema
                  p.q-mt-md With AWS Amplify, the GraphQL schema is defined inside the Vue application's code. This allowed me to gain experience with GraphQL and how the schema is defined. The good part of AWS Amplify is that it automatically generates the Vue query/mutation files ready for the methods to call inside the Vue instance.
                .col-md-5
                  GraphQLCode
            q-carousel-slide.column.no-wrap.flex-center(name='4')
              .row.justify-center.q-col-gutter-md
                .col-md-12.q-pt-xl
                  q-card
                    q-card-section
                      .text-h6 Links
                    q-card-section
                      .website
                        q-icon(name='fas fa-globe' size="lg").q-mr-sm
                        a(href="https://jungleland.xyz" target="_blank") https://jungleland.xyz
                        .info
                          b This is currently hosted on my test domain as the company are under enforced closure
                      .github.q-mt-md
                        q-icon(name='fab fa-github' size="lg").q-mr-sm
                        a(href="https://github.com/jake-armour/jland-amplify" target="_blank") https://github.com/jake-armour/jland-amplify
        .section.bg-green-2
          q-carousel.bg-green-2(v-model='webSlide', transition-prev='jump-right', padding transition-next='jump-left', animated, arrows navigation control-color='dark', height="100%")
            template(v-slot:navigation-icon="{active,btnProps, onClick}")
              q-btn(v-if="active", icon='fas fa-circle', size="7px" flat @click='onClick') 
              q-btn(v-else icon='fas fa-circle', size="3px" flat @click='onClick') 
            q-carousel-slide.column.no-wrap.flex-center(name='1')
              .row.justify-center.q-col-gutter-md
                .col-md-4
                  q-card
                    img(src="@/assets/portfolio/jungleland.png" width="100%")
                .col-md-7.text-dark
                  .text-h2 Jungleland Telford Website
                  .overview.q-mt-md
                    p I have been responsible for the design and management of Junglelands website for over 4 years now. They originally had a static website made up of images which was slow and approaching 6 years old. I offered to help out and redesign the website as I was after professional experience in the area I was studying. This went down very well and they got an up-to-date website utilising HTML5 and Bootstrap which bought the website in line with current trends.
                    p Then, when I had started to learn Vue a couple of years later, I proposed to management that switching the website over from HTML5 to Vue would make a lot of sense in terms of market trends and ability to deliver information. This suggestion was received well and I started on the rewriting of the website using Vue.js and the Quasar component pack. This allowed for my development time to come down which meant that more information could be updated on the website easier. It also allowed for the introduction of reactive items like the "Currently Open/Closed" chip in the menu bar. This change then paid off during the COVID-19 pandemic when the booking system was introduced as it was easy to integrate with both of them using Vue.
                .col-md-12.text-center.q-mt-lg
                  .text-h6 Technologies Used
                  .technologies.q-mt-md
                    q-chip(color='dark', text-color='white', label='Vue.js').q-mr-sm
                    q-chip(color='dark', text-color='white', label='Vue Router').q-mx-sm
                    q-chip(color='dark', text-color='white', label='Quasar').q-ml-sm.q-mr-sm
                    q-chip(color='dark', text-color='white', label='HTML').q-ml-sm.q-mr-sm
                    q-chip(color='dark', text-color='white', label='Pug').q-ml-sm.q-mr-sm
                    q-chip(color='dark', text-color='white', label='CSS').q-ml-sm.q-mr-sm
                    q-chip(color='dark', text-color='white', label='Git').q-ml-sm
            q-carousel-slide.column.no-wrap.flex-center(name='2')
              .row.justify-center.q-col-gutter-md
                .col-md-12
                  .text-h2 Pug Code Example
                  WebCode.q-mt-md
            q-carousel-slide.column.no-wrap.flex-center(name='3')
              .row.justify-center.q-col-gutter-md
                .col-md-12.q-pt-xl
                  q-card
                    q-card-section
                      .text-h6 Links
                    q-card-section
                      .website
                        q-icon(name='fas fa-globe' size="lg").q-mr-sm
                        a(href="https://jungleland.xyz" target="_blank") https://jungleland.xyz
                        .info
                          b This is currently hosted on my test domain as the company are under enforced closure
                      .github.q-mt-md
                        q-icon(name='fab fa-github' size="lg").q-mr-sm
                        a(href="https://github.com/jake-armour/jland-amplify" target="_blank") https://github.com/jake-armour/jland-amplify
        .section.bg-yellow-3
          q-carousel.bg-yellow-3(v-model='cvSlide', transition-prev='jump-right', padding transition-next='jump-left', animated, arrows navigation control-color='dark', height="100%")
            template(v-slot:navigation-icon="{active,btnProps, onClick}")
              q-btn(v-if="active", icon='fas fa-circle', size="7px" flat @click='onClick') 
              q-btn(v-else icon='fas fa-circle', size="3px" flat @click='onClick') 
            q-carousel-slide.column.no-wrap.flex-center(name='1')
              .row.justify-center.q-col-gutter-md
                .col-md-4
                  q-card
                    img(src="@/assets/portfolio/cv.png" width="100%")
                .col-md-7.text-dark
                  .text-h2 My CV Website
                  .overview.q-mt-md
                    p When starting my refreshed job search, I wanted something that could not only contain my experience and education information, but also demonstrate the experience that I have. I decided to create a Vue SPA to act as my CV and portfolio to hopefully show to employers that, what I lack in professional experience, I have the amateur experience neccessary for a Front-end Developer role.
                    p Development for this site was straightforward but I also wanted to challenge myself, so I introduced myself to fullpage.js, which allows for the smooth scrolling visible in my Resume page as well as this page. It culminated with an attractive and easy to use page that allows me to showcase my experience.
                .col-md-12.text-center.q-mt-lg
                  .text-h6 Technologies Used
                  .technologies.q-mt-md
                    q-chip(color='dark', text-color='white', label='Vue.js').q-mr-sm
                    q-chip(color='dark', text-color='white', label='Vue Router').q-mx-sm
                    q-chip(color='dark', text-color='white', label='Quasar').q-mx-sm
                    q-chip(color='dark', text-color='white', label='Fullpage').q-mx-sm
                    q-chip(color='dark', text-color='white', label='HTML').q-mx-sm
                    q-chip(color='dark', text-color='white', label='Pug').q-mx-sm
                    q-chip(color='dark', text-color='white', label='CSS').q-ml-sm
            q-carousel-slide.column.no-wrap.flex-center(name='2')
              .row.justify-center.q-col-gutter-md
                .col-md-12
                  .text-h2.q-mt-xl This Sections Code
                  CVCode
                
</template>

<script>
import BookingCode from '../components/BookingCode'
import WebCode from '../components/WebCode'
import GraphQLCode from '../components/GraphQLCode'
import CVCode from '../components/CVCode'
import 'fullpage.js/dist/fullpage.css'
export default {
  name: 'Home',
  components: {
    BookingCode,
    WebCode,
    GraphQLCode,
    CVCode
  },
  data() {
    return {
      bookingSlide: '1',
      webSlide: '1',
      cvSlide: '1',
      active: 1,
      slide: '1',
      options: {
        menu: '#menu',
        navigation: true,
        navigationPosition: 'left'

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

.fp-bg
  background: url("../assets/grad.svg")
  background-size: cover
  background-position: 50% 100%
  top: 0
  bottom: 0
  width: 100%
  position: relative
  z-index: -1
  transform: translate3d(0,0,0)
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