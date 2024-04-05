<script lang="ts">
	import MatrioshkaBand from './MatrioshkaBand.svelte';
	export let image: string;
	export let title: string;
	export let caption: string = '';
</script>

<div>
	<div class="image-container">
		<!-- <img style="background-image: url(/first-photo.jpg)" class="h-screen" src="/first-photo.jpg" alt='' data-aos="zoom-in"/> -->
	</div>
	<div id="title" class="absolute flex w-full flex-col text-white opacity-90">
		<p
			class="flex justify-center text-center font-lora text-5xl font-bold"
			data-aos="fade-up"
			data-aos-once="true"
			data-aos-duration="500"
		>
			{title}
		</p>
		<h2 class="text-center text-xl font-bold">{caption}</h2>
		<!-- <a href="contact" class="flex justify-center">
			<button class="button" color="purple">BOOK NOW</button>
		</a> -->
	</div>
</div>
<MatrioshkaBand {image} />

<!-- 340 or 250 -->
<!-- <div style="height: 250px; width: 100%" class="flex items-center bg-stone-400 text-center justify-center">
    <img src="" alt=""/>
    <slot/>
</div> -->

<style>
	#title {
		top: 30vh
	}
	.image-container {
		background-image: url('/first-photo.jpg');
		background-position: center;
		display: inline-block;
		width: 100%;
		height: 340px;
		background-size: cover;
		background-repeat: no-repeat;
	}
	div > p {
		text-shadow: 0px 3.29103px 5.7593px rgba(0, 0, 0, 0.43);
		font-size: 32px;
		font-weight: 800;
		letter-spacing: 0.01em;
		line-height: 40px;
		margin-bottom: 5px;
		text-transform: uppercase;
	}
	div > h2 {
		letter-spacing: 0.01em;
		text-shadow: 0px 3.29103px 5.7593px rgba(0, 0, 0, 0.43);
		font-size: 16px;
		font-weight: 800;
		margin-bottom: 25px;
		line-height: 20px;
	}
	@media screen and (max-width: 1024px) {
        #title {
            top: 20vh;
        }
    }
</style>
