<script lang="ts">
  import logoLarge from '$img/logo/logo-512.png';
  import logo from '$img/logo/logo-64.png';
  import logoWhiteLarge from '$img/logo/logo-white-512.png';
  import logoWhite from '$img/logo/logo-white-64.png';

  export let large = false;
  export let white = false;

  const alt = 'wowhub logo';
  const width = !large ? 64 : 512;
  const height = !large ? 64 : 512;
</script>

<!--
  @component
  Whakaoranga Whanau Recovery Hub logo.
  On site, size only reaches about h45px w45px.
  Regularly we use h64px w64px.
-->

<!--
  CSS shows and hides so that both images can be rendered alongside each other.
-->
{#if !large}
  <img src={logo} {alt} {width} {height} class={!white ? 'show' : 'hide'} />
  <img src={logoWhite} {alt} {width} {height} class={white ? 'show' : 'hide'} />
{:else}
  <img
    src={logoLarge}
    {alt}
    {width}
    {height}
    class={!white ? 'show' : 'hide'}
  />
  <img
    src={logoWhiteLarge}
    {alt}
    {width}
    {height}
    class={white ? 'show' : 'hide'}
  />
{/if}
