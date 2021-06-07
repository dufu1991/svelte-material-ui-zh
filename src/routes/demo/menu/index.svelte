<script>
  import Demo from "../../../components/Demo.svelte";
  import Static from "./_Static.svelte";
  import Anchored from "./_Anchored.svelte";
  import TwoLineManunalAnchor from "./_TwoLineManunalAnchor.svelte";
  import SelectionGroup from "./_SelectionGroup.svelte";
</script>

<svelte:head>
  <title>Menu - SMUI</title>
</svelte:head>

<section>
  <h2>Menu 菜单</h2>

  <pre class="demo-spaced">npm i -D @smui/menu</pre>

  <Demo component={Static} file="menu/_Static.svelte" />

  <Demo component={Anchored} file="menu/_Anchored.svelte">自动固定起点</Demo>

  <Demo
    component={TwoLineManunalAnchor}
    file="menu/_TwoLineManunalAnchor.svelte"
  >
    两行文字，手动固定起点在左下角
  </Demo>

  <Demo component={SelectionGroup} file="menu/_SelectionGroup.svelte">
    组合选项Î
  </Demo>

  <div style="padding-top: 200px;">用于滚动的长 div...</div>
</section>
