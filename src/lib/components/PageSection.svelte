<script lang="ts">
        export let width:number;
</script>

<div class="flex flex-col self-center justify-center {width < 600 ? 'pt-12 my-8' : 'pt-32 my-16'} max-w-2xl mx-5 px-1">
        <slot/>
</div>