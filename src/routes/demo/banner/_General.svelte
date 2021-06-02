<div>
  <FormField>
    <Checkbox bind:checked={open} />
    <span slot="label">开启</span>
  </FormField>
  <FormField>
    <Checkbox bind:checked={centered} />
    <span slot="label">居中</span>
  </FormField>
  <FormField>
    <Checkbox bind:checked={mobileStacked} />
    <span slot="label">移动端堆叠</span>
  </FormField>
</div>

<pre class="status">关闭原因: {closedReason}</pre>

<div class="top-app-bar-container">
  <TopAppBar variant="static">
    <Row>
      <Section>
        <Title>Top App Bar</Title>
      </Section>
    </Row>
  </TopAppBar>
  <Banner
    bind:open
    bind:centered
    bind:mobileStacked
    on:MDCBanner:closed={(event) => (closedReason = event.detail.reason)}
  >
    <Label slot="label">这是一个不带图标且带有事件的横幅。</Label>
    <svelte:fragment slot="actions">
      <Button secondary>次按钮</Button>
      <Button>主按钮</Button>
    </svelte:fragment>
  </Banner>
  <div>
    <img
      alt="Page content placeholder"
      src="/page-content.jpg"
      style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
    />
  </div>
</div>

<script>
  import Banner, { Label } from '@smui/banner';
  import Button from '@smui/button';
  import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
  import Checkbox from '@smui/checkbox';
  import FormField from '@smui/form-field';

  let open = false;
  let centered = false;
  let mobileStacked = true;

  let closedReason = '未知。';
</script>
