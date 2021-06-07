<script>
  import Demo from "../../../components/Demo.svelte";
  import Static from "./_Static.svelte";
  import Variants from "./_Variants.svelte";
</script>

<svelte:head>
  <title>Top App Bar - SMUI</title>
</svelte:head>

<section>
  <h2>Top App Bar 顶部应用栏</h2>

  <pre class="demo-spaced">npm i -D @smui/top-app-bar</pre>

  <Demo component={Static} file="top-app-bar/_Static.svelte">
    在容器中的顶部应用栏
    <svelte:fragment slot="subtitle">
      只有“静态”变体才会在容器内生效。
    </svelte:fragment>
  </Demo>

  <Demo component={Variants} file="top-app-bar/iframe.svelte">
    页面级顶部应用栏
    <svelte:fragment slot="subtitle">
      这些显示在 iframe 中，可在源查看器显示 iframe 源。
    </svelte:fragment>
  </Demo>
</section>
