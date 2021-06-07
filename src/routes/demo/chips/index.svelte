<svelte:head>
  <title>Chips - SMUI</title>
</svelte:head>

<section>
  <h2>Chips 纸片</h2>

  <pre class="demo-spaced">npm i -D @smui/chips</pre>

  <Demo component={Simple} file="chips/_Simple.svelte" />

  <Demo component={NonInteractive} file="chips/_NonInteractive.svelte">
    不带交互的纸片
  </Demo>

  <Demo component={Choice} file="chips/_Choice.svelte">可选择纸片</Demo>

  <Demo component={Filter} file="chips/_Filter.svelte">
    选中目标增加的纸片
  </Demo>

  <Demo component={FilterIcons} file="chips/_FilterIcons.svelte">
    大小相同，但带有前导图标
  </Demo>

  <Demo component={Input} file="chips/_Input.svelte">输入纸片</Demo>

  <Demo component={Keyed} file="chips/_Keyed.svelte">点击纸片</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import NonInteractive from './_NonInteractive.svelte';
  import Choice from './_Choice.svelte';
  import Filter from './_Filter.svelte';
  import FilterIcons from './_FilterIcons.svelte';
  import Input from './_Input.svelte';
  import Keyed from './_Keyed.svelte';
</script>
