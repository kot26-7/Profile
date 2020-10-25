<template>
  <div class="contact">
    <vue-headful title="Contact - Myprofile"/>
    <h1 class="main-title">Contact</h1>
    <table id="contact-field">
      <tr>
        <th>Email</th>
        <td>taro726896oka@gmail.com</td>
      </tr>
      <tr>
        <th>電話番号(TEL)</th>
        <td>*************</td>
      </tr>
      <tr>
        <th>Facebook</th>
        <td>*************</td>
      </tr>
      <tr>
        <th>Twitter</th>
        <td>*************</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  #contact-field {
    margin-top: 30px;
    width: 100%;
    border-collapse: collapse;
  }
  #contact-field {
    width: 100%;
    border-collapse: collapse;
  }

  #contact-field tr {
    border-bottom: solid 2px #DEDEDE;
  }

  #contact-field tr:last-child {
    border-bottom: none;
  }

  #contact-field th {
    position: relative;
    text-align: left;
    width: 30%;
    background-color: #7B9AD0;
    color: white;
    text-align: center;
    padding: 10px 0;
  }

  #contact-field th:after {
    display: block;
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    top:calc(50% - 10px);
    right:-10px;
    border-left: 10px solid #7B9AD0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }

  #contact-field td {
    text-align: left;
    width: 70%;
    text-align: center;
    background-color: #eee;
    padding: 10px 0;
  }
</style>