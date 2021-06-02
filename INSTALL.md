# 安装

首先，安装 SMUI。

```sh
npm install --save @smui/button
npm install --save @smui/card
# etc...
```

您还可以在 [Svelte REPL 中使用 SMUI](REPL.md)。

## 导入组件

您将始终从各个包中导入 Svelte 组件。

此方法将仅包含 JavaScript。将此用于默认主题或[简单样式方法](SASS.md#easy-styling-method)。

```svelte
<script>
  import Button from '@smui/button';
</script>
```

此方法也将包含 Sass 文件。将此用于[高级样式方法](SASS.md#advanced-styling-method)。

```svelte
<script>
  import Button from '@smui/button/styled';
</script>
```

请注意，在导入路径中添加”/styled”意味着将导入 Sass 文件。

## Material 字体

如果您需要使用 Material Icon、Roboto 和 Roboto Mono 字体，请确保包含这些样式表（或组件包中包含它们）。

```html
<!-- Material Icons -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<!-- Roboto -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
/>
<!-- Roboto Mono -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
/>
```

## 使用默认主题

您可以使用“svelte-material-ui”包中预构建的“bare.css”文件。如果您使用此选项，您可以在大多数情况下自定义您的主题，但您的[主题配置选项](THEMING.md#theming-the-bare-css)将会受限。

```sh
npm install --save svelte-material-ui
```

```html
<link rel="stylesheet" href="node_modules/svelte-material-ui/bare.css" />
```

如果这不起作用（可能是因为您的依赖项未复制到您的构建文件夹），您还可以使用 CDN。当您更新到新版本的 SMUI 时，请确保此处也是最新版本。

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@4.0.0/bare.min.css"
/>
```

如果您不使用那么多的组件并且希望打包文件更小，您也可以使用各个包中的“bare.css”文件。

## 使用自定义主题

查看有关设置自定义主题的 [Sass 说明](SASS.md)。

## SvelteKit

关于 SvelteKit，请查看 [SvelteKit 说明](SVELTEKIT.md)。
