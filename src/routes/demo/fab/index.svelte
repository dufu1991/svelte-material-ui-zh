<svelte:head>
  <title>Floating Action Button - SMUI</title>
</svelte:head>

<section>
  <h2>Floating Action Button 浮动操作按钮</h2>

  <pre class="demo-spaced">npm i -D @smui/fab</pre>

  <Demo component={Simple} file="fab/_Simple.svelte" />

  <Demo component={PrimaryColor} file="fab/_PrimaryColor.svelte">
    主题色
  </Demo>

  <Demo component={Exited} file="fab/_Exited.svelte">消失</Demo>

  <Demo component={Mini} file="fab/_Mini.svelte">小尺寸</Demo>

  <Demo component={Extended} file="fab/_Extended.svelte">大尺寸</Demo>

  <Demo component={NoRipple} file="fab/_NoRipple.svelte">不带涟漪</Demo>

  <Demo component={Link} file="fab/_Link.svelte">带链接</Demo>

  <Demo component={Svg} file="fab/_Svg.svelte">带 Svg 图形</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import Exited from './_Exited.svelte';
  import Mini from './_Mini.svelte';
  import Extended from './_Extended.svelte';
  import NoRipple from './_NoRipple.svelte';
  import Link from './_Link.svelte';
  import Svg from './_Svg.svelte';
</script>

<style>
  * :global(.flexy) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  * :global(.margins) {
    margin: 0 0.4em 0.4em 0;
  }
</style>
