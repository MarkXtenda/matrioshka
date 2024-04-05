<script>
	import ButtonCustom from '$lib/components/ButtonCustom.svelte';
	import PageBanner from '$lib/components/PageBanner.svelte';
	import PageSectionCentered from '$lib/components/PageSectionCentered.svelte';
	import PageSectionImage from '$lib/components/PageSectionImage.svelte';
	import PageSectionParagraph from '$lib/components/PageSectionParagraph.svelte';
	import Headline from '$lib/components/fonts/Headline.svelte';
	import Paragraph from '$lib/components/fonts/Paragraph.svelte';

    $: innerWidth = 0;
  let divStyle = 'justify-content: flex-start;'
  console.log(innerWidth)
  // Reactive statement to update styles based on window height
  $: {
    if (innerWidth < 1050) {
      divStyle = 'justify-content: center;';
    } else {
      divStyle = 'justify-content: flex-start;'; // Reset style if height is greater than or equal to 1050px
    }
  }
</script>

<style>
    p {
        line-height: 1.6;
    }
</style>

<svelte:window bind:innerWidth/>

<title>About Us - Matrioshka International</title>


<PageBanner title="ABOUT" image='/icons/about.png'>
    <h2 class="text-5xl text-center font-bold italic">ABOUT</h2>
</PageBanner>
<!-- <header>
    <img src="https://i.weddinghero.com.au/gallery/1600/preview_1600_Y2e37DS6.jpg"/>
    <div style="color: white; position: absolute;
    top: 300px;">
        <p class="text-5xl text-center font-bold italic">ABOUT US</p>
        <h2 class="text-xl text-center font-bold pb-[30px]">Welcome to Matrioshka International!</h2>
    <p style="line-height:normal" class="text-4xl text-center font-bold">Matrioshka International is a family-owned restaurant specializing in authentic Russian cuisine. Our mission is to bring the rich flavors and traditions of Russian cooking to our community.</p>
</div>
</header> -->
<PageSectionCentered width={innerWidth}>
    <div class="flex flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
        <PageSectionImage src='/story.jpg' width={innerWidth}/>
        <PageSectionParagraph position={"end"} width={innerWidth}>
            <Headline>OUR STORY</Headline>
            <Paragraph>Founded in 1982, Matrioshka International started as a small restaraunt bussiness serving homemade Russian dishes. Over the years, we have grown into a beloved dining destination, known for our warm hospitality and delicious food.</Paragraph>
        </PageSectionParagraph>
    </div>
</PageSectionCentered>

<PageSectionCentered width={innerWidth}>
<div class="flex flex-row-reverse flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
    <PageSectionImage src='/menu.jpg' width={innerWidth}/>
    <PageSectionParagraph position={"start"} width={innerWidth}>
        <Headline>OUR MENU</Headline>
         <Paragraph>At Matrioshka International, we offer a diverse menu featuring classic Russian dishes such as borscht, pelmeni, beef stroganoff, and blini. Each dish is prepared using traditional recipes and the finest ingredients, ensuring an authentic dining experience.
         </Paragraph>
            <a href="menu" class="flex justify-center p-[20px]">
                <ButtonCustom color="black" href='menu'>SEE MENU</ButtonCustom>
            </a>
    </PageSectionParagraph>
</div>
</PageSectionCentered>
<PageSectionCentered width={innerWidth}>
<div class="flex flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
    <PageSectionImage src='/havchik.jpg' width={innerWidth}/>
    <PageSectionParagraph position={"end"} width={innerWidth}>
        <Headline>BOOK WITH US</Headline>
        <Paragraph>We invite you to visit Matrioshka International and experience the flavors of Eastern Europe in a cozy and welcoming atmosphere. Whether you're craving a comforting bowl of soup or indulging in a sweet treat like our homemade piroshki, we guarantee a memorable dining experience.
        </Paragraph>
        <a href="contact" class="flex justify-center pt-[20px]">
            <ButtonCustom color="black">BOOK NOW</ButtonCustom>
        </a>
    </PageSectionParagraph>
</PageSectionCentered>
