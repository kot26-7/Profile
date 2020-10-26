<template>
  <b-container class="skills">
    <vue-headful title="Skills - Myprofile"/>
    <h1 class="main-title">My skills</h1>
    <h3 class="sub-title"><span>Skills</span></h3>
    <LanguageList/>
  </b-container>
</template>

<script>
// @ is an alias to /src
import LanguageList from '@/components/LanguageList.vue'
export default {
  name: 'Skills',
  components: {
    LanguageList
  }
}
</script>

<style scoped>
.sub-title {
  font-size: 35px;
  font-family: 'Alegreya Sans SC', sans-serif;
  text-align: center;
  margin: 35px 0 15px;
}
.sub-title span {
  position: relative;
  display: inline-block;
  padding: 0 0.5em;
}
.sub-title span::before, .sub-title span::after {
  position: absolute;
  top: 50%;
  content: '';
  width: 1.5em;
  height: 1px;
  background-color: black;
}
.sub-title span::before {
  left: 100%;
}
.sub-title span::after {
  right: 100%;
}
</style>