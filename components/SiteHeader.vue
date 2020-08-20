<template>
  <div>
    <SiteBanner bannerTitle="Dimitris Nioras" bannerSubtitle="Transportation Systems Engineer" bannerSize="50vh"></SiteBanner>
    <div class="container intro text-center text-dark">
			<div>
				<h1>Welcome to my website!</h1>
				<hr>
				<p>I am a Transportation Systems Engineer with a passion about<br>
					Public Transportation Systems, Sustainable Mobility, and Technology and Data in Transportation.<br>
					Feel free to browse my website and learn more about my research and hobby projects,<br>
					or contact me if you have any questions.</p>
			</div>
		</div>
    <IntroCards />
  </div>
</template>

<script>
	import IntroCards from './IntroCards'

	export default {
		name: 'SiteHeader',
		components: {
			IntroCards
		}
	}
</script>

<style>
	.intro {
		display: flex;
    align-items: center;
		justify-content: center;
		min-height: 20vh;
		padding: 20px 20px;
	}
</style>