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
    head() {
      return {
        title: 'Research Projects',
        meta: [
          {
            hid: 'title',
            name: 'title',
            content: 'Transportation-related Research Projects'
          },
          {
            hid: 'description',
            name: 'description',
            content: process.env.npm_package_description
          }
        ]
      }
    },
    components: {
      ResearchCards,
      SiteBanner
    }
  }
</script>

<style scoped>
  
</style>