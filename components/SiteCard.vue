<template>
	<div>
	  <b-card style="max-width: 20rem;" class="mx-auto mb-2 text-center shadow p-3 mb-5 bg-white rounded">
			<b-card-title><i :class="cardIcon+' fa-3x'"></i></b-card-title>
			<b-card-title>{{ cardTitle }}</b-card-title>
	    <b-card-text>{{ cardDescription }}</b-card-text>
	    <b-button :to=cardLink variant="primary">Research Projects</b-button>
	  </b-card>
	</div>
</template>

<script>
export default {
	name: 'SiteCard',
	props: [
		'cardTitle',
		'cardDescription',
		'cardLink',
		'cardIcon'
	]
}
</script>

<style>

</style>