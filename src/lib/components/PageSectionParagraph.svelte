<script>
    export let width = 1020;
    export let position;

    let finalPos = (position==="start") ? 'padding-left:10vw;' : 'padding-right:10vw; '
</script>

<div style="text-align: center; padding: 20px; {width < 1020 ? '' : ` ${finalPos} width: 50%;`}" class=" pt-10">
    <slot/>
</div>