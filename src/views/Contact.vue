<template lang="pug">
  transition(name="fade")
    .q-pa-none
      .fp-bg
      .row
        .col-md-4.col-xs-11.fixed-center
          q-card.shadow-8.bg-secondary
            q-card-section.text-center
              .text-h6 Jake Armour
              q-separator.q-my-lg
              span.spacing WEB DEVELOPER
            q-card-section.text-center.q-pa-sm.bg-white.q-mt-md
              .row.q-col-gutter-md
                .col-12
                  q-icon(name='fas fa-envelope').q-mr-sm
                  a(href="mailto:me@jakearmour.co.uk") me@jakearmour.co.uk
                  br
                  br
                  q-icon(name='fas fa-phone-alt').q-mr-sm
                  a(href="tel:07388051891") 07388051891
                  br
                  br
                  q-icon(name='fab fa-linkedin').q-mr-sm
                  a(target="_blank"  href="https://www.linkedin.com/in/jakearmour/") /jakearmour

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
.col-12
  font-size: 1.5em
a
  text-decoration: none
  color: #000
.text-h2
  font-family: 'Poppins-SemiBold'
.spacing
  letter-spacing: 0.25rem
.separator
  width: 10%
  height: 3px
  background-color: #3d3f59
  margin: 0 auto
  margin-top: 25px
  margin-bottom: 25px
.test
  height: 100vh
  margin-top: -50px
  width: 100%
  background-color: #3d3f59
.text-h6
  font-family: 'Poppins-SemiBold'
  font-size: 1.5em
</style>