<script lang="ts">
    export let src: string;
    export let width = 1020;
</script>

<div style="{width < 1020 ? 'align-self: center; padding:15px;' : 'width: 600px;' }">
    <img style="object-fit: fill;" src={src} alt="">
</div>