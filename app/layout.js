import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LoadingProvider from '../components/LoadingProvider'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata = {
  title: 'Malaking Hotpot - Weigh to Pay, Made Your Way',
  description: 'Discover Surrey\'s newest and most exciting hot pot destination! At Mala King Hot Pot, you choose fresh meats, seafood, vegetables, and noodles from our wide selection.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        
        {/* DNS prefetch for faster connections */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preload critical hero images with higher priority */}
        <link rel="preload" as="image" href="/assets/images/Grand Opening.jpg" fetchpriority="high" />
        <link rel="preload" as="image" href="/assets/images/Uniform.jpg" fetchpriority="high" />
        <link rel="preload" as="image" href="/assets/images/Fresh Ingredients.jpg" fetchpriority="high" />
        <link rel="preload" as="image" href="/assets/images/Table.jpg" fetchpriority="high" />
        <link rel="preload" as="image" href="/assets/images/Checkout Area.jpg" fetchpriority="high" />
        <link rel="preload" as="image" href="/assets/images/Seating Area.jpg" fetchpriority="high" />
        <link rel="preload" as="image" href="/assets/images/Drinks section.jpg" fetchpriority="high" />
        <link rel="preload" as="image" href="/assets/images/Counter.jpg" fetchpriority="high" />
        <link rel="preload" as="image" href="/assets/images/Sauce Bar.jpg" fetchpriority="high" />
      </head>
      <body className={poppins.className}>
        <LoadingProvider>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  )
}
