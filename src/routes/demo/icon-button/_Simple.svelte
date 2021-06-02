<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" on:click={() => clicked++}
    >build</IconButton
  >
</div>
<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" on:click={() => clicked++} disabled
    >search</IconButton
  > (禁用)
</div>
<div style="display: flex; align-items: center;">
  <IconButton class="material-icons" on:click={() => clicked++} ripple={false}
    >add_shopping_cart</IconButton
  > (不带涟漪)
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import IconButton from '@smui/icon-button';

  let clicked = 0;
</script>
