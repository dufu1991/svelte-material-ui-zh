<script>
  import Demo from "../../../components/Demo.svelte";
  import CommonLabelIcon from "./_CommonLabelIcon.svelte";
  import TargetingClasses from "./_TargetingClasses.svelte";
  import EventsAndModifiers from "./_EventsAndModifiers.svelte";
  import ElementalComponents from "./_ElementalComponents.svelte";
  import ClassAdderBuilder from "./_ClassAdderBuilder.svelte";
  import ClassMap from "./_ClassMap.svelte";
  import Dispatch from "./_Dispatch.svelte";
  import ExcludeAndPrefixFilter from "./_ExcludeAndPrefixFilter.svelte";
  import ForwardEventsBuilder from "./_ForwardEventsBuilder.svelte";
  import UseActions from "./_UseActions.svelte";
</script>

<svelte:head>
  <title>Common - SMUI</title>
</svelte:head>

<section>
  <h2>Common 通用</h2>
  <p>常见的标签、图标、辅助实用程序和元素组件的组合。</p>

  <pre class="demo-spaced">npm i -D @smui/common</pre>

  <Demo component={CommonLabelIcon} file="common/_CommonLabelIcon.svelte">
    通用标签和图标
    <svelte:fragment slot="subtitle">
      公共标签和图标也需要从使用它们的每个包中导出。
    </svelte:fragment>
  </Demo>

  <h4>共同特点和使用方式</h4>

  <Demo component={TargetingClasses} file="common/_TargetingClasses.svelte">
    定位类
    <svelte:fragment slot="subtitle">
      因为 Svelte 将您的 CSS 限制为<em>仅</em
      >当前组件生效，所以您需要使用“:global”选择器来指定 SMUI 元素。
    </svelte:fragment>
  </Demo>

  <Demo component={EventsAndModifiers} file="common/_EventsAndModifiers.svelte">
    事件与修饰符
    <svelte:fragment slot="subtitle">
      SMUI 支持监听<strong>所有</strong>事件。您也可以使用带有“$”语法的修饰符。
    </svelte:fragment>
  </Demo>

  <Demo
    component={ElementalComponents}
    file="common/_ElementalComponents.svelte"
  >
    元素组件
    <svelte:fragment slot="subtitle">
      许多 SMUI 组件允许您自定义用于呈现它们的 DOM 元素。
    </svelte:fragment>
  </Demo>

  <h4>辅助工具</h4>

  <Demo
    component={ClassAdderBuilder}
    files={[
      "common/_ClassAdderBuilder.svelte",
      "common/_ClassAdderBuilderComponent.js",
    ]}
  >
    类的构建
    <svelte:fragment slot="subtitle">
      使用它来构建一个 ClassAdder 组件。 ClassAdder
      组件可用于减小包的大小。如果您有大量只需要添加类/属性或设置上下文的简单组件，则使用
      ClassAdder 组件意味着您的包中只有一个“大的”Svelte
      组件可用于所有这些小组件。
    </svelte:fragment>
  </Demo>

  <Demo component={ClassMap} file="common/_ClassMap.svelte">
    Class Map
    <svelte:fragment slot="subtitle">
      从类名到条件的映射构建类字符串。当您需要向组件添加类时，这会很有用，因为
      Svelte 的“class:”指令不适用于组件。（这对于采用 <code>addClass</code> 和
      <code>removeClass</code>
      函数的操作也很有用。）
    </svelte:fragment>
  </Demo>

  <Demo component={Dispatch} file="common/_Dispatch.svelte">
    派发
    <svelte:fragment slot="subtitle">
      派发自定义事件。这与 Svelte 的组件事件系统不同，因为这些事件需要一个 DOM
      元素作为目标，可以冒泡（并且默认执行），并且可以通过<code
        >event.preventDefault()</code
      >。所有 SMUI/MDC 事件都使用它而不是 Svelte 的
      <code>createEventDispatcher</code>
      进行调度。
    </svelte:fragment>
  </Demo>

  <Demo
    component={ExcludeAndPrefixFilter}
    files={[
      "common/_ExcludeAndPrefixFilter.svelte",
      "common/_ExcludeAndPrefixFilterComponent.svelte",
    ]}
  >
    排除和前缀过滤器
    <svelte:fragment slot="subtitle">
      Exclude 与普通的 <code>omit</code>
      函数不同，它还会排除给定字符串开头的所有属性，如果该字符串以“$”结尾。前缀过滤器仅过滤具有特定前缀的属性的对象。它们通常一起使用以允许将
      props 赋予组件内的多个元素。
    </svelte:fragment>
  </Demo>

  <Demo
    component={ForwardEventsBuilder}
    files={[
      "common/_ForwardEventsBuilder.svelte",
      "common/_ForwardEventsBuilderComponent.svelte",
    ]}
  >
    转发事件生成器
    <svelte:fragment slot="subtitle">
      构建一个动作以允许从 Svelte 组件转发 **all**
      事件，并支持使用“$”语法的事件修饰符。
      <ul>
        <li>
          这对于 UI
          库组件特别有用，因为通常不知道所有所需用例需要哪些事件。例如，如果一个
          Button 组件只转发一个 <code>click</code>
          事件，那么任何需要鼠标 <code>mouseover</code> 或 <code>keypress</code>
          事件的用例都不能与它一起使用。
        </li>
        <li>
          此外，使用 Svelte
          的内置事件转发系统的组件不能在事件生命周期的“捕获”阶段允许事件侦听器。它也不允许使用浏览器内置的
          <code>preventDefault</code> 函数取消事件。 事实上，Svelte 事件系统的一大优势，就是您不需要元素作为事件目标这一事实，甚至不适用于
          UI 库组件。
        </li>
      </ul>
    </svelte:fragment>
  </Demo>

  <Demo
    component={UseActions}
    files={[
      "common/_UseActions.svelte",
      "common/_UseActionsComponent.svelte",
      "common/_UseActionsPannable.js",
      "common/_UseActionsSwipeable.js",
      "common/_UseActionsTappable.js",
    ]}
  >
    使用事件
    <svelte:fragment slot="subtitle">
      采取行动并在元素上运行它们的动作。用于允许对组件执行操作，并将操作从一个组件转发到另一个组件，直到最终组件最终呈现
      DOM 元素。
    </svelte:fragment>
  </Demo>
</section>
