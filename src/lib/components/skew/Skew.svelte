<script lang="ts">
  import type { GradientColour } from '$models/Gradient';
  import type { SkewDirection } from '$models/Skew';

  export let id: string;
  export let direction: SkewDirection;
  export let colour: GradientColour;
</script>

<!--
  @component
  Defines a grid, the `Skewed` div will be placed behind the content `slot`
  via `z-index`.
-->
<div id="{id}-skewed-bg" class="skewed-grid">
  <div class="skewed-bg {direction} {colour}" />
  <div class="content column">
    <slot />
  </div>
</div>

<style>
  @import './skew.css';
</style>
