<svelte:head>
  <title>Slider - SMUI</title>
</svelte:head>

<section>
  <h2>Slider 滑块</h2>

  <pre class="demo-spaced">npm i -D @smui/slider</pre>

  <Demo component={Simple} file="slider/_Simple.svelte" />

  <Demo component={Continuous} file="slider/_Continuous.svelte">
    连续滑块
  </Demo>

  <Demo component={Discrete} file="slider/_Discrete.svelte">
    带有最小值/最大值/步骤的间续滑块
  </Demo>

  <Demo component={TickMarks} file="slider/_TickMarks.svelte">
    有刻度线的间续滑块
  </Demo>

  <Demo component={Range} file="slider/_Range.svelte">范围滑块</Demo>

  <Demo component={DiscreteRange} file="slider/_DiscreteRange.svelte">
    带刻度线的间续范围滑块
  </Demo>

  <Demo component={Disabled} file="slider/_Disabled.svelte">禁用</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Continuous from './_Continuous.svelte';
  import Discrete from './_Discrete.svelte';
  import TickMarks from './_TickMarks.svelte';
  import Range from './_Range.svelte';
  import DiscreteRange from './_DiscreteRange.svelte';
  import Disabled from './_Disabled.svelte';
</script>
