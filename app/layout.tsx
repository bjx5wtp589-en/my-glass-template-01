import './globals.css'
import type { Metadata } from 'next'

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Apple Liquid Glass Template (Cloudflare)',
  description: 'Built with Next.js, Apple Liquid Glass UI, and Cloudflare Pages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen relative">{children}</body>
    </html>
  )
}
