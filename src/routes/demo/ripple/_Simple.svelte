<script>
  import Ripple from "@smui/ripple";
</script>

<p use:Ripple={{ surface: true }} tabindex="0">
  SMUI 涟漪可以添加到任意元素上，比如这个 <code>p</code> 元素。尝试单击它来查看涟漪。
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
