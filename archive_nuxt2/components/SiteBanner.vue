<template>
  <div class="banner">
      <div class="banner-image" :style="bannerSizeStyle">
			</div>
			<div class="banner-text">
  			<div>
					<h1 class="text-dark">{{ bannerTitle }}</h1>
          <p class="text-dark">{{ bannerSubtitle }}</p>
				</div>
			</div>
    </div>
</template>

<script>
export default {
  name: 'SiteBanner',
	props: [
		'bannerTitle',
		'bannerSubtitle',
		'bannerSize'
  ],
  computed: {
    bannerSizeStyle() {
      return 'height: ' + this.bannerSize + ';';
    }
  }
}
</script>

<style>
  .banner {
  	margin: 0 auto;
  	display: flex;
  	align-items: center;
  	text-align: center;
		background-color: rgba(64,64,64,.2);
	}
	.banner-image {
		left: 0;
		right: 0;
		z-index: -1;
		display: flex;
		background-image: url('../static/dimNioras-banner.jpg');
		background-repeat: no-repeat;
  	background-size: cover;
		background-position: center;
		width: 100%;
		-webkit-filter: blur(1px);
		-moz-filter: blur(1px);
		-o-filter: blur(1px);
		-ms-filter: blur(1px);
		filter: blur(1px);
	}

	.banner-text {
		display: flex;
    align-items: center;
		justify-content: center;
	  position: absolute;
	  left: 0;
	  right: 0;
	  z-index: 0;
	}
	.banner-text h1 {
		font-size: 4rem;
		font-weight: 800;
		text-shadow: 2px 2px 8px #FFFFFF;
	}
  .banner-text p {
		font-size: 2rem;
		font-weight: 500;
		text-shadow: 2px 2px 8px #FFFFFF;
	}
</style>