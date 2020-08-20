<template>
	<div>
	  <b-card class="mx-auto text-center shadow p-3 bg-white rounded">
			<b-card-title><img :src="cardPhoto"></img></b-card-title>
			<b-card-title class="pre-formatted">{{ cardTitle }}</b-card-title>
	    <b-card-text class="pre-formatted">{{ cardDescription }}</b-card-text>
	    <b-button v-for="file in cardFiles" :key="file.link" target="_blank" :href="file.link" variant="primary" class="card-button">View {{ file.type }}</b-button>
	  </b-card>
	</div>
</template>

<script>
export default {
	name: 'SitePhotoCard',
	props: [
		'cardTitle',
		'cardDescription',
		'cardFiles',
		'cardPhoto'
	]
}
</script>

<style scoped>
	.pre-formatted {
	  white-space: pre-line;
	}
	.card-button {
		display: inline-block;
		margin: 2%;
	}
	img {
		width: 100%;
		margin-bottom: 2%;
	}
</style>