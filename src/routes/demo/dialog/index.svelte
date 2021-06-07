<script>
  import Demo from "../../../components/Demo.svelte";
  import Simple from "./_Simple.svelte";
  import DefaultFocus from "./_DefaultFocus.svelte";
  import Event from "./_Event.svelte";
  import Mandatory from "./_Mandatory.svelte";
  import List from "./_List.svelte";
  import Selection from "./_Selection.svelte";
  import Sliders from "./_Sliders.svelte";
  import LargeScroll from "./_LargeScroll.svelte";
  import Fullscreen from "./_Fullscreen.svelte";
  import OverFullscreen from "./_OverFullscreen.svelte";
  import ManyActions from "./_ManyActions.svelte";
</script>

<svelte:head>
  <title>Dialogs - SMUI</title>
</svelte:head>

<section>
  <h2>Dialogs 对话框</h2>

  <pre class="demo-spaced">npm i -D @smui/dialog</pre>

  <Demo component={Simple} file="dialog/_Simple.svelte" />

  <Demo component={DefaultFocus} file="dialog/_DefaultFocus.svelte">
    自动给按钮获取焦点
  </Demo>

  <Demo component={Event} file="dialog/_Event.svelte">
    使用对话框事件代替按钮点击
  </Demo>

  <Demo component={Mandatory} file="dialog/_Mandatory.svelte">
    强制对话框（不点击事件按钮或 Esc 不会关闭）
  </Demo>

  <Demo component={List} file="dialog/_List.svelte">
    不带操作，带有一个长选择列表的对话框
  </Demo>

  <Demo component={Selection} file="dialog/_Selection.svelte">选择对话框</Demo>

  <Demo component={Sliders} file="dialog/_Sliders.svelte">带滑块的对话框</Demo>

  <Demo component={LargeScroll} file="dialog/_LargeScroll.svelte">
    可滚动的大对话框
  </Demo>

  <Demo component={Fullscreen} file="dialog/_Fullscreen.svelte">
    全屏对话框
    <svelte:fragment slot="subtitle">
      请注意，对话框只会在移动设备大小的屏幕上全屏显示。在桌面大小的屏幕上，它将显示为模式对话框。
    </svelte:fragment>
  </Demo>

  <Demo component={OverFullscreen} file="dialog/_OverFullscreen.svelte">
    全屏对话框上的对话框
    <svelte:fragment slot="subtitle">
      请注意，Material Spec
      规定对话框应该放在另一个对话框之上的唯一时间是在全屏对话框之上显示的确认对话框。
    </svelte:fragment>
  </Demo>

  <Demo component={ManyActions} file="dialog/_ManyActions.svelte">
    并排的操作按钮过多
    <svelte:fragment slot="subtitle">
      如果对话框太窄，操作按钮将自动堆叠。如果你想让它们无论如何堆叠，你可以强制它。
    </svelte:fragment>
  </Demo>
</section>
