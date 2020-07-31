<template>
  <div>
    <div class="header">
      <div class="header-image">
			</div>
			<div class="header-text">
  			<div>
					<h1 class="text-dark">Dimitris Nioras</h1>
					<p class="text-dark">Transportation Systems Engineer</p>
				</div>
			</div>
    </div>
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
	.header {
  	margin: 0 auto;
  	display: flex;
  	align-items: center;
  	text-align: center;
	}
	.header-image {
		left: 0;
		right: 0;
		z-index: -1;
		display: flex;
		background-image: url('../static/dimNioras-banner.jpg');
		background-repeat: no-repeat;
  	background-size: cover;
		background-position: center;
		width: 100%;
		height: 50vh;
		-webkit-filter: blur(1px);
		-moz-filter: blur(1px);
		-o-filter: blur(1px);
		-ms-filter: blur(1px);
		filter: blur(1px);
	}

	.header-text {
		display: flex;
    align-items: center;
		justify-content: center;
	  position: absolute;
	  left: 0;
	  right: 0;
	  z-index: 0;
	}
	.header-text h1 {
		font-size: 4rem;
		font-weight: 800;
		text-shadow: 2px 2px 8px #FFFFFF;
	}
	.header-text p {
		font-size: 2rem;
		font-weight: 500;
		text-shadow: 2px 2px 8px #FFFFFF;
	}
	.intro {
		display: flex;
    align-items: center;
		justify-content: center;
		min-height: 20vh;
		padding: 20px 20px;
	}
</style>