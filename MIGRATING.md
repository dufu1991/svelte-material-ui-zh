# 迁移到较新的 SMUI 版本

本文档包含的信息可帮助您将代码从旧版本的 SMUI 迁移到新版本。您现有代码中需要更改的内容将会在此处编写。如果 MDC 的原始版本与 SMUI 版本之间发生了更改，查看 MDC 更改日志也会很有帮助。

# SMUI 4.0 -> SMUI 4.1

- 事件修饰符已更改为使用“$”而不是“:”（ `on:click$capture={handler}`）」，因此所有事件，甚至 MDC 事件，都可以与修饰符绑定。
  - 旧的“:”语法仍然有效，只会在控制台中发出警告。

# SMUI 3 -> SMUI 4

## 重大变化

组件不再从它们的“index.js”文件中导入样式。如果你之前使用过“/bare”，你就不需要了。如果您依赖于导入的样式，则现在需要对组件使用“/styled”结尾。

查看新的 [smui-theme](https://github.com/hperrin/svelte-material-ui/tree/master/packages/smui-theme) 包。它可以帮助您处理主题。

# SMUI 3.0 -> SMUI 3.1

SMUI 3.1 开始 MDC 原始版本从 10.0 迁移到 11.0：https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1100-2021-04-15

您也应该将 MDC 依赖项更新到 11.0。

## 重大变化

### 主题，Sass

- MDC-Web 纸片拖拽动作类已改变。
- MDC-Web 列表类已改变。

## 新功能

### 组件

- Banner 横幅
  - 在横幅上添加焦点陷阱。
- Dialog 对话框
  - 新的 `fullscreen` 属性.
  - 新的 `over` 插槽.
- Menu Surface 菜单表面
  - 新的 `maxHeight` 属性.
  - 新的 `horizontallyCenteredOnViewport` 属性.
- Slider 滑块
  - 根据 step 属性舍入值以更正小数位。
- Tooltip 提示
  - 新的 attachScrollHandler 和 removeScrollHandler 函数，用于添加要处理的其他可滚动元素。两者都接受一个函数。

# SMUI 2 -> SMUI 3

你需要迁移到 Dart Sass。不再支持 node-sass，因为它已被弃用而且现在的版本也太旧了。

```sh
npm un -D node-sass
npm i -D sass
```

SMUI 3 从 4.0 开始迁移到原始分支 MDC 10.0：https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1000-2021-02-05

在 Sapper 中使用 SMUI 有[新的更新说明](SAPPER.md)。

## 重大变化

### Theming, Sass

- MDC-Web migrated to the "@use" syntax, so mixins, functions, and variables are namespaced by the "@use" statement now instead of a prefix.
- Theming has changed, so you'll need to update your "\_smui-theme.scss" file. Follow [this guide](THEMING.md).

### Components

- Chips
  - You now need to use `let:chip` on the set and pass it to the chip with `{chip}`.
  - Chips now export LeadingIcon, TrailingIcon, and TrailingAction, instead of Icon.
  - Removed `selected` prop on Chip. `selected` prop on Chips is now the only way to set the selected chip(s), and it/they should be identical to one/some of the entries in `chips` (pass objects by reference).
  - Don't provide any `tabindex` props to any of the Chips, Texts, or the Set. They will manage their own tabindex.
  - On TrailingAction, use `icon$class` to add classes to the icon element.
- Data Table
  - `numeric` prop on Cell should now also be set on Head Cells.
- Dialog
  - Open state is now controled by an `open` prop, instead of `open` and `close` functions. There are also `isOpen` and `setOpen` functions.
  - Lists should now be placed below `Content` element, rather than being the `Content` component. For selection from a list, use the new `selection` prop on the dialog.
  - Slider dialogs are styled a bit differently. See the [demo](https://sveltematerialui.com/demo/dialog/).
- Icon Button
  - No longer emit 'MDCIconButtonToggle:change' event without the `toggle` prop. Instead, listen for click event.
- Linear Progress
  - Removed `reversed` prop.
- List
  - `radiolist` and `checklist` props renamed to `radioList` and `checkList`.
- Menu Surface
  - Anchor action now takes `addClass` and `removeClass` instead of `classForward` (like Ripple).
- Ripple
  - [Ripple's options](https://github.com/hperrin/svelte-material-ui/blob/v3.0.0/packages/ripple/README.md#default) have changed considerably.
- Select
  - This is almost completely rewritten. You will need to migrate code for it. Check out the demo page.
  - Helper Text in no longer a component. Instead, a `svelte:fragment` with text now goes inside the component in the "helper" slot. Its ID and ARIA attributes are set automatically.
  - Removed `withLeadingIcon` and `selectedIndex` props.
  - You no longer need `withLeadingIcon`. Instead, put Icon into the "leadingIcon" slot.
  - You should now set `required` prop on the Select instead of `input$required`.
- Slider
  - `displayMarkers` prop renamed to `tickMarks`.
  - `step` now defaults to 1 (same as the range HTML input).
- Tab
  - Removed `active` and `focusOnActivate` props. (No longer needed, since TabBar controls them.)
- TabBar
  - Removed `activeIndex` prop. `active` prop is now the only way to set the active tab, and it should be identical to one of the entries in `tabs` (pass objects by reference).
- Textfield
  - This is almost completely rewritten. You will need to migrate code for it. Check out the demo page.
  - Helper Text and Character Counter now go inside the component in the "helper" slot. Their IDs and ARIA attributes are set automatically.
  - Character Counter in a `textarea` Textfield goes in the "internalCounter" slot.
  - Removed `fullwidth`, `dense`, `withLeadingIcon`, and `withTrailingIcon` props.
  - You no longer need `withLeadingIcon` or `withTrailingIcon`. Instead, put Icons into the "leadingIcon" and "trailingIcon" slots.
  - You should now set `required` prop on the Textfield instead of `input$required`.
  - Manual setup now requires passing the sub-components into Textfield with `input`, `floatingLabel`, `lineRipple`, and `notchedOutline` props.

## New Features.

### Theming, Sass

- Paper
  - New `paper-color` mixin.
- Switch
  - New `color` prop.

### Components

- All components have a `getElement` function that will return their top level DOM element.
- All components now forward **all** events, and only listen for them if bounded.
- They can also take event modifiers with the ":" syntax istead of "|" (`on:click:capture={handler}`).

New Components

- Banners
- Circular Progress
- Layout Grids
- Segmented Buttons
- Tooltips
- Touch Target Wrappers

New Features in Existing Components

- Chips
  - New `nonInteractive` prop on Set.
  - New `shouldFocusPrimaryActionOnClick` prop on Chip.
- Common
  - Icon now takes a `component` prop.
- Data Table
  - New `stickyHeader` prop.
  - New `columnId` prop on Cell (defaults to an automatic ID).
  - New `rowId` prop on Row (defaults to an automatic ID).
  - Pagination
  - Progress Indicator
  - Column Sort Buttons
- Dialog
  - New `selection` prop.
- Drawer
  - New `fixed` prop (defaults to true).
  - New `isOpen` function.
- FAB
  - New `touch` prop.
- Form Field
  - New `noWrap` prop.
- Icon Button
  - New `ariaLabelOn` and `ariaLabelOff` props for toggle buttons.
- Menu
  - New `isOpen` function.
  - New `setOpen` function.
  - New `setDefaultFocusState` function.
- Menu Surface
  - New `fullWidth` prop.
  - New `anchorMargin` prop.
  - New `MDCMenuSurface:closing` event.
- Select
  - New `hiddenInput` prop.
  - New `key` prop for using objects as options.
- Slider
  - New `range`, `start`, `end` props for range sliders.
  - New `valueToAriaValueTextFn` prop for updating the ARIA value attribute.
- TabBar
  - New `tabScroller$align` prop.
- Textfield
  - New `prefix` and `suffix` props.
  - New `validateOnValueChange` prop.
  - New `input$resizable={false}` prop to disable textarea resizing.
  - New `helperLine$` "$" props passed to the helper line.
- Top App Bar
  - New `scrollTarget` prop.

If you have trouble upgrading with these instructions, you can raise an issue on GitHub.

# SMUI 1 -> SMUI 2

SMUI 2 migrated to upstream MDC 4.0 from 3.0:
https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#400-2019-11-02-1

- Chips
  - Text component is now required.
  - Now use their own Text and Icon components. The common ones will not work.
  - Icon no longer requires `trailing` prop. That is the default.
  - Checkmark component is no longer required. It is added automatically.
- Menu and Menu Surface
  - hoistMenuToBody function removed.
- Select
  - `enchanced` prop is removed. All selects are enhanced now.
  - `selected` prop on Option is no longer required and probably should not be used.
  - You now need to pass a class into `anchor$class` and `menu$class` with a width value set.
- Button
  - No longer has a `dense` prop. Use the mixin from MDC.
