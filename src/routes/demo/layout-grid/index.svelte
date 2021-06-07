<svelte:head>
  <title>Layout Grid - SMUI</title>
</svelte:head>

<section>
  <h2>Layout Grid 布局</h2>
  <p>尝试调整窗口大小来查看单元格适应新的尺寸。</p>

  <pre class="demo-spaced">npm i -D @smui/layout-grid</pre>

  <Demo component={Simple} file="layout-grid/_Simple.svelte" />

  <Demo component={Span} file="layout-grid/_Span.svelte">Span</Demo>

  <Demo component={Order} file="layout-grid/_Order.svelte">Order</Demo>

  <Demo
    component={FixedColumnWidth}
    file="layout-grid/_FixedColumnWidth.svelte"
  >
    固定列宽
  </Demo>

  <Demo component={Align} file="layout-grid/_Align.svelte">对齐</Demo>

  <Demo component={Nested} file="layout-grid/_Nested.svelte">嵌套</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Span from './_Span.svelte';
  import Order from './_Order.svelte';
  import FixedColumnWidth from './_FixedColumnWidth.svelte';
  import Align from './_Align.svelte';
  import Nested from './_Nested.svelte';
</script>
