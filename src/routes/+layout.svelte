<script>
	import '../app.pcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
	$: innerWidth = 0
</script>

<svelte:window bind:innerWidth />

<head>
	<meta name="description" content="Matrioshka is a unique Russian restaurant in Melbourne offering a fusion of Eastern Slavic cuisine and contemporary local culture. Experience festive flavours, live music, and unforgettable moments for any occasion.">
	<meta name="keywords" content="Russian restaurant, Melbourne, international cuisine, Eastern Slavic food, fine dining, New Year's Eve, wedding venue, event venue, booking, Matrioshka restaurant">
	<meta name="author" content="Mark Kholodii">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet">
</head>
<main style="display: flex; justify-content: center;" class="font-lora bg-white flex flex-col text-xl">
	<Navbar class='px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 start-0' style='padding: 25px 30px;' color="form">
		<NavBrand href="/">
		  <img src="/favicon.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
		  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{innerWidth < 1024 ? '' : 'Matrioshka - International'}</span>
		</NavBrand>
		<NavHamburger/>
		<NavUl>
		  <NavLi href="/"><p class="text-lg">Home</p></NavLi>
		  <NavLi href="/newyear"><p class="text-lg">New Year</p></NavLi>
		  <NavLi href="/contact"><p class="text-lg">Booking</p></NavLi>
		  <NavLi href="/menu"><p class="text-lg">Menu</p></NavLi>
		  <NavLi href="/venue"><p class="text-lg">Venue</p></NavLi>
		  <NavLi href="/about"><p class="text-lg">About</p></NavLi>
		</NavUl>
	  </Navbar>
	<slot class="bg-white" />
	<Footer footerType="logo" class='mt-32'>
		<div class="sm:flex sm:items-center sm:justify-between">
		  <FooterBrand href="https://flowbite.com" src="/favicon.png" alt="Flowbite Logo" name={innerWidth < 1024 ? '' : 'Matrioshka - International'} />
		  <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
			<FooterLink href="/about"><p class="text-lg">About</p></FooterLink>
			<FooterLink href="/contact"><p class="text-lg">Booking</p></FooterLink>
		  </FooterLinkGroup>
		</div>
		<hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<FooterCopyright href="/" by="Matrioshka - International™" />
	  </Footer>
</main>
