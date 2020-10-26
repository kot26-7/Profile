<template>
  <b-container id="app">
    <HeaderLinks/>
    <div id="view-zone">
      <transition>
        <router-view/>
      </transition>
    </div>
  </b-container>
</template>

<script>
import HeaderLinks from '@/components/HeaderLinks'

export default {
  name: 'App',
  components: {
    HeaderLinks
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body {
  height: 100vh;
  background-image: -webkit-linear-gradient(top, #EBEBEB 0%, #DCDDDF 48%, #C4C5C7 99%);
  background-image: linear-gradient(-180deg, #EBEBEB 0%, #DCDDDF 48%, #C4C5C7 99%);
}
h1 {
  font-family: 'Economica', sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-title {
  font-size: 3rem;
}
#view-zone {
  margin-top: 50px
}
.v-enter {
  transform: translate(0, -50px);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 2s 1s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(0, 100px);
  opacity: 0;
}
.v-leave-active {
  transition: all 1s 0s ease;
}
</style>
