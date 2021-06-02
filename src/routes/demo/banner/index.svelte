<svelte:head>
  <title>Banner - SMUI</title>
</svelte:head>

<Fixed />

<section>
  <h2>Banner 横幅</h2>

  <pre class="demo-spaced">npm i -D @smui/banner</pre>

  <Demo component="Shown above." file="banner/_Fixed.svelte" />

  <Demo component={General} file="banner/_General.svelte">横幅选项</Demo>

  <Demo component={Icon} file="banner/_Icon.svelte">带图标的横幅</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Fixed from './_Fixed.svelte';
  import General from './_General.svelte';
  import Icon from './_Icon.svelte';
</script>

<style>
  * :global(.top-app-bar-container) {
    width: calc(100% - 24px);
    height: 400px;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    margin: 0 18px 18px 0;
    background-color: var(--mdc-theme-background, #fff);

    overflow: auto;
    display: inline-block;
  }
</style>
