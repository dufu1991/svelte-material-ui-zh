<svelte:head>
  <title>Segmented Button - SMUI</title>
</svelte:head>

<section>
  <h2>Segmented Button 按钮组</h2>

  <pre class="demo-spaced">npm i -D @smui/segmented-button</pre>

  <Demo
    component={SingleSelection}
    file="segmented-button/_SingleSelection.svelte"
  >
    只能选择一项
  </Demo>

  <Demo
    component={GroupSelection}
    file="segmented-button/_GroupSelection.svelte"
  >
    组合选择
  </Demo>

  <Demo component={IconsKeys} file="segmented-button/_IconsKeys.svelte">
    带图标和按键控制
  </Demo>

  <Demo component={Touch} file="segmented-button/_Touch.svelte">
    增大触控目标
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import SingleSelection from './_SingleSelection.svelte';
  import GroupSelection from './_GroupSelection.svelte';
  import IconsKeys from './_IconsKeys.svelte';
  import Touch from './_Touch.svelte';
</script>
