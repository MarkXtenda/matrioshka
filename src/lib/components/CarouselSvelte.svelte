<script>
    import { Carousel } from 'flowbite-svelte';
	import Controls from 'flowbite-svelte/Controls.svelte';
    // ./imageData/+server.js has the following
    export const images = [
      {
        alt: 'Cosmic timetraveler',
        src: '/venue/potolki.jpg',
        title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
      },
      {
        alt: 'Solo travel goals',
        src: '/venue/video.mp4',
        title: 'solotravelgoals-7kLufxYoqWk-unsplash'
      }
    ];
  </script>

  <Carousel {images} imgClass='h-[30rem] w-fit rounded-none' class=' rounded-none min-h-[30rem]' duration="10000">
    <Controls/>
  </Carousel>