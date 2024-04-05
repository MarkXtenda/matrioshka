<script>
	import PageBanner from '$lib/components/PageBanner.svelte';
	import PageSectionCentered from '$lib/components/PageSectionCentered.svelte';
	import Headline from '$lib/components/fonts/Headline.svelte';
	import Paragraph from '$lib/components/fonts/Paragraph.svelte';
	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<PageBanner title="BOOKING AND CONTACT" image="/icons/contact.png">
	<h2 class="text-center text-5xl font-bold italic">BOOKING</h2>
</PageBanner>
<PageSectionCentered>
	<div
		class="flex flex-row flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-around'}"
	>
		<div style="width: 500px; padding-bottom: 50px;">
			<div
				style="background-color: black; max-width: 120px; margin-bottom:32px;"
				class="max-w-130 p-2"
			>
				<p class="text-white">Contact us</p>
			</div>
			<div style="text-align-last: left;">
				<Headline padding={false} textAlign={'text-left'}>Contact and Booking</Headline>
			</div>
		</div>
		<div style="width: 500px;">
			<Paragraph>
				04 3006 5566<br />
				<a style="color: blue; text-decoration: underline;" href="tel:0386632000">MOBILE</a><br />
				03 9563 5815<br />
				<a style="color: blue; text-decoration: underline;" href="mailto:example@mail.COM.AU"
					>PHONE</a
				><br />
				1046 Princes Hwy Service Rd, Carnegie VIC 3163<br />
				<a
					style="color: blue; text-decoration: underline;"
					href="1046 Princes Hwy Service Rd, Carnegie VIC 3163"
					target="_blank"
					rel="noopener">DROP IN</a
				>
			</Paragraph>
		</div>
	</div>
</PageSectionCentered>
<PageSectionCentered>
<div
	class="flex flex-row flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-around'}"
>
	<div style="width: 500px; padding-bottom: 50px;">
		<div
			style="background-color: black; max-width: 120px; margin-bottom:32px;"
			class="max-w-130 p-2"
		>
			<p class="text-white">Dirrections</p>
		</div>
		<Headline padding={false} textAlign={'text-left'}>
			You can always find us on the google maps
		</Headline>
		<Paragraph>(Parking, around the building)</Paragraph>
	</div>
	<div style="width: 500px; text-align: -webkit-center;">
		<iframe
			title="Matrioshka"
			src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12595.967244274127!2d145.0547883!3d-37.8838742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66a21628161dd%3A0x42393a5e6770612!2sMatrioshka%20-%20Russian%20Restaurant!5e0!3m2!1sen!2sau!4v1710637346773!5m2!1sen!2sau"
			width={innerWidth < 290 ? '200' : '400'}
			height="310"
			style="display:flex; justify-ontent: center; border:0;"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
		></iframe>
	</div>
</div>
</PageSectionCentered>
