# Astro Starter Kit: Minimal

```sh
pnpm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 「5 分钟了解 tcdw」页面

一页式个人介绍，桌面端 / 打印版是一张 A4 横向（297mm × 210mm）的 profile sheet，
窄屏重排为单栏。

- 内容全部集中在 `src/data/profile.ts`（资料来自博客仓库与 GitHub，文件顶部有来源说明），以「待补充」开头的字符串会以浅色占位样式渲染，
  直接替换文字即可，无需改动模板。
- 图标：`astro-icon`，两套图标集按角色分工——品牌 mark 用 Simple Icons（`simple-icons:github`），
  通用 UI 图标用 Remix Icon（`ri:mail-line`）。图标名写在 `profile.ts` 的 `icon` 字段里，
  模板用 `<Icon name={row.icon} class="size-[1.15em]" />` 渲染，跟着字号缩放。换图标只改数据文件。
- 头像：`public/avatar.png`（从博客仓库 `src/assets/avatar.png` 复制并缩放到 512px）。
  换头像就替换这个文件，或改 `profile.avatar` 指向别的路径。
- 打印：页面右下角的「打印 / PDF」按钮，或浏览器打印。`@page` 已固定为 A4 横向、零边距，
  记得在打印对话框里勾选「背景图形」。
- 布局约定：`sheet:` 这个 Tailwind 自定义 variant 同时覆盖「宽屏」和「打印」两种场景
  （见 `src/styles/global.css`），所以打印时不会意外落回移动端单栏布局。
- 字号与部分尺寸走 CSS 变量（`--fs-*`、`--pad-y` 等），在 `src/styles/global.css` 里分
  「移动端 / 宽屏 / 打印」三套取值：屏幕上是正常阅读字号，只有打印时才收紧到能塞进一张 A4。
  想调排版密度改那里就够了。
- 单位约定：毫米只出现在 `--sheet-w` / `--sheet-h`（= A4 横向）和 `@page` 里，A4 只是一个
  「容器大小」。版心内部一律用 px，尽量落在 Tailwind 的间距刻度上（`px-10`、`gap-6`……），
  别再往模板里写 `mm`。
- 打印版是严格的一页，内容高度上限就是 `--sheet-h`；写内容时留意别把某个 section 撑得太长。

## 代码风格

用 Biome（配置从 plasticwan 抄来，`biome.json`）：

```
pnpm lint       # biome check .  —— lint + format + import 整理，只检查
pnpm lint:fix   # biome check --write .  —— 应用安全修复
```

两个和 Astro 有关的配置要点：

- `css.parser.tailwindDirectives: true`。否则 `global.css` 里的 `@custom-variant`
  会被当成语法错误，整个文件跳过格式化。
- `overrides` 里对 `**/*.astro` 关掉了 `noUnusedImports` 和 `noUnusedVariables`。
  Biome 只解析 `.astro` 的 frontmatter，看不到下面的模板，所以只在模板里用到的
  import 和变量会被误判为「未使用」——开着的话 `--write --unsafe` 会直接把它们删掉。

Biome 只格式化 `.astro` 的 frontmatter，模板部分不动。`public/` 是静态资源，已排除。
