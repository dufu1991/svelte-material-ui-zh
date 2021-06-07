<script>
  import Demo from "../../../components/Demo.svelte";
  import Simple from "./_Simple.svelte";
  import Positioning from "./_Positioning.svelte";
  import Rich from "./_Rich.svelte";
</script>

<svelte:head>
  <title>Tooltip - SMUI</title>
</svelte:head>

<section>
  <h2>Toolip 提示</h2>
  <p>或者叫 tooltip。不管怎样，我也不会拼写。</p>

  <pre class="demo-spaced">npm i -D @smui/tooltip</pre>

  <Demo component={Simple} file="tooltip/_Simple.svelte" />

  <Demo component={Positioning} file="tooltip/_Positioning.svelte">
    定位
    <svelte:fragment slot="subtitle">
      提示框根据与视窗边界的接近程度自动定位自己，当然您也可以给它们一个默认位置。
    </svelte:fragment>
  </Demo>

  <Demo component={Rich} file="tooltip/_Rich.svelte">复杂文本</Demo>
</section>
