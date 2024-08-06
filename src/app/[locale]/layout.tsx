import { ThemeProvider } from '@/src/app/[locale]/components/ThemeProvider'
import type { Metadata } from 'next'
import {
  AbstractIntlMessages,
  NextIntlClientProvider,
  useMessages
} from 'next-intl'
import {Inter, Rubik, Source_Sans_3, Space_Grotesk} from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'
import { Header } from './components/header/Header'
import './globals.css'
import { Footer } from './components/footer/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--inter'
})
const rubik = Rubik({
  subsets: ['arabic'],
  variable: '--rubik'
})
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk'
})
const sourceSans3 = Source_Sans_3({
    subsets: ['latin'],
    variable: '--font-source-sans-3'
})
export const metadata: Metadata = {
  title: 'TFWA',
  description: 'Trade Facilitation West Africa',
}

export default function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = useMessages()
  return (
    <html
      lang={locale}
      dir={'ltr'}
      className={`${sourceSans3.className} ${rubik.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          enableSystem
          attribute='class'
          defaultTheme='light'
          themes={[
            'light',
            'dark',
          ]}
        >
          <NextIntlClientProvider
            locale={locale}
            messages={messages as AbstractIntlMessages}
          >
            <NextTopLoader
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              easing='ease'
              speed={200}
              shadow='0 0 10px #2299DD,0 0 5px #2299DD'
              color='var(--span-bg)'
              showSpinner={false}
            />
            <Header locale={locale} />
            <main className='mx-auto max-w-screen-2xl mt-20 md:mt-28 lg:mt-44'>{children}</main>
            <Footer/>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
