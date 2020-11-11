<template>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
// Basic page CSS and anchor
.page.intro-bg#home
  .row.q-col-gutter-md.justify-center.q-pt-xl.q-pb-xl
    .col-md-8.col-xs-11.text-center.text-white
      // Changes font size between mobile and desktop to fit
      h2.header.rotate.gt-sm WELCOME BACK
      h2.rotate.lt-md WELCOME BACK
      // Main body text for home
      h2.large.q-pt-xl Jungleland is now open every day!
        br
        | We have our COVID Controls in place during our limited capacity sessions. 
        br
        | Book now for a safe and fun visit to Jungleland!
    // Center justified buttons for all home bookings
    .col-md-12.col-xs-12.text-center.text-white
      // Sets "bookings" to true, opens booking dialog
      q-btn(color='white', text-color="primary" label='Book Your Play Session Now', @click='bookings = true, slide = 1' size="xl") 
      p.small Payment will be taken on arrival at Jungleland
      // Scrolls to contact form
      q-btn(color='grey-4' text-color="primary", label='Need to cancel a booking? Contact us', type="a" href="#contact" v-smooth-scroll).q-mt-sm
      br
      // Scrolls to COVID information
      q-btn(color='green', text-color="white", label='Covid Control Information', size="lg" type="a" href="#covid" v-smooth-scroll).q-mt-lg
        </code>
      </pre>
    </div>
</template>

<script>

export default {
  
}
</script>