<template>
  <div class="bg-light">
		<b-container class="cards">
      <b-row cols-md="4" class="justify-content-md-center">
        <b-col md="4" v-for="card in introCardData" :key="card.name">
				  <SiteCard  :cardTitle=card.name :cardDescription=card.description :cardLink=card.link :cardIcon=card.icon></SiteCard>
			  </b-col>
      </b-row>
		</b-container>
  </div>
</template>

<script>
  import SiteCard from './SiteCard'
  
  export default {
    name: 'IntroCards',
    data: function () {
      return {
        introCardData: [
          {
  					name: 'Research Projects',
            description: 'Click here to see transit-related research projects I completed and shared at conferences and meetings',
            link: '/research-projects',
            icon: 'fas fa-project-diagram'
  				},
  				{
  					name: 'Athens Public Transport Archive',
            description: 'This project is a dynamic archive of the history of public transport in my hometown, Athens, Greece. Click here to see a collection of maps and brochures from 1979 to date.',
            link: '/'/*'/athens-public-transport-archive'*/,
            icon: 'fas fa-map'
  				},
  				{
  					name: 'Paper Bus Models',
            description: 'This is my first transit-related hobby project. Click to see a collection of paper bus model designs that you can print and assemble on your own.',
            link: '/'/*'/paper-bus-models'*/,
            icon: 'fas fa-bus'
  				}
        ]
      }
    },
  	components: {
  		SiteCard
  	}
  }
</script>

<style>
  .cards {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 30vh;
    padding: 5vh;
	}
  ul {
    list-style-type: none;
  }
  .card {
    align-items: center;
  }
</style>