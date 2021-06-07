<script>
  import Demo from "../../../components/Demo.svelte";
  import Simple from "./_Simple.svelte";
  import Buffered from "./_Buffered.svelte";
  import Indeterminate from "./_Indeterminate.svelte";
  import Colored from "./_Colored.svelte";
</script>

<svelte:head>
  <title>Linear Progress - SMUI</title>
</svelte:head>

<section>
  <h2>Linear Progress 线性进度条</h2>

  <pre class="demo-spaced">npm i -D @smui/linear-progress</pre>

  <Demo component={Simple} file="linear-progress/_Simple.svelte" />

  <Demo component={Buffered} file="linear-progress/_Buffered.svelte">
    带缓冲
  </Demo>

  <Demo component={Indeterminate} file="linear-progress/_Indeterminate.svelte">
    不确定
  </Demo>

  <Demo
    component={Colored}
    files={["linear-progress/_Colored.svelte", "linear-progress/_Colored.scss"]}
  >
    彩色 (使用 Sass mixins)
  </Demo>
</section>
