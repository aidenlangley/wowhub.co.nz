<script lang="ts">
  import { state } from '$stores/dark';
  import Logo from '../../logo/Logo.svelte';

  export let white = true;
  const classes = 'headings' + (white ? ' white' : '');
</script>

<div class={classes}>
  <h1>
    <div class="mobile">
      <Logo white={$state.dark} />
    </div>
    <span>Planting the seed of hope...</span>
  </h1>
  <h2>Sharing gifts of recovery.</h2>
</div>

<style>
  @import './mission-statement.css';
</style>
