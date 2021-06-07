<script>
  import Demo from "../../../components/Demo.svelte";
  import Showcase from "./_Showcase.svelte";
  import Standard from "./_Standard.svelte";
  import Filled from "./_Filled.svelte";
  import Outlined from "./_Outlined.svelte";
  import ShapedFilled from "./_ShapedFilled.svelte";
  import ShapedOutlined from "./_ShapedOutlined.svelte";
  import Required from "./_Required.svelte";
  import Disabled from "./_Disabled.svelte";
  import Prefixed from "./_Prefixed.svelte";
  import Suffixed from "./_Suffixed.svelte";
  import NoLabelOrHelperText from "./_NoLabelOrHelperText.svelte";
  import PersistentHelperText from "./_PersistentHelperText.svelte";
  import CharacterCount from "./_CharacterCount.svelte";
  import HelperTextCharacterCount from "./_HelperTextCharacterCount.svelte";
  import BothIcons from "./_BothIcons.svelte";
  import ConditionalIcons from "./_ConditionalIcons.svelte";
  import Textarea from "./_Textarea.svelte";
  import TextareaCharacterCount from "./_TextareaCharacterCount.svelte";
  import FullWidth from "./_FullWidth.svelte";
  import FullWidthTextarea from "./_FullWidthTextarea.svelte";
  import FixedSizeTextarea from "./_FixedSizeTextarea.svelte";
  import ElementsInLabel from "./_ElementsInLabel.svelte";
  import DifferentTypes from "./_DifferentTypes.svelte";
  import ManualSetup from "./_ManualSetup.svelte";
  import Solo from "./_Solo.svelte";
</script>

<svelte:head>
  <title>Text Field - SMUI</title>
</svelte:head>

<section>
  <h2>Text Field 文本框</h2>

  <pre class="demo-spaced">npm i -D @smui/textfield</pre>

  <Demo component={Showcase} file="textfield/_Showcase.svelte" />

  <Demo component={Standard} file="textfield/_Standard.svelte">标准</Demo>

  <Demo component={Filled} file="textfield/_Filled.svelte">填充</Demo>

  <Demo component={Outlined} file="textfield/_Outlined.svelte">边框</Demo>

  <Demo component={ShapedFilled} file="textfield/_ShapedFilled.svelte">
    形状填充
    <svelte:fragment slot="subtitle">使用 CSS 修改样式</svelte:fragment>
  </Demo>

  <Demo component={ShapedOutlined} file="textfield/_ShapedOutlined.svelte">
    异形边框
    <svelte:fragment slot="subtitle">使用 CSS 修改样式</svelte:fragment>
  </Demo>

  <Demo component={Required} file="textfield/_Required.svelte">必输项</Demo>

  <Demo component={Disabled} file="textfield/_Disabled.svelte">禁用</Demo>

  <Demo component={Prefixed} file="textfield/_Prefixed.svelte">带前缀</Demo>

  <Demo component={Suffixed} file="textfield/_Suffixed.svelte">带后缀</Demo>

  <Demo
    component={NoLabelOrHelperText}
    file="textfield/_NoLabelOrHelperText.svelte"
  >
    不带标签或辅助文本
  </Demo>

  <Demo
    component={PersistentHelperText}
    file="textfield/_PersistentHelperText.svelte"
  >
    提示文本一直显示
  </Demo>

  <Demo component={CharacterCount} file="textfield/_CharacterCount.svelte">
    带字数提示
  </Demo>

  <Demo
    component={HelperTextCharacterCount}
    file="textfield/_HelperTextCharacterCount.svelte"
  >
    带辅助文本和字数提示
  </Demo>

  <Demo component={BothIcons} file="textfield/_BothIcons.svelte">双图标</Demo>

  <Demo component={ConditionalIcons} file="textfield/_ConditionalIcons.svelte">
    按条件显示图标
  </Demo>

  <Demo component={Textarea} file="textfield/_Textarea.svelte">文本框</Demo>

  <Demo
    component={TextareaCharacterCount}
    file="textfield/_TextareaCharacterCount.svelte"
  >
    带字数提示的文本框
  </Demo>

  <Demo component={FullWidth} file="textfield/_FullWidth.svelte">
    全屏宽度输入框
  </Demo>

  <Demo
    component={FullWidthTextarea}
    file="textfield/_FullWidthTextarea.svelte"
  >
    全屏宽度文本框
  </Demo>

  <Demo
    component={FixedSizeTextarea}
    file="textfield/_FixedSizeTextarea.svelte"
  >
    固定大小的文本框
    <svelte:fragment slot="subtitle">
      关闭浏览器的原生调整大小功能。
    </svelte:fragment>
  </Demo>

  <Demo component={ElementsInLabel} file="textfield/_ElementsInLabel.svelte">
    标签中带有元素
  </Demo>

  <Demo component={DifferentTypes} file="textfield/_DifferentTypes.svelte">
    不同的输入类型
  </Demo>

  <Demo component={ManualSetup} file="textfield/_ManualSetup.svelte">
    手动设置
  </Demo>

  <Demo component={Solo} file="textfield/_Solo.svelte">
    Solo 风格
    <svelte:fragment slot="subtitle">
      使用 Paper 和 Textfield 外的 Input 创建“Solo”输入 
    </svelte:fragment>
  </Demo>
</section>

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
    flex-basis: 0;
    min-width: 218px;
  }

  * :global(.columns .mdc-text-field),
  * :global(.columns .mdc-text-field + .mdc-text-field-helper-line) {
    width: 218px;
  }

  * :global(.columns .status) {
    width: auto;
    word-break: break-all;
    overflow-wrap: break-word;
  }
</style>
