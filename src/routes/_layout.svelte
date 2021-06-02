<script>
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  import {
    mdiFileDocument,
    mdiCodeTags,
    mdiDiscord,
    mdiTwitter,
    mdiGithub,
    mdiWeatherSunny,
    mdiWeatherNight,
    mdiTranslate,
  } from "@mdi/js";

  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import Drawer, { Content, Scrim, AppContent } from "@smui/drawer";
  import IconButton from "@smui/icon-button";
  import List, { Item, Text, Separator } from "@smui/list";
  import Tooltip, { Wrapper } from "@smui/tooltip";
  import { Icon } from "@smui/common";
  import A from "@smui/common/A.svelte";
  import Svg from "@smui/common/Svg.svelte";

  const { page } = stores();
  const iframe = $page.path.includes("/iframe");

  let mainContent;
  let miniWindow = false;
  let drawerOpen = false;

  let lightTheme =
    typeof window === "undefined" ||
    window.matchMedia("(prefers-color-scheme: light)").matches;
  function switchTheme() {
    lightTheme = !lightTheme;

    let themeLink = document.head.querySelector("#theme");
    if (!themeLink) {
      themeLink = document.createElement("link");
      themeLink.rel = "stylesheet";
      themeLink.id = "theme";
    }
    themeLink.href = `smui${lightTheme ? "" : "-dark"}.css`;
    document.head
      .querySelector('link[href="smui-dark.css"]')
      .insertAdjacentElement("afterend", themeLink);

    let siteLink = document.head.querySelector("#site");
    if (!siteLink) {
      siteLink = document.createElement("link");
      siteLink.rel = "stylesheet";
      siteLink.id = "site";
    }
    siteLink.href = `site${lightTheme ? "" : "-dark"}.css`;
    document.head
      .querySelector('link[href="site-dark.css"]')
      .insertAdjacentElement("afterend", siteLink);
  }

  const sections = [
    {
      name: "安装",
      route: "/INSTALL.md/",
      indent: 0,
      nosource: true,
    },
    {
      name: "主题",
      route: "/THEMING.md/",
      indent: 0,
      nosource: true,
    },
    {
      name: "迁移",
      route: "/MIGRATING.md/",
      indent: 0,
      nosource: true,
    },
    {
      separator: true,
    },
    {
      name: "Banner 横幅",
      route: "/demo/banner/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/banner",
      ],
    },
    {
      name: "Button 按钮",
      route: "/demo/button/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/button",
      ],
    },
    {
      name: "Floating Action Button 提升动作按钮",
      route: "/demo/fab/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/fab",
      ],
    },
    {
      name: "Icon Button 图标按钮",
      route: "/demo/icon-button/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/icon-button",
      ],
    },
    {
      name: "Cards 卡片",
      route: "/demo/card/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/card",
      ],
    },
    {
      name: "Common 通用",
      route: "/demo/common/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/common",
      ],
    },
    {
      name: "Data Table 数据表格",
      route: "/demo/data-table/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/data-table",
      ],
    },
    {
      name: "Dialog 对话框",
      route: "/demo/dialog/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/dialog",
      ],
    },
    {
      name: "Drawer 抽屉",
      route: "/demo/drawer/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/drawer",
      ],
    },
    {
      name: "Elevation 高度",
      route: "/demo/elevation/",
      indent: 0,
    },
    {
      name: "Image List 图像列表",
      route: "/demo/image-list/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/image-list",
      ],
    },
    {
      name: "Inputs and Controls 输入与控件",
      indent: 0,
    },
    {
      name: "Checkbox 复选框",
      route: "/demo/checkbox/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/checkbox",
      ],
    },
    {
      name: "Chips 纸片",
      route: "/demo/chips/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/chips",
      ],
    },
    {
      name: "Form Field 表单字段",
      route: "/demo/form-field/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/form-field",
      ],
    },
    {
      name: "Radio Button 单选框",
      route: "/demo/radio/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/radio",
      ],
    },
    {
      name: "Segmented Button 按钮组",
      route: "/demo/segmented-button/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/segmented-button",
      ],
    },
    {
      name: "Select Menu 选择器",
      route: "/demo/select/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/select",
      ],
    },
    {
      name: "Slider 滑块",
      route: "/demo/slider/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/slider",
      ],
    },
    {
      name: "Switch 开关",
      route: "/demo/switch/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/switch",
      ],
    },
    {
      name: "Text Field 文本框",
      route: "/demo/textfield/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/textfield",
      ],
    },
    {
      name: "Layout Grid 布局",
      route: "/demo/layout-grid/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/layout-grid",
      ],
    },
    {
      name: "List 列表",
      route: "/demo/list/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/list",
      ],
    },
    {
      name: "Menu Surface 菜单表面",
      route: "/demo/menu-surface/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/menu-surface",
      ],
    },
    {
      name: "Menu 菜单",
      route: "/demo/menu/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/menu",
      ],
    },
    {
      name: "Paper 纸张",
      route: "/demo/paper/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/paper",
      ],
    },
    {
      name: "Progress Indicators 进度条",
      indent: 0,
    },
    {
      name: "Circular Progress 环状进度条",
      route: "/demo/circular-progress/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/circular-progress",
      ],
    },
    {
      name: "Linear Progress 线性进度条",
      route: "/demo/linear-progress/",
      indent: 1,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/linear-progress",
      ],
    },
    {
      name: "Ripple 涟漪",
      route: "/demo/ripple/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/ripple",
      ],
    },
    {
      name: "Snackbar 消息条",
      route: "/demo/snackbar/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/snackbar",
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/snackbar/kitchen",
      ],
    },
    {
      name: "Tabs 选项卡",
      route: "/demo/tabs/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/tab",
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/tab-bar",
      ],
    },
    {
      name: "Tooltip 提示",
      route: "/demo/tooltip/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/tooltip",
      ],
    },
    {
      name: "Top App Bar 顶部应用栏",
      route: "/demo/top-app-bar/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/top-app-bar",
      ],
    },
    {
      name: "Touch Target 触控区域",
      route: "/demo/touch-target/",
      indent: 0,
      repos: [
        "https://github.com/hperrin/svelte-material-ui/tree/master/packages/touch-target",
      ],
    },
    {
      name: "Typography 排版",
      route: "/demo/typography/",
      indent: 0,
    },
  ];

  $: activeSection = sections.find(
    (section) => "route" in section && routesEqual(section.route, $page.path)
  );
  let previousPagePath = null;
  $: if (mainContent && previousPagePath !== $page.path) {
    drawerOpen = false;
    const top = window.location.hash
      ? document.querySelector(window.location.hash)?.offsetTop || 0
      : 0;
    mainContent.scrollTop = top;
    previousPagePath = $page.path;
  }

  onMount(setMiniWindow);

  function routesEqual(a, b) {
    return (
      (a.endsWith("/") ? a.slice(0, -1) : a) ===
      (b.endsWith("/") ? b.slice(0, -1) : b)
    );
  }

  function setMiniWindow() {
    if (typeof window !== "undefined") {
      miniWindow = window.innerWidth < 720;
    }
  }
