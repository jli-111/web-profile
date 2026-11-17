// 日常维护：品牌名称、导航、服务介绍和合作步骤集中在这里修改。
export const brand = {
  name: 'NOVA',
  chineseName: '远见',
  tagline: '让好品牌，被更多人看见。',
  demoNotice: '品牌官网概念示例 · 公司名称、服务内容与联系方式待替换',
};
export const navigation = [
  { id: 'about', label: '关于我们' },
  { id: 'services', label: '我们的服务' },
  { id: 'approach', label: '合作方式' },
];
export const services = [
  {
    title: '品牌策略',
    en: 'BRAND STRATEGY',
    lead: '找到你的独特，建立品牌的长期价值。',
    text: '从商业目标出发，梳理品牌定位、价值主张与表达方式，让每一次沟通都有清晰的方向。',
    tags: ['品牌定位', '视觉识别', '品牌叙事'],
    num: '01',
  },
  {
    title: '数字体验',
    en: 'DIGITAL EXPERIENCE',
    lead: '让每一次点击，都更靠近你的品牌。',
    text: '将品牌语言融入官网与数字触点，兼顾内容、视觉与交互，为访客提供清晰而自然的探索路径。',
    tags: ['企业官网', '交互设计', '内容体验'],
    num: '02',
  },
  {
    title: '增长营销',
    en: 'GROWTH MARKETING',
    lead: '连接合适的人，让品牌持续生长。',
    text: '围绕目标受众规划内容与传播，建立从认识品牌到发起咨询的完整路径，用反馈持续优化。',
    tags: ['内容策略', '营销活动', '转化优化'],
    num: '03',
  },
];
export const processSteps = [
  ['发现', '倾听你的目标，理解业务、受众与挑战，找到真正值得解决的问题。'],
  ['共创', '一起明确方向，将策略转化为可讨论、可体验的设计与内容。'],
  ['落地', '打磨细节，让品牌在真实的数字触点中完整呈现。'],
  ['进化', '围绕反馈持续复盘，让每一次迭代都更接近目标。'],
].map(([title, description]) => ({ title, description }));
