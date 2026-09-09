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
  '如今正在尝试转型为懂 Agent 开发的全栈工程师……',
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
  { label: 'Email', value: 'tcdw2011@gmail.com', icon: 'ri:mail-fill' },
  { label: 'Telegram', value: 'tcdwww', icon: 'simple-icons:telegram' },
];

/** 互联网身份 */
export const identities = [
  { label: 'GitHub', value: '@tcdw', href: 'https://github.com/tcdw', icon: 'simple-icons:github' },
  { label: 'X', value: '@tcdwww', href: 'https://x.com/tcdwww', icon: 'simple-icons:x' },
  { label: 'YouTube', value: '@tcdwww', href: 'https://youtube.com/@tcdwww', icon: 'simple-icons:youtube' },
  { label: 'Bluesky', value: '@tcdw.net', href: 'https://bsky.app/profile/tcdw.net', icon: 'simple-icons:bluesky' },
  { label: 'Blog', value: 'www.tcdw.net', href: 'https://www.tcdw.net/', icon: 'ri:global-line' },
];

export interface Profile {
  title: string;
  url?: string;
  kind: string;
  summary: string;
  detail: string;
}

/** 最近在做什么 */
export const projects: Profile[] = [
  {
    title: '塑料碗',
    url: 'https://github.com/tcdw/plastic-wan',
    kind: 'Telegram / Agent',
    summary: '跑在 Telegram 私聊、群组和 Forum Topic 里的 Agent Bot。',
    detail:
      '按固定时间窗口把消息聚成 bucket，构造受限上下文，让模型自己决定要不要开口。所有副作用必须走显式 Tool Call。基于 Bun + Pi Agent Framework + 自制调度引擎。',
  },
  {
    title: '雪乃碗 / Yukino Wan',
    url: 'https://yukinowan.com',
    kind: '人设 / 生成式 AI',
    summary: '27 岁（外观 22 岁）、165cm 的白毛高马尾 IT 工程师，橙色连帽衫配黑色高领。',
    detail:
      '废萌外表下是硬核从业者，信奉高可用与极简，爱好是 Homelab、开源大模型和坐火车。围绕她有一整套 AI 生图工作流、GUI 工具，以及贴纸站。',
  },
  {
    title: 'Bilisound',
    url: 'https://bilisound.com',
    kind: 'App / React Native',
    summary: '基于 React Native (Expo) 的 Bilisound 移动客户端。',
    detail: '支持 Android 7.1+ / iOS 17+，适配折叠屏与平板，有合集、歌单与后台播放。。',
  },
  {
    title: 'AI Coding / Agent Harness',
    kind: '长期探索',
    summary: '从 AI 辅助编程一路折腾到 Vibe Coding，还在继续。',
    detail:
      '长期探索 Coding Agent、Vibe Coding 与 AI 编程，关注的不只是「让 AI 写代码」，也在持续实践 Harness、Skills、上下文工程以及人与 Agent 的协作方式。\n',
  },
];

/** 技术方向 */
export const stack = [
  { group: '日常主力', items: ['TypeScript', 'React', 'React Native / Expo', 'Node.js / Bun'] },
  { group: 'AI 方向', items: ['AI Agent', 'LLM Harness', '生成式 AI'] },
  { group: '辅助方向', items: ['Astro', 'Backend', 'Infra', 'Self-hosting'] },
];
