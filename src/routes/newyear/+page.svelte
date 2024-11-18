<script>
	import ButtonCustom from "$lib/components/ButtonCustom.svelte";
	import CarouselSvelte from "$lib/components/CarouselSvelte.svelte";
	import PageBanner from "$lib/components/PageBanner.svelte";
	import PageSectionCentered from "$lib/components/PageSectionCentered.svelte";
	import PageSectionImage from "$lib/components/PageSectionImage.svelte";
	import PageSectionParagraph from "$lib/components/PageSectionParagraph.svelte";
	import Headline from "$lib/components/fonts/Headline.svelte";
	import Paragraph from "$lib/components/fonts/Paragraph.svelte";
  

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

  window.addEventListener('DOMContentLoaded', (event) => {
    const video = document.querySelector('video');
    video?.play();
  })
</script>

<svelte:window bind:innerWidth/>

    <!-- Main Content -->
    <PageBanner title='New Years Eve' image='/icons/booking.png'>
      <h2 class="text-5xl text-center font-bold italic">New Year's Eve</h2>
    </PageBanner>
    <PageSectionCentered width={innerWidth}>
      <div class="flex flex-row-reverse flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
      <PageSectionImage src='./newyear/1.jpg' width={innerWidth}/>
      <PageSectionParagraph position={"start"} width={innerWidth}>
        <Headline>Celebrate New Year's Eve at Matrioshka International</Headline>
        <Paragraph>Create memories as we bid farewell to 2024, seasoned with warmth and Eastern European charm.</Paragraph><br>
        <Paragraph>Experience an evening filled with authentic Eastern European hospitality and welcoming atmosphere.
        </Paragraph><br>
        <Paragraph>Savour the flavors of Eastern Europe, paired with delightful music and a warm.
        </Paragraph><br>
      </PageSectionParagraph>
      </div>
      <!-- <div class="flex flex-row-reverse flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}"> -->
        <!-- <div class="py-[48px]" style="width: 98vw; height: auto;"></div> -->
        <div style="display: flex; width: 80vw; text-transform: uppercase; align-self: center;">
        </div>
          <!-- <Headline></Headline>
          <Paragraph>Whether it's a wedding, birthday, or any special occasion, choose US as your venue. Our team is committed to making your event unforgettable, wonderfull memories, and of course, our signature Eastern-European and international cuisine.
          </Paragraph> -->

        <!-- <div class="py-[48px]" style="width: 98vw; height: auto;"> -->
          <!-- <PageSectionImage src='/venue/potolki.jpg' width={700}/> -->
          <!-- <CarouselSvelte></CarouselSvelte> -->
        <!-- </div> -->
        <!-- <div class="flex flex-row flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
        <PageSectionImage src='./contact.jpg' width={innerWidth}/>
        <PageSectionParagraph position={"end"} width={innerWidth}>
          <Headline></Headline>
          <Headline></Headline>
          <Headline></Headline>
          <Headline></Headline>
          <Paragraph>Experience an evening filled with authentic Eastern European hospitality and welcoming atmosphere.
          </Paragraph><br><br>
        </PageSectionParagraph>
        </div>
        <div class="flex flex-row-reverse flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
          <PageSectionImage src='./menu.jpg' width={innerWidth}/>
        <PageSectionParagraph position={"start"} width={innerWidth}>
          <Headline></Headline>
          <Headline></Headline>
          <Headline></Headline>
          <Headline></Headline>
            <Paragraph>Savour the flavors of Eastern Europe, paired with delightful music and a warm.
            </Paragraph><br>
        </PageSectionParagraph>
        </div> -->
      </PageSectionCentered>
  
      <!-- Atmosphere and Takeaway -->
      <!-- <PageSectionCentered width={innerWidth}>
        
      </PageSectionCentered> -->
      <!-- <video style="align-self: center;" autoplay muted loop playsinline>
        <source src="/video.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video> -->
      <!-- <PageSectionCentered> -->
        <div  style="padding-top: 45px; width: 80vw; text-transform: uppercase; align-self: center;">
          <Headline>Join us in welcoming the New Year with a night of festive flavours, livemusic, and unforgettable moments</Headline>
      </div>
        <a href="contact" class="p-[20px]">
          <ButtonCustom color='black'>
            BOOK
          </ButtonCustom>
        </a>
      <!-- </PageSectionCentered> -->
          