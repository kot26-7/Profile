<template>
  <b-row id="lang-list">
    <b-col sm="6" md="4" lg="3">
      <li class="lang">Ruby</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">Ruby on Rails</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">SQL</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">jQuery</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">HTML</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">CSS</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">Vue.js</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">Docker</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">CircleCI</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">AWS(S3)</li>
    </b-col>
    <b-col sm="6" md="4" lg="3">
      <li class="lang">Heroku</li>
    </b-col>
  </b-row>
</template>

<style scoped>
#lang-list {
  list-style: none;
}
.lang {
  position: relative;
  padding: 0.5em 1em 0.5em 2.3em;
  margin-bottom: 10px;
  color: black;
  font-size: 15px;
  font-weight: bold;
  border-bottom: 1px solid #757575;
}
.lang:after, .lang:before {
  content: "";
  position: absolute;
  border-radius: 50%;
}
.lang:before {
  left: 0.2em;
  width: 17px;
  height: 17px;
  background: rgba(121,189,154,0.5);
  top: 50%;
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.lang:after {
  top: 1.1em;
  left: 0.7em;
  width: 14px;
  height: 14px;
  background: rgba(168,219,168,0.3);
}
</style>