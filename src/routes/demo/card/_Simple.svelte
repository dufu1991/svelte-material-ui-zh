<div class="card-display">
  <div class="card-container">
    <Card padded>一张简单的填充卡。</Card>
  </div>

  <div class="card-container">
    <Card>
      <Content>您还可以使用 <code>Content</code>。</Content>
    </Card>
  </div>

  <div class="card-container">
    <Card variant="outlined" padded>带边框和填充的卡片</Card>
  </div>
</div>

<pre class="status">Clicked: {clicked}</pre>

<script>
  import Card, { Content } from '@smui/card';

  let clicked = 0;
</script>
