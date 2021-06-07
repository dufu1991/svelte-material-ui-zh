<script>
  import Ripple from "@smui/ripple";

  let active = false;
</script>

<p
  use:Ripple={{ surface: true, active }}
  on:mousedown|capture={() => (active = true)}
  on:mouseup|capture={() => (active = false)}
  on:keydown|capture={(e) =>
    (active = e.code === "Space" || e.code === "Enter")}
  on:keyup|capture={() => (active = false)}
  tabindex="0"
>
  在非按钮非链接的元素上可以使用键盘激活涟漪。（聚焦此元素并按空格/回车查看效果。）
</p>

<style>
  p {
    padding: 10px;
    border-radius: 5px;
  }

  [tabindex="0"] {
    cursor: pointer;
  }
</style>
