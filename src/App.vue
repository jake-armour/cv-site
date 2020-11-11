<template lang="pug">
  q-layout(view='hhr LPR lFf')
    q-header
      q-toolbar.bg-white.text-dark
        router-link(to="/")
          q-icon(name='fas fa-square' color="primary").q-mr-sm
          b.text-h6.q-mr-sm.gt-sm Jake Armour 
          span.text-h6.text-weight-light.gt-sm / Web Developer
        q-space
        q-btn(router-link to="/" color='dark', flat dense label='About' v-bind:class="{'text-primary' : this.$route.name == 'Home'}").q-mr-md
        q-btn(router-link to="/resume" color='dark', flat dense label='Resume' v-bind:class="{'text-primary' : this.$route.name == 'Resume'}").q-mr-md.gt-sm
        q-btn(router-link to="/cv" color='dark', flat dense label='Resume' v-bind:class="{'text-primary' : this.$route.name == 'CV'}").q-mr-md.lt-md
        q-btn(router-link to="/portfolio" color='dark', flat dense label='Portfolio' v-bind:class="{'text-primary' : this.$route.name == 'Portfolio'}").q-mr-md.gt-sm
        q-btn(router-link to="/projects" color='dark', flat dense label='Portfolio' v-bind:class="{'text-primary' : this.$route.name == 'Projects'}").q-mr-md.lt-md
    q-page-container
      transition(name="fade" mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter")
        router-view
</template>

<script>
import 'prism-es6/prism'
import 'prism-es6/components/prism-markup-templating';
import 'prism-es6/components/prism-pug';
import 'prism-es6/components/prism-graphql';

export default {
  name: 'App',
  data () {
    return {
      leftDrawerOpen: false,
      scrollInfo: {}
    }
  },
  methods: {
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
    onScroll (info) {
      this.scrollInfo = info
    }
  }
}
</script>

<style>
.q-carousel__prev-arrow {
  position: absolute;
  height: 100px!important;
  left: 40vw!important;
  top: 91vh!important;
}
.q-carousel__next-arrow {
  position: absolute;
  height: 100px!important;
  right: 40vw!important;
  top: 91vh!important;
}

a {
  text-decoration: none;
  color: #000
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity;
  overflow: hidden;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.q-page-container {
  padding-top: 0!important;
}
.text-h6 {
  font-family: 'Poppins-SemiBold';
}
.text-weight-light {
  font-family: 'Poppins-Regular';
}
body {
  font-family: 'Avenir'!important;
}
</style>
