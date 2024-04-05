  import { Carousel } from 'flowbite-svelte';
  // ./imageData/+server.js has the following
  export const images = [
    {
      alt: 'Cosmic timetraveler',
      src: '/1.jpg',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com'
    },
    {
      alt: 'Cristina Gottardi',
      src: '/2.jpg',
      title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com'
    },
    {
      alt: 'Johannes Plenio',
      src: 'https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630',
      title: 'johannes-plenio-RwHv7LgeC7s-unsplash.com'
    },
    {
      alt: 'Jonatan Pie',
      src: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
      title: 'jonatan-pie-3l3RwQdHRHg-unsplash.com'
    }
  ];

  export default images