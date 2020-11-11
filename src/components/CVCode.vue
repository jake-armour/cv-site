<template>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
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
            p When starting my refreshed job search, I wanted something that could not only contain my experience and education information, 
              | but also demonstrate the experience that I have. I decided to create a Vue SPA to act as my CV and portfolio to hopefully show to employers that, 
              | what I lack in professional experience, I have the amateur experience neccessary for a Front-end Developer role.
            p Development for this site was straightforward but I also wanted to challenge myself, so I introduced myself to fullpage.js, which allows for the smooth 
              | scrolling visible in my Resume page as well as this page. It culminated with an attractive and easy to use page that allows me to showcase my experience.
        .col-md-12.text-center.q-mt-lg
          .text-h6 Technologies Used
          .technologies.q-mt-md
            q-chip(color='dark', text-color='white', label='Vue.js').q-mr-sm
            q-chip(color='dark', text-color='white', label='Quasar').q-mx-sm
            q-chip(color='dark', text-color='white', label='HTML').q-mx-sm
            q-chip(color='dark', text-color='white', label='Pug').q-mx-sm
            q-chip(color='dark', text-color='white', label='CSS').q-ml-sm
    q-carousel-slide.column.no-wrap.flex-center(name='2')
      .row.justify-center.q-col-gutter-md
        .col-md-8
          .text-h2 This Sections Code
          CVCode
        </code>
      </pre>
    </div>
</template>

<script>

export default {
  
}
</script>