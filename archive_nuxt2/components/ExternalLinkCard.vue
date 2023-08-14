<template>
	<div>
	  <b-card style="max-width: 20rem;" class="mx-auto mb-2 text-center shadow p-3 mb-5 bg-white rounded">
			<b-card-title><i :class="cardIcon+' fa-3x'"></i></b-card-title>
			<b-card-title>{{ cardTitle }}</b-card-title>
	    <b-button :href=extLink target=_blank variant="primary">{{ cardLabel }}</b-button>
	  </b-card>
	</div>
</template>

<script>
export default {
	name: 'ExternalLinkCard',
	props: [
		'cardTitle',
		'cardLabel',
		'extLink',
		'cardIcon'
	]
}
</script>

<style>

</style>