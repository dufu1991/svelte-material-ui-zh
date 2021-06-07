<script>
  import Demo from "../../../components/Demo.svelte";
  import Simple from "./_Simple.svelte";
  import LeadingWithAction from "./_LeadingWithAction.svelte";
  import StackedWithAction from "./_StackedWithAction.svelte";
  import DynamicText from "./_DynamicText.svelte";
  import Kitchen from "./_Kitchen.svelte";
</script>

<svelte:head>
  <title>Snackbars - SMUI</title>
</svelte:head>

<section>
  <h2>Snackbars 消息条</h2>

  <pre class="demo-spaced">npm i -D @smui/snackbar</pre>

  <Demo component={Simple} file="snackbar/_Simple.svelte" />

  <Demo component={LeadingWithAction} file="snackbar/_LeadingWithAction.svelte">
    事件驱动
  </Demo>

  <Demo component={StackedWithAction} file="snackbar/_StackedWithAction.svelte">
    多个事件
  </Demo>

  <Demo component={DynamicText} file="snackbar/_DynamicText.svelte">
    使用动态文本
  </Demo>

  <Demo component={Kitchen} file="snackbar/_Kitchen.svelte">
    "Kitchen" 消息条生成器
  </Demo>
</section>
