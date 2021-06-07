<svelte:head>
  <title>Select - SMUI</title>
</svelte:head>

<section>
  <h2>Select 选择器</h2>

  <pre class="demo-spaced">npm i -D @smui/select</pre>

  <Demo component={Showcase} file="select/_Showcase.svelte" />

  <Demo component={Standard} file="select/_Standard.svelte">标准</Demo>

  <Demo component={Filled} file="select/_Filled.svelte">有填充</Demo>

  <Demo component={Outlined} file="select/_Outlined.svelte">有边框</Demo>

  <Demo component={ShapedFilled} file="select/_ShapedFilled.svelte">
    异形填充
    <svelte:fragment slot="subtitle">使用 CSS 修改样式</svelte:fragment>
  </Demo>

  <Demo component={ShapedOutlined} file="select/_ShapedOutlined.svelte">
    异形边框
    <svelte:fragment slot="subtitle">使用 CSS 修改样式</svelte:fragment>
  </Demo>

  <Demo component={Required} file="select/_Required.svelte">必选</Demo>

  <Demo component={Disabled} file="select/_Disabled.svelte">禁用</Demo>

  <Demo component={ConditionalIcon} file="select/_ConditionalIcon.svelte">
    按条件显示图标
  </Demo>

  <Demo component={Objects} file="select/_Objects.svelte">使用对象</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Showcase from './_Showcase.svelte';
  import Standard from './_Standard.svelte';
  import Filled from './_Filled.svelte';
  import Outlined from './_Outlined.svelte';
  import ShapedFilled from './_ShapedFilled.svelte';
  import ShapedOutlined from './_ShapedOutlined.svelte';
  import Required from './_Required.svelte';
  import Disabled from './_Disabled.svelte';
  import ConditionalIcon from './_ConditionalIcon.svelte';
  import Objects from './_Objects.svelte';
</script>

<style>
  * :global(.margins) {
    margin: 18px 0 24px;
  }

  * :global(.columns) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  * :global(.columns > *) {
    margin-right: 12px;
  }
  * :global(.columns > *:last-child) {
    margin-right: 0;
  }
</style>
