<script>
  import Demo from "../../../components/Demo.svelte";
  import Permanent from "./_Permanent.svelte";
  import Dismissible from "./_Dismissible.svelte";
  import Modal from "./_Modal.svelte";
</script>

<svelte:head>
  <title>Drawers - SMUI</title>
</svelte:head>

<section>
  <h2>Drawers 抽屉</h2>

  <pre class="demo-spaced">npm i -D @smui/drawer</pre>

  <Demo component={Permanent} file="drawer/_Permanent.svelte">永久抽屉</Demo>

  <Demo component={Dismissible} file="drawer/_Dismissible.svelte">
    带有标题和激活项目的可关闭抽屉
  </Demo>

  <Demo component={Modal} file="drawer/_Modal.svelte"
    >带有标题、激活项、副标题、图标、列表组的模态抽屉
  </Demo>
</section>
