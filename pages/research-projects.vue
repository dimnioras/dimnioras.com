<template>
  <div>
    <SiteBanner bannerTitle="Research Projects" bannerSize="20vh"></SiteBanner>
    <ResearchCards />
  </div>
</template>

<script>
  import ResearchCards from '../components/ResearchCards'
  import SiteBanner from '../components/SiteBanner'

  export default {
    components: {
      ResearchCards,
      SiteBanner
    }
  }
</script>

<style scoped>
  
</style>