</script>

<svelte:window on:resize={setMiniWindow} />
{#if iframe}
  <slot />
{:else}
  <TopAppBar variant="static" class="demo-top-app-bar">
    <Row>
      <Section>
        {#if miniWindow}
          <IconButton
            class="material-icons"
            on:click={() => (drawerOpen = !drawerOpen)}>menu</IconButton
          >
        {/if}
        <Title
          component={A}
          href="/"
          on:click={() => (activeSection = null)}
          class="mdc-theme--primary"
          style={miniWindow ? "padding-left: 0;" : ""}
        >
          {miniWindow ? "SMUI" : "Svelte Material UI"}
        </Title>
      </Section>
      <Section align="end" toolbar style="color: var(--mdc-on-surface, #000);">
        {#if activeSection}
          {#each activeSection.repos || [] as repo}
            <Wrapper>
              <IconButton href={repo} target="_blank">
                <Icon component={Svg} viewBox="0 0 24 24">
                  <path fill="currentColor" d={mdiFileDocument} />
                </Icon>
              </IconButton>
              <Tooltip>查看文档: {repo.split("/").slice(-1)[0]}</Tooltip>
            </Wrapper>
          {/each}
          {#if !activeSection.nosource}
            <Wrapper>
              <IconButton
                href={`https://github.com/hperrin/svelte-material-ui/blob/master/site/src/routes${activeSection.route}`}
                target="_blank"
              >
                <Icon component={Svg} viewBox="0 0 24 24">
                  <path fill="currentColor" d={mdiCodeTags} />
                </Icon>
              </IconButton>
              <Tooltip>查看源码目录</Tooltip>
            </Wrapper>
          {/if}
        {/if}
        {#if activeSection == undefined || activeSection.route == "/INSTALL.md/" || activeSection.route == "/THEMING.md/" || activeSection.route == "/MIGRATING.md/"}
          <Wrapper>
            <IconButton href="https://discord.gg/aFzmkrmg9P">
              <Icon component={Svg} viewBox="0 0 24 24">
                <path fill="currentColor" d={mdiDiscord} />
              </Icon>
            </IconButton>
            <Tooltip>加入 Discord Server</Tooltip>
          </Wrapper>
          <Wrapper>
            <IconButton href="https://twitter.com/SciActive">
              <Icon component={Svg} viewBox="0 0 24 24">
                <path fill="currentColor" d={mdiTwitter} />
              </Icon>
            </IconButton>
            <Tooltip>Hunter Perrin (SMUI 作者)的推特主页</Tooltip>
          </Wrapper>
        {/if}
        <Wrapper>
          <IconButton href="https://github.com/hperrin/svelte-material-ui">
            <Icon component={Svg} viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiGithub} />
            </Icon>
          </IconButton>
          <Tooltip>SMUI on GitHub</Tooltip>
        </Wrapper>
        <Wrapper>
          <IconButton
            toggle
            pressed={lightTheme}
            on:MDCIconButtonToggle:change={switchTheme}
          >
            <Icon component={Svg} viewBox="0 0 24 24" on>
              <path fill="currentColor" d={mdiWeatherNight} />
            </Icon>
            <Icon component={Svg} viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiWeatherSunny} />
            </Icon>
          </IconButton>
          <Tooltip>{lightTheme ? "切换暗色主题" : "切换亮色主题"}</Tooltip>
        </Wrapper>
        <Wrapper>
          <IconButton href="https://sveltematerialui.com" target="_blank">
            <Icon component={Svg} viewBox="0 0 24 24">
              <path fill="currentColor" d={mdiTranslate} />
            </Icon>
          </IconButton>
          <Tooltip>英文官网</Tooltip>
        </Wrapper>
      </Section>
    </Row>
  </TopAppBar>
  <div class="drawer-container">
    <Drawer
      variant={miniWindow ? "modal" : undefined}
      bind:open={drawerOpen}
      class="demo-drawer mdc-theme--secondary-bg {miniWindow
        ? 'demo-drawer-adjust'
        : 'hide-initial-small'}"
    >
      <Content>
        <List>
          {#each sections as section (section.name)}
            {#if section.separator}
              <Separator />
            {:else}
              <Item
                bind:this={section.component}
                nonInteractive={!("route" in section || "shortcut" in section)}
                href={"route" in section
                  ? section.route
                  : "shortcut" in section
                  ? section.shortcut
                  : null}
                activated={section === activeSection}
                style={section.indent
                  ? "margin-left: " + section.indent * 25 + "px;"
                  : ""}
              >
                <Text class="mdc-theme--on-secondary">{section.name}</Text>
              </Item>
            {/if}
          {/each}
        </List>
      </Content>
    </Drawer>

    {#if miniWindow}
      <Scrim />
    {/if}
    <AppContent class="demo-app-content">
      <main class="demo-main-content" bind:this={mainContent}>
        <slot />
      </main>
    </AppContent>
  </div>
{/if}

<style>
  @media (max-width: 720px) {
    :global(* > .hide-initial-small) {
      display: none;
    }
  }
</style>
