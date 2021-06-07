<svelte:head>
  <title>Data Table - SMUI</title>
</svelte:head>

<section>
  <h2>Data Table 数据表格</h2>

  <pre class="demo-spaced">npm i -D @smui/data-table</pre>

  <Demo component={Simple} file="data-table/_Simple.svelte" />

  <Demo
    component={ProgressIndicator}
    file="data-table/_ProgressIndicator.svelte"
  >
    进度指示器
  </Demo>

  <Demo component={StickyHeader} file="data-table/iframe.svelte">
    固定表头
    <svelte:fragment slot="subtitle">
      This is displayed in an iframe and the source viewer shows the iframe
      source. Sticky headers don't work if any ancestor element has the
      "overflow" style set to "hidden", "scroll", or "auto".
    </svelte:fragment>
  </Demo>

  <Demo component={RowSelection} file="data-table/_RowSelection.svelte">
    选择行
  </Demo>

  <Demo component={Pagination} file="data-table/_Pagination.svelte">
    分页
  </Demo>

  <Demo component={Sortable} file="data-table/_Sortable.svelte">可排序</Demo>
</section>

<script>
  import Demo from '../../../components/Demo.svelte';
  import Simple from './_Simple.svelte';
  import ProgressIndicator from './_ProgressIndicator.svelte';
  import StickyHeader from './_StickyHeader.svelte';
  import RowSelection from './_RowSelection.svelte';
  import Pagination from './_Pagination.svelte';
  import Sortable from './_Sortable.svelte';
</script>
