<script>
  import Demo from "../../../components/Demo.svelte";
  import Simple from "./_Simple.svelte";
  import SecondaryColor from "./_SecondaryColor.svelte";
  import Variants from "./_Variants.svelte";
  import Touch from "./_Touch.svelte";
  import Icons from "./_Icons.svelte";
  import Link from "./_Link.svelte";
  import Groups from "./_Groups.svelte";
  import SplitButtons from "./_SplitButtons.svelte";
  import Round from "./_Round.svelte";
  import Notched from "./_Notched.svelte";
</script>

<svelte:head>
  <title>Button - SMUI</title>
</svelte:head>

<section>
  <h2>Button 按钮</h2>

  <pre class="demo-spaced">npm i -D @smui/button</pre>

  <Demo component={Simple} file="button/_Simple.svelte" />

  <Demo component={SecondaryColor} file="button/_SecondaryColor.svelte">
    辅助色
  </Demo>

  <Demo component={Variants} file="button/_Variants.svelte">多样性按钮</Demo>

  <Demo component={Touch} file="button/_Touch.svelte">增强触控元素</Demo>

  <Demo component={Icons} file="button/_Icons.svelte">带图标按钮</Demo>

  <Demo component={Link} file="button/_Link.svelte">链接按钮</Demo>

  <Demo component={Groups} file="button/_Groups.svelte">按钮组</Demo>

  <Demo component={SplitButtons} file="button/_SplitButtons.svelte">
    使用按钮组区分按钮
  </Demo>

  <Demo
    component={Round}
    files={["button/_Round.svelte", "button/_Round.scss"]}
  >
    使用 sass mixins 创建圆形按钮
  </Demo>

  <Demo
    component={Notched}
    files={["button/_Notched.svelte", "button/_Notched.scss"]}
  >
    使用 sass 创建缺口按钮
  </Demo>
</section>

<style>
  * :global(.mdc-button, .smui-button__group) {
    margin-bottom: 8px;
  }
  *
    :global(.smui-button__group > .mdc-button, .smui-button__group-item
      > .mdc-button) {
    margin-bottom: 0;
  }
</style>
