/**
 * 页面内容数据。
 *
 * 资料来源（2026-09-06 整理）：
 * - 博客 https://www.tcdw.net/ 首页自我介绍、关于页、src/data/facts.ts
 * - GitHub https://github.com/tcdw （bio、pinned 仓库、仓库描述）
 * - 各项目仓库自身的说明（plastic-wan/AGENTS.md、bilisound README、yukinowan.com/about）
 *
 * 约定：
 * - 以「待补充」开头的字符串是明显的占位内容，页面上会用浅色渲染，
 *   直接替换成真实文字即可。
 * - 没有确认过的字段（联系方式、现居城市等）一律保持占位，不要用猜测填充。
 */

export const profile = {
  name: 'tcdw',
  alias: '碗',
  kicker: '5 分钟了解',
  // 博客首页自述
  tagline: '小透明前端（Web / 移动端）开发者，React Native (Expo) 用户',
  // GitHub bio
  motto: '面向咕咕编程 (Pigeon-oriented programming)',
  // 从博客仓库 src/assets/avatar.png 复制并缩放而来
  avatar: '/avatar.png' as string | null,
  updatedAt: '2026-09-07',
  site: 'im.tcdw.net',
};

/** 我是谁 */
export const about = [
  '写 Web 前端，也写 React Native (Expo) 移动端。博客「吐槽大王部落格」建于 2012 年，一路写到现在。',
  '喜欢观察城市、喜欢工业之美。是普通人，希望与你交朋友！',
  '这两年重心慢慢移到了生成式 AI 与 Agent 上：自己写 Telegram Agent、养一个人设，也在持续折腾 AI Coding 工具链。',
];

/** 现在（sidebar 顶部的短状态） */
export const now = [
  // 博客首页现在写的是「~~在北京当社畜。~~失业中。」，最新一篇文章也是在聊求职
  { label: '状态', value: '失业中，正在找新的机会' },
  // 博客上「北京」已划掉，GitHub 只写了 China，先留空
  { label: '坐标', value: '北京' },
  { label: '喜欢', value: 'Homelab、轨道交通、城市摄影' },
];

/** 联系方式：没有在公开渠道确认过的一律留占位，不要猜 */
export const contacts = [
  { label: 'Email', value: 'tcdw2011@gmail.com' },
  { label: 'Telegram', value: 'tcdwww' },
];

/** 互联网身份 */
export const identities = [
  { label: 'GitHub', value: '@tcdw', href: 'https://github.com/tcdw' },
  { label: 'X', value: '@tcdwww', href: 'https://x.com/tcdwww' },
  { label: 'YouTube', value: '@tcdwww', href: 'https://youtube.com/@tcdwww' },
  { label: 'Bluesky', value: 'tcdw.net', href: 'https://bsky.app/profile/tcdw.net' },
  { label: 'Blog', value: 'www.tcdw.net', href: 'https://www.tcdw.net/' },
];

/** 最近在做什么 */
export const projects = [
  {
    title: '塑料碗',
    kind: 'Telegram / Agent',
    summary: '跑在 Telegram 私聊、群组和 Forum Topic 里的 Agent Bot。',
    detail:
      '按固定时间窗口把消息聚成 bucket，构造受限上下文，让模型自己决定要不要开口——私聊积极、群聊克制。所有副作用必须走显式 Tool Call。Bun + TypeScript。',
  },
  {
    title: '雪乃碗 / Yukino Wan',
    kind: '人设 / 生成式 AI',
    summary: '27 岁（外观 22 岁）、165cm 的白毛高马尾 IT 工程师，橙色连帽衫配黑色高领。',
    detail:
      '废萌外表下是硬核从业者，信奉高可用与极简，爱好是 Homelab、开源大模型和坐火车。围绕她有一整套 AI 生图工作流、GUI 工具，以及贴纸站 yukinowan.com。',
  },
  {
    title: 'Bilisound',
    kind: 'App / React Native',
    summary: '基于 React Native (Expo) 的 Bilisound 移动客户端。',
    detail: '支持 Android 7.1+ / iOS 17+，适配折叠屏与平板，有合集、歌单与后台播放。项目主页 app.bilisound.com。',
  },
  {
    title: 'AI Coding / Agent Harness',
    kind: '长期探索',
    summary: '从「AI 辅助编程」一路折腾到 Vibe Coding，还在继续。',
    detail:
      '顺手做了 opencode-profile（多 Profile 切换）、mini-ai-gateway（自家云上的 AI Gateway）这类自用小工具，也关心上下文构造与工具边界怎么划。',
  },
];

/** 技术方向 */
export const stack = [
  { group: '日常主力', items: ['TypeScript', 'React', 'React Native / Expo', 'Node.js / Bun'] },
  { group: 'AI 方向', items: ['AI Agent', 'LLM Harness', '生成式 AI'] },
  { group: '辅助方向', items: ['Astro', 'Backend', 'Infra', 'Self-hosting'] },
];

/** 适合和我聊的话题（从上面的项目、博客与兴趣推导，可自行增删改） */
export const topics = [
  '怎么让群聊里的 Agent 学会「克制地」开口',
  'React Native / Expo 的实际开发体验与踩坑',
  '从 AI 辅助编程到 Vibe Coding 的心态转变',
  '用生成式 AI 养一个有一致性的人设',
  'Homelab、二手硬件与自建服务',
  '游戏 OST、SNES 音乐与 16-bit 编曲',
];

/** 其他个人信息 */
export const misc = [
  { label: '也做过', value: 'koi（Astro 博客模板）、Minecraft 文本编辑器、碗橱 CMS' },
  { label: '生活', value: '咖啡店探店、城市与铁道摄影、《蔚蓝档案》谷子' },
  { label: '音乐', value: '常听 J-Pop，偶尔把游戏 OST 做成 16-bit 编曲' },
];
