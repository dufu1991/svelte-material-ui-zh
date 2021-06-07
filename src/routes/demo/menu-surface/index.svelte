<svelte:head>
  <title>Menu Surface - SMUI</title>
</svelte:head>

<section>
  <h2>Menu Surface 菜单表面</h2>

  <pre class="demo-spaced">npm i -D @smui/menu-surface</pre>

  <Demo component={Simple} file="menu-surface/_Simple.svelte" />

  <Demo component={Static} file="menu-surface/_Static.svelte" />

  <Demo component={Anchored} file="menu-surface/_Anchored.svelte">
    起点自动固定在左下角
  </Demo>

  <Demo
    component={ManualAnchor}
    files={[
      'menu-surface/_ManualAnchor.svelte',
      'menu-surface/_ManualAnchor.scss',
    ]}
  >
    手动固定起点
  </Demo>

  <div style="padding-top: 200px;">用于滚动的长 div...</div>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Static from './_Static.svelte';
  import Anchored from './_Anchored.svelte';
  import ManualAnchor from './_ManualAnchor.svelte';
</script>
