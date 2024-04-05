<script>
export let homepage = false;
export let padding = true;
$: innerWidth = 0;
export let textAlign = 'text-center';
</script>

<svelte:window bind:innerWidth/>
<style>
    .headline {
        line-height: 34px;
        font-size: 28px;
        line-height: 40px;
    }

    @media screen and (max-width: 1024px) {
        .headline {
            font-size: 28px;
            line-height: 34px;
        }
    }
</style>

<h4 class="{homepage && innerWidth > 1024 ? 'text-5xl font-bold italic': 'headline text-uppercase'} {padding ? 'p-[18px]' : ''} {textAlign}">
    <slot></slot>
</h4>

