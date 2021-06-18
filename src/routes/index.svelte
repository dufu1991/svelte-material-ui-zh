<script>
  import {
    mdiMaterialDesign,
    mdiSass,
    mdiHuman,
    mdiGestureTap,
    mdiMonitorScreenshot,
    mdiPalette,
    mdiCommentArrowLeft,
    mdiAccountGroup,
    mdiRotateRightVariant,
    mdiClipboardCheck,
  } from "@mdi/js";
  import Paper, { Title, Content } from "@smui/paper";
  import List, {
    Item,
    Graphic,
    Text,
    PrimaryText,
    SecondaryText,
  } from "@smui/list";
  import { Icon } from "@smui/common";
  import Svg from "@smui/common/Svg.svelte";
</script>

<svelte:head>
  <title>Svelte Material UI 中文网 ｜ Svelte Material UI 中文文档</title>
</svelte:head>

<section>
  <div style="margin: 3em 0;">
    <h2 style="margin-bottom: 0;">Svelte Material UI</h2>
    <p class="mdc-typography--subtitle1">
      基于 <a href="https://svelte.dev" target="_blank">Svelte 3</a> 的
      <a href="https://material.io" target="_blank">Material</a> UI 组件库
    </p>
  </div>

  <div style="margin: 3em 0;">
    <div class="boxes">
      <Paper color="primary" class="box">
        <Title
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          <span>Svelte</span>
          <Icon
            component={Svg}
            style="width: 1em; height: auto;"
            viewBox="0 0 98.1 118"
          >
            <defs>
              <mask id="mask">
                <rect x="0" y="0" width="100%" height="100%" fill="#FFF" />
                <path
                  d="M40.9,103.9c-8.9,2.3-18.2-1.2-23.4-8.7c-3.2-4.4-4.4-9.9-3.5-15.3c0.2-0.9,0.4-1.7,0.6-2.6l0.5-1.6l1.4,1 c3.3,2.4,6.9,4.2,10.8,5.4l1,0.3l-0.1,1c-0.1,1.4,0.3,2.9,1.1,4.1c1.6,2.3,4.4,3.4,7.1,2.7c0.6-0.2,1.2-0.4,1.7-0.7L65.5,72 c1.4-0.9,2.3-2.2,2.6-3.8c0.3-1.6-0.1-3.3-1-4.6c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7l-10.5,6.7 c-1.7,1.1-3.6,1.9-5.6,2.4c-8.9,2.3-18.2-1.2-23.4-8.7c-3.1-4.4-4.4-9.9-3.4-15.3c0.9-5.2,4.1-9.9,8.6-12.7l27.5-17.5 c1.7-1.1,3.6-1.9,5.6-2.5c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.2,0.9-0.4,1.7-0.7,2.6l-0.5,1.6l-1.4-1 c-3.3-2.4-6.9-4.2-10.8-5.4l-1-0.3l0.1-1c0.1-1.4-0.3-2.9-1.1-4.1c-1.6-2.3-4.4-3.3-7.1-2.6c-0.6,0.2-1.2,0.4-1.7,0.7L32.4,46.1 c-1.4,0.9-2.3,2.2-2.6,3.8s0.1,3.3,1,4.6c1.6,2.3,4.4,3.3,7.1,2.6c0.6-0.2,1.2-0.4,1.7-0.7l10.5-6.7c1.7-1.1,3.6-1.9,5.6-2.5 c8.9-2.3,18.2,1.2,23.4,8.7c3.2,4.4,4.4,9.9,3.5,15.3c-0.9,5.2-4.1,9.9-8.6,12.7l-27.5,17.5C44.8,102.5,42.9,103.3,40.9,103.9"
                />
              </mask>
            </defs>
            <path
              mask="url(#mask)"
              fill="currentColor"
              d="M91.8,15.6C80.9-0.1,59.2-4.7,43.6,5.2L16.1,22.8C8.6,27.5,3.4,35.2,1.9,43.9c-1.3,7.3-0.2,14.8,3.3,21.3 c-2.4,3.6-4,7.6-4.7,11.8c-1.6,8.9,0.5,18.1,5.7,25.4c11,15.7,32.6,20.3,48.2,10.4l27.5-17.5c7.5-4.7,12.7-12.4,14.2-21.1 c1.3-7.3,0.2-14.8-3.3-21.3c2.4-3.6,4-7.6,4.7-11.8C99.2,32.1,97.1,22.9,91.8,15.6"
            />
          </Icon>
        </Title>
        <Content>
          SMUI 为各种界面元素提供基于 Svelte 的组件与操作。同时 SMUI
          还提供用于构建自定义和高级 UI 组件的辅助实用工具。
        </Content>
      </Paper>
      <Paper color="svelte-blue" class="box">
        <Title
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          <span>Material.io</span>
          <Icon
            component={Svg}
            style="width: 1em; height: auto;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiMaterialDesign} />
          </Icon>
        </Title>
        <Content>
          SMUI 基于 Google 出色的 <a
            style="color: #fff;"
            href="https://material.io/develop/web"
            target="_blank">Material Design Component for Web</a
          >。它使用
          <a
            style="color: #fff;"
            href="https://material.io/develop/web/guides/framework-integration"
            target="_blank">"Advanced Approach"</a
          > 集成这些组件，其中 Foundation 组件执行业务逻辑，SMUI 组件处理 DOM 更新和数据绑定。
        </Content>
      </Paper>
      <Paper color="secondary" class="box">
        <Title
          style="display: flex; justify-content: space-between; align-items: center;"
        >
          <span>Sass</span>
          <Icon
            component={Svg}
            style="width: 1em; height: auto;"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d={mdiSass} />
          </Icon>
        </Title>
        <Content>
          与 MDC 一样，SMUI 也是通过 Sass 设计的。 SMUI 支持 Material Design
          Components for Web 提供的所有 mixins，并提供了一些额外的有用的
          mixins。您只需使用几个变量即可自定义 UI 的外观。
        </Content>
      </Paper>
    </div>

    <div style="margin: 6em 0 3em;">
      <h4>SMUI 的特性与价值</h4>
    </div>

    <div style="margin: 3em 0;">
      <List
        twoLine
        nonInteractive
        style="border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));"
      >
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiHuman} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>可访问性</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI 会自动向组件添加适当的 ARIA
              属性，以提供屏幕阅读器的可访问性。 SMUI
              也完全可以通过键盘访问，这意味着行动不便的用户可以轻松使用 SMUI
              组件。
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiGestureTap} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>触控优化</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI 提供了更多的触摸方法，以方便在移动设备上使用，符合 Material
              规范对最小 48px * 48px 触摸目标的要求。
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiMonitorScreenshot} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>服务端渲染</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI
              可以在服务器上完全呈现，这意味着更快地进行第一次有意义的渲染。
              SMUI 完全支持 Sapper。事实上，您正在查看的站点是一个 Sapper
              应用程序。
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiPalette} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>完整主题</PrimaryText>
            <SecondaryText style="white-space: normal;">
              组件可以使用 MDC-Web 提供的 Sass
              变量进行主题化。从形状、颜色、密度、边界、交互状态等所有内容都可以进行主题化。
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiCommentArrowLeft} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>RTL 支持</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI 具有 RTL 感知能力，组件将调整其设计以适应用户的语言。
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiAccountGroup} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>使用广泛，更活跃的社区</PrimaryText>
            <SecondaryText style="white-space: normal;">
              现已拥有超过 <a
                href="https://github.com/hperrin/svelte-material-ui/network/dependents?package_id=UGFja2FnZS01NTM5MDg5MDQ"
                target="_blank">500 个使用 SMUI 组件的项目</a
              >，他们都是受欢迎的 Svelte UI
              库。这是毋庸置疑的。这些都是非常通用和适应性最强的 Svelte UI
              库，而且是有保证的。
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiRotateRightVariant} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>适应性强，用途广泛</PrimaryText>
            <SecondaryText style="white-space: normal;">
              SMUI 支持向每个组件以及其中的大多数内部元素添加任意属性和操作。
              SMUI 转发来自每个组件的所有事件，并支持事件修饰符，包括被动式的。
              SMUI 在 Svelte REPL 中工作，这意味着您 <a
                href="https://svelte.dev/repl/aa857c3bb5eb478cbe6b1fd6c6da522a?version=3.37.0"
                target="_blank">现在可以使用它</a
              >。
            </SecondaryText>
          </Text>
        </Item>
        <Item style="height: auto; min-height: 64px;">
          <Graphic style="height: auto; width: auto;">
            <Icon
              component={Svg}
              style="width: 40px; height: 40px;"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d={mdiClipboardCheck} />
            </Icon>
          </Graphic>
          <Text>
            <PrimaryText>符合 Material Design</PrimaryText>
            <SecondaryText style="white-space: normal;">
              每个 SMUI 组件都完全遵循 Material Design 规范。您可以使用 SMUI
              构建符合规范的 UI。
            </SecondaryText>
          </Text>
        </Item>
      </List>
    </div>
  </div>

  <div style="margin: 3em 0;">
    <p>
      [
      <a href="https://discord.gg/aFzmkrmg9P">Discord</a>
      |
      <a href="https://github.com/dufu1991/svelte-material-ui-zh">GitHub</a>
      |
      <a href="https://github.com/hperrin/svelte-material-ui/issues"
        >Issue Tracker</a
      >
      | &copy; 2021 dufu |
      <a href="https://beian.miit.gov.cn/" target="_blank"
        >滇ICP备17004037号-2</a
      >
      ]
    </p>
  </div>
</section>

<style>
  section {
    z-index: 0;
    padding: 48px 56px 36px;
    position: relative;
    overflow-x: hidden;
  }

  section::before {
    content: " ";
    z-index: -1;
    background-image: url("/logo.png");
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    display: block;
    position: absolute;
    right: calc(50% - 550px);
    top: -125px;
    opacity: 0.4;
    height: 496px;
    width: 496px;
  }

  .boxes {
    display: flex;
    margin: 0 -1em;
  }

  .boxes :global(.box) {
    margin: 1em;
    flex-grow: 1;
    flex-basis: 0;
  }

  @media (max-width: 460px) {
    section {
      padding: 16px;
    }

    section::before {
      opacity: 0.2;
      right: calc(50% - 300px);
      top: -35px;
      height: 276px;
      width: 276px;
    }

    .boxes {
      flex-direction: column;
    }
  }
</style>
