<script>
  import Demo from "../../../components/Demo.svelte";
  import Simple from "./_Simple.svelte";
  import FourByFive from "./_FourByFive.svelte";
  import Masonry from "./_Masonry.svelte";
  import EnforceAspectRatio from "./_EnforceAspectRatio.svelte";
</script>

<svelte:head>
  <title>Image Lists - SMUI</title>
</svelte:head>

<section>
  <h2>Image Lists 图像列表</h2>

  <pre class="demo-spaced">npm i -D @smui/image-list</pre>

  <Demo
    component={Simple}
    files={["image-list/_Simple.svelte", "image-list/_Simple.scss"]}
  />

  <Demo
    component={FourByFive}
    files={["image-list/_FourByFive.svelte", "image-list/_FourByFive.scss"]}
    >4x5 纵横比，带文字描述
  </Demo>

  <Demo
    component={Masonry}
    files={["image-list/_Masonry.svelte", "image-list/_Masonry.scss"]}
  >
    带圆角，瀑布流
  </Demo>

  <Demo
    component={EnforceAspectRatio}
    files={[
      "image-list/_EnforceAspectRatio.svelte",
      "image-list/_EnforceAspectRatio.scss",
    ]}
  >
    使用 <code>div</code> 而不是 <code>img</code> 来强制纵横比
  </Demo>
</section>
