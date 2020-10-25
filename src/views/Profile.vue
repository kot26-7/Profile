<template>
  <b-container class="about">
    <vue-headful title="Profile - Myprofile"/>
    <h1 class="main-title">Profile</h1>
    <div id="profile-field">
      <h6>現在ポートフォリオを制作しながら、就職活動をしております。</h6>
      <h6>2020年2月から6ヶ月間ポテパンキャンプでの学習を開始。</h6>
      <b-col class="profile-content" sm="8" md="8">
        <b-row class="pc-row">
          <b-col class="pc-title" md="5" offset-md="1" lg="4" offset-lg="2">Name</b-col>
          <b-col class="pc-prop" cols="10" md="5">岡植 孝太郎 ( Kotaro Okaue )</b-col>
        </b-row>
        <b-row class="pc-row">
          <b-col class="pc-title" md="5" offset-md="1" lg="4" offset-lg="2">University</b-col>
          <b-col class="pc-prop" cols="10" md="5">名桜大学 国際文化専攻</b-col>
        </b-row>
        <b-row class="pc-row">
          <b-col class="pc-title" md="5" offset-md="1" lg="4" offset-lg="2">Github</b-col>
          <b-col class="pc-prop" cols="10" md="5">
            <a href="https://github.com/kot26-7">kot26-7</a>
          </b-col>
        </b-row>
        <b-row class="pc-row">
          <b-col class="pc-title" md="5" offset-md="1" lg="4" offset-lg="2">Qiita</b-col>
          <b-col class="pc-prop" cols="10" md="5">
            <a href="https://qiita.com/kot26-7">kot26-7</a>
          </b-col>
        </b-row>
      </b-col>
    </div>
  </b-container>
</template>

<style scoped>
  #profile-field {
    margin-top: 40px;
    width: 100%;
  }
  .profile-content {
    margin: 20px auto;
  }
  .pc-prop {
    font-weight: bold;
  }
  .pc-row {
    margin-bottom: 10px;
  }
  .pc-title, .pc-prop {
    text-align: left;
  }
</style>
