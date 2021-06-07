<script>
  import Demo from "../../../components/Demo.svelte";
  import Simple from "./_Simple.svelte";
  import Icons from "./_Icons.svelte";
  import KeyedIconsAboveRestrictedIndicatorsFadeTransition from "./_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte";
  import ScrollingNoInitialActive from "./_ScrollingNoInitialActive.svelte";
  import MinWidth from "./_MinWidth.svelte";
  import IconIndicators from "./_IconIndicators.svelte";
  import HrefAnchors from "./_HrefAnchors.svelte";
</script>

<svelte:head>
  <title>Tabs - SMUI</title>
</svelte:head>

<section>
  <h2>Tabs 选项卡</h2>

  <pre class="demo-spaced">npm i -D @smui/tab @smui/tab-bar</pre>

  <Demo component={Simple} file="tabs/_Simple.svelte" />

  <Demo component={Icons} file="tabs/_Icons.svelte">标签带图标的选项卡</Demo>

  <Demo
    component={KeyedIconsAboveRestrictedIndicatorsFadeTransition}
    file="tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte"
  >
    标签上方带有图标的键控标签，仅对内容显示指示器和淡入淡出过渡
  </Demo>

  <Demo
    component={ScrollingNoInitialActive}
    file="tabs/_ScrollingNoInitialActive.svelte"
  >
    不带初始值的可滚动选项卡
  </Demo>

  <Demo component={MinWidth} file="tabs/_MinWidth.svelte"
    >设置最小宽度的选项卡</Demo
  >

  <Demo component={IconIndicators} file="tabs/_IconIndicators.svelte">
    带图标指示器
  </Demo>

  <Demo component={HrefAnchors} file="tabs/_HrefAnchors.svelte">
    具有 href 属性的选项卡渲染为锚元素
    <svelte:fragment slot="subtitle">
      但它们不会通过键盘方向键激活。它们需要用回车键激活。
    </svelte:fragment>
  </Demo>
</section>

<style>
  section > :globa(div) {
    margin-bottom: 40px;
  }
</style>
