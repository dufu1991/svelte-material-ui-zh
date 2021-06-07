<script>
  import Demo from "../../../components/Demo.svelte";
  import Simple from "./_Simple.svelte";
</script>

<svelte:head>
  <title>Touch Target - SMUI</title>
</svelte:head>

<section>
  <h2>Touch Target 触控区域</h2>

  <pre class="demo-spaced">npm i -D @smui/touch-target</pre>

  <Demo component={Simple} file="touch-target/_Simple.svelte">
    触摸目标嵌套
    <svelte:fragment slot="subtitle">
      这些交互组件都增加了可触摸目标，并且不会因为触摸目标的嵌套而重叠。
    </svelte:fragment>
  </Demo>
</section>
