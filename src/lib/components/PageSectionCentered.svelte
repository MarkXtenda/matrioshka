<script lang="ts">
    export let width:number = 1020;
</script>

<div style="max-width: 100vw;" class="flex flex-col self-center justify-center  max-w-2xl {width < 1020 ? 'pt-12 my-8' : 'pt-32 my-16'}">
    <slot/>
</div>