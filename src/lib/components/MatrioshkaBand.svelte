<script lang="ts">
	export let image: string = '';
	export let dirrection: string = 'left';
	export let padding: string = '';
	let animationDirr: string;

	function dirr(d: string) {
		if (d === 'right') {
			animationDirr = 'left';
			return '69vw';
		} else {
			animationDirr = 'right';
			return '7vw';
		}
	}
</script>

<div id="band">
    <div
	id="circle-div"
		style="left:{dirr(dirrection)}; position: relative; background: wheat; place-content: center; display: flex;"
		class="bg-wheat z-1 rounded-full p-{padding}"
		data-aos="fade-{animationDirr}"
	>
		<img
			id="circle"
			alt=""
			class="bg-wheat z-1 p-{padding}"
			src={image}
			data-aos="fade-{animationDirr}"
		/>
	</div>
</div>

<style>
	#band {
		background-size: auto 200%;
		height: 100px;
		background-image: url('/matrioshkaBand.jpg');
	}
	.circle {
		position: relative;
		top: -70px;
		/* left: -34vw; */
	}
	#circle {
		place-self: center;
		width: 150px; 
		height: 150px; 
	}
	#circle-div {
		height: 192px;
		width: 192px;
		bottom:7vh;
	}
	@media screen and (max-width: 800px) {
		/* less than 850px */
		#circle {
			width: 90px;
			height: 90px;
		}
		#circle-div {
			left: 2vw;
			bottom: 2vh;
			position: relative;
			background: wheat;
			place-content: center;
			display: flex;
			width: 130px;
			height: 130px;
		}
	}
</style>
