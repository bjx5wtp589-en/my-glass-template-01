# Apple Liquid Glass Next.js Template (Cloudflare Pages)

这是一个基于 Next.js 构建的 **Apple 液态玻璃（Liquid Glassmorphism）** 模板，已完美预置 Cloudflare Pages 部署支持。

## 🌟 特性
- **苹果液态玻璃 UI**：精细的 Backdrop Blur 毛玻璃特效与动态流光背景。
- **Cloudflare 原生适配**：集成了 `@cloudflare/next-on-pages` 与 `wrangler.toml` 配置文件。
- ** Edge 边缘节点运行**：极速响应，完全免费。

## 🚀 Cloudflare Pages 部署步骤
1. 解压并将本项目代码上传到你的 GitHub 仓库。
2. 打开 [Cloudflare 控制面板](https://dash.cloudflare.com/) -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**。
3. 选择你的仓库，框架预设选择 **Next.js**。
4. 构建命令填入：`npx @cloudflare/next-on-pages`
5. 构建输出目录填入：`.vercel/output/static`
6. 点击 **Save and Deploy** 即可完成全球部署！
