<script lang="ts">
	import PageBanner from '$lib/components/PageBanner.svelte';
	import PageSectionImage from '$lib/components/PageSectionImage.svelte';
	import PageSectionParagraph from '$lib/components/PageSectionParagraph.svelte';
	import { Modal } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import { menu } from '$lib/components/menu';
	import Title from '$lib/components/fonts/Title.svelte';
	import PageSectionMenu from '$lib/components/PageSectionMenu.svelte';
	import ButtonCustom from '$lib/components/ButtonCustom.svelte'
	import Headline from '$lib/components/fonts/Headline.svelte';
	import PageSectionCentered from '$lib/components/PageSectionCentered.svelte';
	import Paragraph from '$lib/components/fonts/Paragraph.svelte';
	

	let clickOutsideModal = false;
	let size: any;

	onMount(() => {
		size = 'xs';
	});

	$: innerWidth = 0;

	let divStyle = 'justify-content: flex-start;';
	console.log(innerWidth);
	// Reactive statement to update styles based on window height
	$: {
		if (innerWidth < 1050) {
			divStyle = 'justify-content: center;';
		} else {
			divStyle = 'justify-content: flex-start;'; // Reset style if height is greater than or equal to 1050px
		}
	}

	const entry = menu.filter((item) => item.category === 'cold entree');
	const main = menu.filter((item) => item.category === 'main');
	const meat = menu.filter((item) => item.category === 'meat');
	const desert = menu.filter((item) => item.category === 'desert');
</script>

<svelte:window bind:innerWidth />
<PageBanner title='MENU' image='/icons/food.png'>
	<h2 class="text-center text-5xl font-bold italic">MENU</h2>
</PageBanner>
<div style="padding-top: 64px;">
	<Headline>Here is our Menu:</Headline>
</div>
<Headline>Cold Entree</Headline>
{#each entry as cold_entree}
	<PageSectionMenu width={innerWidth}>
		<div
			class="flex {cold_entree.number % 2 ? 'flex-row' : 'flex-row-reverse'} {innerWidth < 1050
				? 'flex-col justify-center justify-center'
				: 'place-content-between'}"
		>
			<PageSectionImage src={cold_entree.image} width={innerWidth} />
			<PageSectionParagraph position={cold_entree.number % 2 ? 'end' : 'start'} width={innerWidth}>
				<Headline>{cold_entree.name}</Headline>
				<Paragraph>{cold_entree.desc}</Paragraph>
				<Paragraph color= 'transparent' >chicken meat, potatoes, eggs, pickled cucumbers, markings, pickled peas with mayonnaise</Paragraph>
			</PageSectionParagraph>
		</div>
	</PageSectionMenu>
{/each}
<Headline>Hot Entree</Headline>
{#each main as hot_entree}
	<PageSectionMenu width={innerWidth}>
		<div
			class="flex {hot_entree.number % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} {innerWidth < 1050
				? 'flex-col justify-center'
				: 'place-content-between'}"
		>
			<PageSectionImage src={hot_entree.image} width={innerWidth} />
			<PageSectionParagraph position={hot_entree.number % 2 ? 'end' : 'start'} width={innerWidth}>
				<Headline>{hot_entree.name}</Headline>
				<Paragraph>{hot_entree.desc}</Paragraph>
				<Paragraph color="transparent">chicken meat, potatoes, eggs, pickled cucumbers, markings, pickled peas with mayonnaise</Paragraph>
			</PageSectionParagraph>
		</div>
	</PageSectionMenu>
{/each}
<Headline>Main (served with fresh salat)</Headline>
{#each meat as main}
	<PageSectionMenu width={innerWidth}>
		<div
			class="flex {main.number % 2 !== 0 ? 'flex-row' : 'flex-row-reverse'} {innerWidth < 1050
				? 'flex-col justify-center justify-center'
				: 'place-content-between'}"
		>
			<PageSectionImage src={main.image} width={innerWidth} />
			<PageSectionParagraph position={main.number % 2 ? 'end' : 'start'} width={innerWidth}>
				<Headline>{main.name}</Headline>
				<Paragraph>{main.desc}</Paragraph>
				<Paragraph color="transparent">chicken meat, potatoes, eggs, pickled cucumbers, markings, pickled peas with mayonnaise</Paragraph>
			</PageSectionParagraph>
		</div>
	</PageSectionMenu>
{/each}
<!-- <Headline>Desert</Headline>
{#each desert as desert}
	<PageSectionMenu width={innerWidth}>
		<div
			class="flex {desert.number % 2 ? 'flex-row' : 'flex-row-reverse'} {innerWidth < 1050
				? 'flex-col justify-center justify-center'
				: 'place-content-between'}"
		>
			<PageSectionImage src={desert.image} width={innerWidth} />
			<PageSectionParagraph position={desert.number % 2 ? 'end' : 'start'} width={innerWidth}>
				<Headline>{desert.name}</Headline>
				<Paragraph>{desert.desc}</Paragraph>
				<Paragraph color="transparent">chicken meat, potatoes, eggs, pickled cucumbers, markings, pickled peas with mayonnaise</Paragraph>
			</PageSectionParagraph>
		</div>
	</PageSectionMenu>
{/each} -->

<Modal title="Includes:" bind:open={clickOutsideModal} {size} autoclose outsideclose>
	<ul class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
		<li>- Item 1</li>
		<li>- Item 2</li>
		<li>- Item 3</li>
	</ul>
	<svelte:fragment slot="footer">
		<ButtonCustom>OK</ButtonCustom>
	</svelte:fragment>
</Modal>

<style>
	.page-menu {
		padding: 0;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
</style>
