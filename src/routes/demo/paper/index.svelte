<svelte:head>
  <title>Paper - SMUI</title>
</svelte:head>

<section>
  <h2>Paper 纸张</h2>

  <pre class="demo-spaced">npm i -D @smui/paper</pre>

  <Demo component={Simple} file="paper/_Simple.svelte" />

  <Demo component={Square} file="paper/_Square.svelte">方形纸张</Demo>

  <Demo component={PrimaryColor} file="paper/_PrimaryColor.svelte">
    主题色
  </Demo>

  <Demo component={SecondaryColor} file="paper/_SecondaryColor.svelte">
    辅助色
  </Demo>

  <Demo
    component={CustomColor}
    files={['paper/_CustomColor.svelte', 'paper/_CustomColor.scss']}
  >
    自定义颜色
  </Demo>

  <Demo
    component={ElevationTransition}
    file="paper/_ElevationTransition.svelte"
  >
    带有高度和过渡效果
  </Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Square from './_Square.svelte';
  import PrimaryColor from './_PrimaryColor.svelte';
  import SecondaryColor from './_SecondaryColor.svelte';
  import CustomColor from './_CustomColor.svelte';
  import ElevationTransition from './_ElevationTransition.svelte';
</script>
