import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import Head from 'next/head';

const inter = Noto_Sans_KR({
  weight: ['400'],
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: 'Beauty Kim Blog',
  description: '한 번에 하나씩 기록합니다',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Head>
        <meta property='og:type' content='website'/>
        <meta property='og:site_name' content='Beauty Kim Blog'/>
        <meta property='og:title' content='Beauty Kim Blog'/>
        <meta property='og:description' content='한 번에 하나씩 기록합니다'/>
        <meta property='og:image' content='./darong.jpg'/>
        <meta property='og:url' content='https://beautykim.site'/>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
      </Head>
      <body className={inter.className}>
        <Header/>
          <main>
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  )
}
