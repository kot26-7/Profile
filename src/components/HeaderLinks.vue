<template>
  <b-button-toolbar>
    <b-button-group class="mr-1">
      <b-button to="/" title="Home">
        <b-icon icon="house-door" aria-hidden="true"></b-icon>
      </b-button>
      <b-button to="/profile" title="Profile">
        <b-icon icon="file-person" aria-hidden="true"></b-icon>
      </b-button>
      <b-button to="/skills" title="Skills">
        <b-icon icon="pencil" aria-hidden="true"></b-icon>
      </b-button>
      <b-button to="/contact" title="Contact">
        <b-icon icon="mailbox" aria-hidden="true"></b-icon>
      </b-button>
    </b-button-group>
  </b-button-toolbar>
</template>

<style scoped>
.btn-group {
  width: 100%;
  margin-top: 20px;
}
a.router-link-exact-active {
  color: yellow;
}
</style>