import Link from 'next/link';
import { Sparkles, Layers, ArrowRight, Github, Cloud } from 'lucide-react';

export const runtime = 'edge';

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center p-6 md:p-24 overflow-hidden">
      {/* 动态背景光晕（苹果液态光影效果） */}
      <div className="blob w-[500px] h-[500px] bg-purple-600 top-[-10%] left-[-10%] animate-pulse"></div>
      <div className="blob w-[600px] h-[600px] bg-blue-600 bottom-[-10%] right-[-10%] delay-1000"></div>
      <div className="blob w-[400px] h-[400px] bg-cyan-500 top-[30%] right-[20%] delay-500"></div>

      {/* 顶栏标签 */}
      <div className="absolute top-6 left-6 md:left-12 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping"></div>
        <span className="text-xs tracking-wider uppercase text-white/70 font-medium">Apple Liquid Glass x Cloudflare</span>
      </div>

      {/* 核心玻璃面板容器 */}
      <div className="glass-panel w-full max-w-4xl p-8 md:p-12 rounded-[32px] relative z-10 flex flex-col items-center text-center">
        
        {/* 图标徽章 */}
        <div className="w-16 h-16 rounded-2xl glass-button flex items-center justify-center mb-6 text-amber-300">
          <Cloud className="w-8 h-8" />
        </div>

        {/* 标题 */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent">
          液态玻璃美学 <br />
          <span className="text-amber-400">Cloudflare Pages 边缘计算</span>
        </h1>

        <p className="text-base md:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed">
          融合 Apple Vision Pro 与 iOS 18 毛玻璃视觉特效，已全面适配 Cloudflare Pages 边缘网络，全免费、超快响应。
        </p>

        {/* 按钮组 */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a 
            href="https://dash.cloudflare.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-button px-8 py-4 rounded-2xl text-white font-medium flex items-center justify-center gap-3 group"
          >
            <Cloud className="w-5 h-5 text-amber-300 fill-amber-300" />
            <span>部署到 Cloudflare Pages</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-button px-8 py-4 rounded-2xl text-white/90 font-medium flex items-center justify-center gap-3 bg-white/[0.02]"
          >
            <Github className="w-5 h-5" />
            <span>查看 GitHub 源码</span>
          </a>
        </div>

        {/* 特性列表 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-16 pt-12 border-t border-white/10 text-left">
          <div className="glass-panel p-6 rounded-2xl bg-white/[0.02]">
            <div className="w-10 h-10 rounded-xl glass-button flex items-center justify-center mb-4 text-purple-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-2">毛玻璃折射</h3>
            <p className="text-sm text-white/60">深度集成 backdrop-filter blur 与精细高光边界。</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl bg-white/[0.02]">
            <div className="w-10 h-10 rounded-xl glass-button flex items-center justify-center mb-4 text-amber-400">
              <Cloud className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-2">Cloudflare 适配</h3>
            <p className="text-sm text-white/60">预置 next-on-pages 与 Edge 运行时配置，零门槛部署。</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl bg-white/[0.02]">
            <div className="w-10 h-10 rounded-xl glass-button flex items-center justify-center mb-4 text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-2">全球免费加速</h3>
            <p className="text-sm text-white/60">部署至 Cloudflare 全球 CDN 边缘节点，极致加载速度。</p>
          </div>
        </div>

      </div>

      {/* 页脚版权 */}
      <footer className="absolute bottom-6 text-xs text-white/40 z-10">
        Powered by Next.js, Apple Liquid Glass & Cloudflare Pages
      </footer>
    </main>
  );
}
