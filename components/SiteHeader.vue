<template>
  <div>
    <div class="header">
      <div class="header-image">
			</div>
			<div class="header-text">
  			<h1 class="text-dark">Dimitris Nioras</h1>
				<p class="text-dark">Transportation Systems Engineer</p>
			</div>
    </div>
    <div class="container intro text-center text-dark">
			<h1>Welcome to my website!</h1>
			<h4>I am a Transportation Planner and Engineer, Spatial Analyst and
				Software Enthusiast with a passion about Public Transportation Systems,
				including Strategic and Service Planning, Scheduling, Policy and Management.
				Currently working as a Bus Service Planner at the Chicago Transit Authority.
				Feel free to browse my website and learn more about my activities.</h4>
		</div>
    <div class="cards">

    </div>
  </div>
</template>

<script>
export default {
	name: 'SiteHeader'
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
		min-height: 30vh;
		padding: 20px 20px;
	}
</style>