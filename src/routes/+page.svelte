<script>
import MatrioshkaBand from '$lib/components/MatrioshkaBand.svelte';
import HomePageBanner from '$lib/components/HomePageBanner.svelte';
import PageSectionCentered from '$lib/components/PageSectionCentered.svelte';
import PageSectionImage from '$lib/components/PageSectionImage.svelte';
import PageSectionParagraph from '$lib/components/PageSectionParagraph.svelte';
import ButtonCustom from '$lib/components/ButtonCustom.svelte';
import Headline from '$lib/components/fonts/Headline.svelte';
	import Paragraph from '$lib/components/fonts/Paragraph.svelte';
	import Title from '$lib/components/fonts/Title.svelte';

$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth/>

<style>
    .separator {
        padding: 0 20px;
    }
    @media screen and (max-width: 800px) {
        .separator{
            width: 100%;
        }
    }
</style>

<HomePageBanner/>
<MatrioshkaBand image="/favicon.png"/>
<PageSectionCentered>
    <Headline homepage={true}>
        A RIOTOUS COLLISION OF<br>
        CASUAL EASTERN SLAVIC CUISINE,<br>
        CONTEMPORARY LOCAL CULTURE.
    </Headline>
      <div style="flex-direction: row; flex-wrap: wrap;" class="flex justify-center p-5">
          <div>
              <a href="contact">
                  <ButtonCustom color="black">Contact</ButtonCustom>
              </a>
          </div>
          <div class="separator"></div>
          <div>
              <a href="menu">
                  <ButtonCustom color="black" href='menu'>Menu</ButtonCustom>
              </a>
          </div>
      </div>
</PageSectionCentered>

  <div class="mt-4">
    <!-- <p class="text-5xl text-center font-bold italic">WHATS ON</p>
    <CarouselTailwind/> -->
    <PageSectionCentered>
        <div class="flex flex-row-reverse flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
            <PageSectionImage src='/newyear/1.jpg' width={innerWidth}/>
            <PageSectionParagraph position={'start'} width={innerWidth}>
                <Headline>CELEBRATE NEW YEAR'S EVE AT MATRIOSHKA INTERNATIONAL</Headline>
                <Paragraph>Join us in welcoming the New Year with a night of festive flavours, livemusic, and unforgettable moments</Paragraph>
                <a href="venue" class="flex justify-center pt-[20px]">
                    <ButtonCustom color="black" href='newyear'>NEW 2025</ButtonCustom>
                </a>
            </PageSectionParagraph>
        </div>
    </PageSectionCentered>
    <PageSectionCentered>
        <div class="flex flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
            <PageSectionImage src='/venue/2.jpg' width={innerWidth}/>
            <PageSectionParagraph position={'end'} width={innerWidth}>
                <Headline>WHATS ON</Headline>
                <Paragraph>Discover unforgettable moments, from weddings to birthdays, our venue is the perfect setting for any occasion. Explore it now now!</Paragraph>
                <a href="venue" class="flex justify-center pt-[20px]">
                    <ButtonCustom color="black" href='venue'>VENUE</ButtonCustom>
                </a>
            </PageSectionParagraph>
        </div>
    </PageSectionCentered>
    <PageSectionCentered>
        <div class="flex flex-row-reverse flex-wrap {innerWidth < 1050 ? 'justify-center' : 'place-content-between'}">
            <PageSectionImage src='/contact.jpg' width={innerWidth}/>
            <PageSectionParagraph position={'start'} width={innerWidth}>
                <Headline>BOOKING</Headline>
                <Paragraph>Ready to make a reservation or book a spot?</Paragraph>
                <a href="contact" class="flex justify-center pt-[20px]">
                    <ButtonCustom color="black">BOOK NOW</ButtonCustom>
                </a>
            </PageSectionParagraph>
        </div>
    </PageSectionCentered>
  </div>
  <MatrioshkaBand image="https://static.thenounproject.com/png/3203474-200.png" padding={'10'}/>
  <PageSectionCentered>
      <Headline homepage={true}>
        HEAR OUR STORY<br>
        AND LEARN MORE<br>
        ABOUT US<br>
      </Headline>
        <a href="about" class="pt-[20px]">
            <ButtonCustom color="black" href='about'>About Us</ButtonCustom>
        </a>
    </PageSectionCentered>
