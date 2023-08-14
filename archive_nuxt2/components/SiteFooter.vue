<template>
<div class="bg-secondary">
  <b-container>
    <b-row cols="5" class="footer-row text-center justify-content-md-center">
      <b-col md="auto"><a href="mailto:dimnioras@icloud.com"><i class="fas fa-envelope fa-2x"></i></a></b-col>
      <b-col md="auto"><a href="https://twitter.com/dimnioras" target="_blank"><i class="fab fa-twitter fa-2x"></i></a></b-col>
      <b-col md="auto"><a href="https://www.linkedin.com/in/dimnioras/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a></b-col>
      <b-col md="auto"><a href="https://gitlab.com/dimnioras" target="_blank"><i class="fab fa-gitlab fa-2x"></i></a></b-col>
      <b-col md="auto"><a href="https://github.com/dimnioras" target="_blank"><i class="fab fa-github fa-2x"></i></a></b-col>
    </b-row>
  </b-container>
  <b-container>
    <b-row cols-md="3" class="footer-row text-center justify-content-md-center">
      <b-col md="auto">
        <div>
          <i class="fab fa-creative-commons"></i>
          <i class="fab fa-creative-commons-by"></i>
          <i class="fab fa-creative-commons-sa"></i>
          <a href="https://creativecommons.org/" target="_blank">Dimitris Nioras</a>
        </div>
      </b-col>
      <b-col md="auto">
        <div>
          Designed Using: 
          <a href="https://vuejs.org/" target="_blank">VueJS</a> | 
          <a href="https://nuxtjs.org/" target="_blank">NuxtJS</a> | 
          <a href="https://getbootstrap.com/" target="_blank">Bootstrap</a>
        </div>
      </b-col>
      <b-col md="auto">
        <div>
          Hosted by: 
          <a href="https://about.gitlab.com/" target="_blank">GitLab</a>
        </div>
      </b-col>
    </b-row>
  </b-container>
  
</div>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
  .footer-row {
    padding: 20px 0;
  }
</style>