<template>
<div>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand href="/">
      <img src="../static/dimNioras-logo-small-512px.png" width="30" height="30" class="d-inline-block align-center" alt="DN">
      Dimitris Nioras
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav  class="ml-auto">
        <b-nav-item href="/documents/dimNioras-resume.pdf" target="_blank">Resume</b-nav-item>
        <b-nav-item-dropdown text="Projects" right>
          <b-dropdown-item><nuxt-link to="/research-projects">Research Projects</nuxt-link></b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item><nuxt-link to="/athens-public-transit-archive">Athens Public Transit Archive</nuxt-link></b-dropdown-item>
          <b-dropdown-item><nuxt-link to="/paper-bus-models">Paper Bus Models</nuxt-link></b-dropdown-item>
        </b-nav-item-dropdown>
        <b-button variant="outline-secondary" href="mailto:dimnioras@icloud.com">Contact</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style>

</style>