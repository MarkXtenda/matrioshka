<script>
	import ButtonCustom from "./ButtonCustom.svelte";
</script>

<head>
    <meta name="description" content="Matrioshka is a unique Russian restaurant in Melbourne offering a fusion of Eastern Slavic cuisine and contemporary local culture. Experience festive flavours, live music, and unforgettable moments for any occasion.">
	<meta name="keywords" content="Russian restaurant, Melbourne, international cuisine, Eastern Slavic food, fine dining, New Year's Eve, wedding venue, event venue, booking, Matrioshka restaurant">
</head>
<style>
    .image-container {
        background-image: url('/food.jpg');
        background-position: center;
        display: inline-block;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    }
    .image-container img {
        clip: rect(0, 100vw, 100vh, 0); /* Crop the image */
        /* rect(top, right, bottom, left) */
        /* Adjust values as needed */
        width: 100%; /* Ensure the image fits within the container */
        height: auto; /* Maintain aspect ratio */
    }
    div > p {
        text-shadow: 0px 3.29103px 5.7593px rgba(0, 0, 0, 0.43);
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 0.01em;
    line-height: 40px;
    margin-bottom: 5px;
    text-transform: uppercase;
    }
    div > h2 {
    letter-spacing: 0.01em;
    text-shadow: 0px 3.29103px 5.7593px rgba(0, 0, 0, 0.43);
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 25px;
    line-height: 20px;
    }
</style>
<div>
<div class="image-container">
<!-- <img style="background-image: url(/first-photo.jpg)" class="h-screen" src="/first-photo.jpg" alt='' data-aos="zoom-in"/> -->
</div>
<div id="title" class="flex justify-center flex-col w-full text-white absolute top-64 opacity-90">
    <p class="flex justify-center font-lora text-5xl text-center font-bold" data-aos="fade-up" data-aos-once="true" data-aos-duration="500"> Matrioshka - International Restaraunt & Reception</p>
    <p style="opacity: 0; height: 0;">A Unique Russian restaurant in Melbourne offering a fusion of Eastern Slavic cuisine and contemporary local culture.</p>
    <h2 class="text-xl text-center font-bold">1046 Princes Hwy Service Rd, Carnegie VIC 3163</h2>
    <ButtonCustom>BOOK NOW</ButtonCustom>
  </div>
</div>
