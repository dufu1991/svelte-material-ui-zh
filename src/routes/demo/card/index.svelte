<svelte:head>
  <title>Cards - SMUI</title>
</svelte:head>

<section>
  <h2>Cards 卡片</h2>

  <pre class="demo-spaced">npm i -D @smui/card</pre>

  <Demo component={Simple} file="card/_Simple.svelte" />

  <Demo component={Actions} file="card/_Actions.svelte">带事件卡片</Demo>

  <Demo component={Media} file="card/_Media.svelte">带媒体卡片</Demo>

  <Demo component={List} file="card/_List.svelte">带一条列表的卡片</Demo>

  <Demo component={Complex} file="card/_Complex.svelte">组合使用</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import Actions from './_Actions.svelte';
  import Media from './_Media.svelte';
  import List from './_List.svelte';
  import Complex from './_Complex.svelte';
</script>

<style>
  * :global(.card-display) {
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
  }

  * :global(.card-container) {
    display: inline-flex;
    /* justify-content: center; */
    align-items: center;
    min-height: 200px;
    width: 380px;
    max-width: 100%;
    overflow-x: auto;
    background-color: var(--mdc-theme-background, #f8f8f8);
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));

    padding: 20px;

    margin-right: 20px;
    margin-bottom: 20px;
  }

  * :global(.card-container > *) {
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    * :global(.card-container) {
      margin-right: 0;
      padding-right: 0;
      padding-left: 0;
    }
  }
</style>
