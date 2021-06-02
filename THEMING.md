# SMUI 主题

## 使用 Sass 主题化

_smui-theme.scss 文件是您为主题定义 Sass 变量的地方。您可以查看 MDC-Web 组件的自述文件，了解如何深入设计组件的样式。最重要的（有可能也是您唯一想要的）是设置[主题颜色](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-theme#color-scheme)。对于 Material 调色板，您可以使用 @use [“@material/theme/color-palette”](https://github.com/material-components/material-components-web/blob/v11.0.0/packages/mdc-theme/_color-palette.scss)。您也可以设置[边框半径变量](https://github.com/material-components/material-components-web/tree/v11.0.0/packages/mdc-shape#sass-variables)的样式。

这有一个 _smui-theme.scss 示例文件，您可以将其用作起点。

```scss
@use '@material/theme/color-palette';

$background: #fff;

@use '@material/theme/index' as theme with (
  $primary: color-palette.$purple-500,
  $secondary: color-palette.$teal-600,
  $surface: #fff,
  $background: $background,
  $error: #b00020,
);

html,
body {
  background-color: $background;
  color: if(theme.contrast-tone($background) == 'dark', #000, #fff);
}

a {
  color: color-palette.$blue-500;
}
a:visited {
  color: color-palette.$blue-800;
}
```

## 使用基础 CSS 主题化

如果您使用基础的 CSS，则可以使用 CSS 变量设置主题选项的子集。请注意，并非 SMUI 中的所有颜色都是从 CSS 变量中读取的，因此某些部分仍将使用原始 Sass 编译中定义的颜色。下面是 SMUI 网站上 CSS 中变量的副本。您可以将其用作您自己主题的起点。

```css
/* Theme colors. */
:root {
  --mdc-theme-primary: #ff3e00;
  --mdc-theme-secondary: #676778;
  --mdc-theme-background: #fff;
  --mdc-theme-surface: #fff;
  --mdc-theme-error: #b71c1c;
  --mdc-theme-on-primary: #fff;
  --mdc-theme-on-secondary: #fff;
  --mdc-theme-on-surface: #000;
  --mdc-theme-on-error: #fff;
  --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
  --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.54);
  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-dark: #fff;
  --mdc-theme-text-secondary-on-dark: hsla(0, 0%, 100%, 0.7);
  --mdc-theme-text-hint-on-dark: hsla(0, 0%, 100%, 0.5);
  --mdc-theme-text-disabled-on-dark: hsla(0, 0%, 100%, 0.5);
  --mdc-theme-text-icon-on-dark: hsla(0, 0%, 100%, 0.5);
}

/* Layout grid spacing. */
:root {
  --mdc-layout-grid-margin-desktop: 24px;
  --mdc-layout-grid-gutter-desktop: 24px;
  --mdc-layout-grid-column-width-desktop: 72px;
  --mdc-layout-grid-margin-tablet: 16px;
  --mdc-layout-grid-gutter-tablet: 16px;
  --mdc-layout-grid-column-width-tablet: 72px;
  --mdc-layout-grid-margin-phone: 16px;
  --mdc-layout-grid-gutter-phone: 16px;
  --mdc-layout-grid-column-width-phone: 72px;
}
```
