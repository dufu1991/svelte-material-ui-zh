<svelte:head>
  <title>Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Lists 列表</h2>

  <pre class="demo-spaced">npm i -D @smui/list</pre>

  <Demo component={Simple} file="list/_Simple.svelte" />

  <Demo component={GraphicsDense} file="list/_GraphicsDense.svelte">
    带有图标的紧密列表
  </Demo>

  <Demo component={NonInteractive} file="list/_NonInteractive.svelte">
    带有激活项的非交互式列表
  </Demo>

  <Demo component={TwoLineSelection} file="list/_TwoLineSelection.svelte">
    包含头像、禁用项和元数据的两行单选列表
  </Demo>

  <Demo component={ThreeLine} file="list/_ThreeLine.svelte">
    三行列表
  </Demo>

  <Demo component={Groups} file="list/_Groups.svelte">列表组</Demo>

  <Demo component={Radio} file="list/_Radio.svelte">单选列表</Demo>

  <Demo component={Check} file="list/_Check.svelte">
    带有复选框的列表
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import GraphicsDense from './_GraphicsDense.svelte';
  import NonInteractive from './_NonInteractive.svelte';
  import TwoLineSelection from './_TwoLineSelection.svelte';
  import ThreeLine from './_ThreeLine.svelte';
  import Groups from './_Groups.svelte';
  import Radio from './_Radio.svelte';
  import Check from './_Check.svelte';
</script>
