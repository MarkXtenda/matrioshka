<script>
	import ButtonCustom from "$lib/components/ButtonCustom.svelte";
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
    <PageBanner title='EVENTS' image='/icons/booking.png'>
      <h2 class="text-5xl text-center font-bold italic">EVENTS</h2>
    </PageBanner>
    <PageSectionCentered width={innerWidth}>
      <div class="flex flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
      <PageSectionImage src='./events/1.jpg' width={innerWidth}/>
      <PageSectionParagraph position={"end"} width={innerWidth}>
        <Headline>VENUE SIZE</Headline>
        <Paragraph>(90-200 Guests)</Paragraph><br>
        <Paragraph>From $95 per person</Paragraph><br>
        <Paragraph>At Matrioshka International, we're not just a restaurant; we're the ideal venue for any event. With our spacious dining area accommodating up to 90-200 guests, we cater to gatherings of all sizes, from intimate dinners to grand celebrations.
        </Paragraph><br>
        </PageSectionParagraph>
      </div>
      <!-- <div class="flex flex-row-reverse flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}"> -->
        <PageSectionParagraph position={"start"} width={innerWidth}>
          <div style="width: 80vw; text-transform: uppercase;">
            <Headline>Whether it's a wedding, birthday, or any special occasion, choose US as your venue. Our team is committed to making your event unforgettable, wonderfull memories, and of course, our signature Eastern-European and international cuisine.</Headline>
          </div>
          <!-- <Headline></Headline>
          <Paragraph>Whether it's a wedding, birthday, or any special occasion, choose US as your venue. Our team is committed to making your event unforgettable, wonderfull memories, and of course, our signature Eastern-European and international cuisine.
          </Paragraph> -->
          <div style="width: 964px; align">
            <PageSectionImage src='/events/potolki.jpg' width={700}/>
          </div>
        </PageSectionParagraph>
        <div class="flex flex-row flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
          <!-- <video autoplay muted loop playsinline>
            <source src="/events/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video> -->
        <PageSectionImage src='./contact.jpg' width={innerWidth}/>
        <PageSectionParagraph position={"start"} width={innerWidth}>
          <Headline>OUR ATMOSPHERE AND SERVICE</Headline>
          <Paragraph>At Matrioshka International, we pride ourselves on creating a warm and welcoming atmosphere for all our guests. Our goal is to make every event memorable and enjoyable!
          </Paragraph><br><br>
        </PageSectionParagraph>
        </div>
        <div class="flex flex-row-reverse flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
          <PageSectionImage src='./menu.jpg' width={innerWidth}/>
        <PageSectionParagraph position={"end"} width={innerWidth}>
          <Headline></Headline>
          <Paragraph>At Matrioshka International, we pride ourselves on creating a warm and welcoming atmosphere for all our guests. Our goal is to make every event memorable and enjoyable!
          </Paragraph><br>
          <Paragraph>But wait, there's more! In addition to our impeccable hospitality and event hosting services, we also offer take-away options for those moments when you crave our delicious dishes but prefer to enjoy them in the comfort of your own home.
          </Paragraph>
        </PageSectionParagraph>
        </div>
       <!-- </div> -->
      </PageSectionCentered>
  
      <!-- Atmosphere and Takeaway -->
      <!-- <PageSectionCentered width={innerWidth}>
        
      </PageSectionCentered> -->

      <PageSectionCentered>
        <div style="width: 80vw; text-transform: uppercase;">
        <Headline>So why wait? Come join us at for an extraordinary culinary journey filled with warmth, music, artists and the authentic flavors of Eastern Europe. We can't wait to welcome you!</Headline>
      </div>
        <a href="contact" class="p-[20px]">
          <ButtonCustom color='black'>
            BOOK
          </ButtonCustom>
        </a>
        <video style="width: 500px; align-self: center;" autoplay muted loop playsinline>
            <source src="/events/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
          </video>
      </PageSectionCentered>
      <Paragraph>
      </Paragraph>
          