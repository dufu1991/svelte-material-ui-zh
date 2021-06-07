<svelte:head>
  <title>Form Field - SMUI</title>
</svelte:head>

<section>
  <h2>Form Fields 表单字段</h2>

  <pre class="demo-spaced">npm i -D @smui/form-field</pre>

  <Demo component={Checkbox} file="form-field/_Checkbox.svelte">复选框</Demo>

  <Demo component={EndAlignment} file="form-field/_EndAlignment.svelte">
    末端位置
  </Demo>

  <Demo component={Radio} file="form-field/_Radio.svelte">圆形按钮</Demo>

  <Demo component={Switch} file="form-field/_Switch.svelte">开关</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Checkbox from './_Checkbox.svelte';
  import EndAlignment from './_EndAlignment.svelte';
  import Radio from './_Radio.svelte';
  import Switch from './_Switch.svelte';
</script>
