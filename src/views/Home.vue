<template lang="pug">
  transition(name="fade")
    .q-pa-none
      .fp-bg
      .row.justify-center.text-left
        .col-xs-11.lt-md.text-left.q-mt-xl
          .text-h2.q-mt-xl Intro
          p After discovering my passion for web development thanks to my Dad, I couldn't get enough. With an amateur portfolio containing websites for previous jobs and family/friends, I converted this to a full-time development role after graduating from university with my master's degree.
          p I now work with full-stack technologies including PHP, Laravel, Vue.js, GraphQL, Quasar and more. I also look to improve my knowledge on a day-to-day basis by reading about advancements in technologies related to my role.
          q-btn(color='primary' label='Resume', router-link to="/cv").q-mr-md
          q-btn(color='dark' outline label='Portfolio', router-link to="/projects") 
          .email.q-mt-xl
            q-icon(name='fas fa-envelope').q-mr-xs
            a(href="mailto:me@jakearmour.co.uk") me@jakearmour.co.uk
          .linkedin
            q-icon(name='fab fa-linkedin').q-mr-xs
            a(href="https://www.linkedin.com/in/jakearmour/" target="_blank") linkedin.com/in/jakearmour/
          .phone
            q-icon(name='fas fa-phone').q-mr-xs
            a(href="tel:+447388051891") 07388051891
          .address
            q-icon(name='fas fa-map-marker-alt').q-mr-xs
            span 21 Gordon Road, Telford, TF2 7EX
        .col-md-6.fixed-center.gt-sm
          .row.q-col-gutter-lg
            .col-4
              q-card.shadow-8.bg-secondary
                q-card-section.text-center
                  .row.justify-center
                    .col-8
                      img(src="../assets/profile.png" width="100%" style="border-radius:50%").q-mb-sm.q-mt-lg
                  .text-h6 Jake
                  .text-h6 Armour
                  q-separator.q-my-lg
                  span.spacing WEB DEVELOPER
                q-card-section.text-center.q-pa-sm.bg-white.q-mt-md
                  q-btn(type="a" target="_blank"  href="https://www.linkedin.com/in/jakearmour/" color='dark', flat dense icon='fab fa-linkedin-in')
            .col-8
              .text-h2 Intro
              p After discovering my passion for web development thanks to my Dad, I couldn't get enough. With an amateur portfolio containing websites for previous jobs and family/friends, I converted this to a full-time development role after graduating from university with my master's degree.
              p I now work with full-stack technologies including PHP, Laravel, Vue.js, GraphQL, Quasar and more. I also look to improve my knowledge on a day-to-day basis by reading about advancements in technologies related to my role.
              q-btn(color='positive' label='Resume', router-link to="/resume").q-mr-md
              q-btn(color='dark' outline label='Portfolio', router-link to="/portfolio")
              .contact.q-mt-xl
                .email
                  q-icon(name='fas fa-envelope').q-mr-xs
                  a(href="mailto:me@jakearmour.co.uk") me@jakearmour.co.uk
                .phone
                  q-icon(name='fas fa-phone').q-mr-xs
                  a(href="tel:+447388051891") 07388051891
                .address
                  q-icon(name='fas fa-map-marker-alt').q-mr-xs
                  span 21 Gordon Road, Telford, TF2 7EX

</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="sass" scoped>
.fp-bg
  background: url("../assets/vectors1.svg")
  background-size: cover
  background-position: 50% 100%
  top: 0
  bottom: 0
  width: 100%
  position: absolute
  z-index: -1
  transform: translate3d(0,0,0)
a
  text-decoration: none
  color: #000
.text-h2
  font-family: 'Poppins-SemiBold'
.spacing
  letter-spacing: 0.25rem
.separator
  width: 25%
  height: 3px
  background: rgb(77,155,217)
  background: linear-gradient(90deg, rgba(77,155,217,1) 0%, rgba(55,19,254,1) 77%)
  margin: 0 auto
  margin-top: 25px
  margin-bottom: 25px
.text-h6
  font-family: 'Poppins-SemiBold'
  font-size: 1.5em
</style>