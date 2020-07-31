<template>
  <div>
    <SiteNavbar />
    <Nuxt />
    <SiteFooter />
  </div>
</template>

<script>
import SiteNavbar from '../components/SiteNavbar'
import SiteFooter from '../components/SiteFooter'

export default {
  components: {
    SiteNavbar,
    SiteFooter
  }
}
</script>

<style>

</style>
