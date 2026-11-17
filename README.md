# NOVA 企业营销官网

使用 React + Vite 的单页营销网站。源码按职责拆分，JSX、CSS、JSON 均使用 Prettier 统一换行和缩进。
当前公司名称和业务内容为示例，咨询表单只进行本地校验，不发送或保存数据。

## 开始开发

建议使用 Node.js 22 LTS 或更新的受支持版本。

```bash
npm ci
npm run dev
```

打开终端显示的本地地址。修改源码并保存后，浏览器自动更新。

## 目录说明

```text
company-website/
├── public/
│   └── images/             # Logo、团队照片等静态图片
├── src/
│   ├── main.jsx            # React 挂载入口与全局样式导入
│   ├── App.jsx             # 页面区块的排列顺序
│   ├── components/         # 通用组件及独立交互
│   │   ├── Header.jsx      # 桌面导航与手机菜单
│   │   ├── Footer.jsx      # 页脚
│   │   ├── Logo.jsx        # 复用品牌标识
│   │   └── ContactForm.jsx # 咨询表单、校验与演示提示
│   ├── sections/           # 首页各个内容区块
│   │   ├── Hero.jsx        # 首屏文案与视觉
│   │   ├── BrandStrip.jsx  # 品牌横条
│   │   ├── About.jsx       # 公司介绍
│   │   ├── Services.jsx    # 服务选项卡
│   │   ├── Approach.jsx    # 合作流程
│   │   └── Contact.jsx     # 联系区域
│   ├── data/
│   │   └── content.js      # 品牌、导航、服务、流程数据
│   └── styles/
│       ├── index.css      # 样式导入顺序
│       ├── base.css       # 字体、基础规则
│       ├── sections.css   # 组件与页面样式
│       └── responsive.css # 平板、手机及减少动态效果设置
├── index.html             # 网页标题、SEO 描述、语言
├── package.json           # 依赖与运行命令
├── package-lock.json      # 锁定依赖版本，需提交版本控制
├── .editorconfig          # 编辑器统一两空格缩进
├── .prettierrc.json        # 格式化规则
└── .openai/hosting.json    # 现有 Sites 部署配置
```

## 常见维护任务

| 你想修改                         | 修改位置                                  |
| -------------------------------- | ----------------------------------------- |
| 品牌名称、顶部示例提示、页脚口号 | `src/data/content.js` 中的 `brand`        |
| 导航文字和锚点                   | `src/data/content.js` 中的 `navigation`   |
| 服务标题、描述、标签             | `src/data/content.js` 中的 `services`     |
| 合作步骤                         | `src/data/content.js` 中的 `processSteps` |
| 首屏标题、副标题、按钮文案       | `src/sections/Hero.jsx`                   |
| 公司介绍                         | `src/sections/About.jsx`                  |
| 联系区标题和介绍                 | `src/sections/Contact.jsx`                |
| 表单字段与提交逻辑               | `src/components/ContactForm.jsx`          |
| 配色、间距、字体大小             | `src/styles/sections.css` 和 `base.css`   |
| 手机和平板布局                   | `src/styles/responsive.css`               |
| 浏览器标签标题、搜索描述         | 根目录 `index.html`                       |
| 首页区块的顺序                   | `src/App.jsx`                             |

例如，修改 `content.js` 中 `brand.name` 和 `brand.chineseName`，导航及页脚 Logo 会同步更新。标题、正文中单独出现的品牌名仍需在对应区块修改。

要添加新区块：在 `src/sections/` 创建组件，在 `App.jsx` 导入并插入所需位置；如需要导航入口，再为区块添加 `id` 并更新 `navigation`。

图片放入 `public/images/` 后，通过 `<img src="/images/team.jpg" alt="团队合照" />` 引用。当前首屏是 CSS 绘制的抽象图形，无需图片文件。

## 格式化与构建

```bash
npm run format        # 自动统一缩进和换行
npm run format:check  # 检查格式
npm run build         # 生成 dist/ 生产文件
npm run preview       # 本地预览生产构建
```

建议在 VS Code 中安装 Prettier 扩展并启用保存时格式化。编辑 `src/`，不要编辑自动生成的 `dist/` 或 `node_modules/`。

## 表单接入与部署

`ContactForm.jsx` 的 `handleSubmit` 当前只切换演示提示。接入真实业务时，在这里调用你的表单 API，并添加提交中、成功和失败状态；不要把邮件密码、API 密钥放在前端代码中。

`npm run build` 生成的 `dist/` 可部署到支持静态网站的服务器。`.openai/hosting.json` 是原有 Sites 站点标识，使用原站点时保留；迁移到其他托管服务不需要它。

正式营销前请替换示例公司资料与 SEO 文案，配置真实咨询接收方式。字体目前通过 Google Fonts 加载，无法加载时会使用系统 sans-serif 字体。
