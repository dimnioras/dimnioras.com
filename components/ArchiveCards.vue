<template>
  <div class="bg-light">
		<b-container class="cards">
      <b-row cols-md="4" class="justify-content-md-center">
        <b-col md="6" v-for="card in introCardData" :key="card.name">
				  <ExternalLinkCard  :cardTitle=card.name :cardLabel=card.label :extLink=card.link :cardIcon=card.icon></ExternalLinkCard>
			  </b-col>
      </b-row>
		</b-container>
  </div>
</template>

<script>
  import ExternalLinkCard from './ExternalLinkCard'
  
  export default {
    name: 'ArchiveCards',
    data: function () {
      return {
        introCardData: [
          {
  					name: 'Χάρτες',
            label: 'Maps',
            link: 'https://u.pcloud.link/publink/show?code=kZnt7xXZBPE9jCRtPUy8thBv6fQkQpqd6YRX',
            icon: 'fas fa-map'
  				},
  				{
  					name: 'Φυλλάδια',
            label: 'Brochures',
            link: 'https://u.pcloud.link/publink/show?code=kZh67xXZzwClVBbivlVQT6HNqgv95z0rhY1k',
            icon: 'fas fa-book-open'
  				}
        ]
      }
    },
  	components: {
  		ExternalLinkCard
  	}
  }
</script>

<style>
  .bg-light {
    font-family: 'sans-serif';
  }
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