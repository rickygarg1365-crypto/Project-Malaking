import './globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


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
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="msapplication-TileImage" content="/icons/icon-192x192.png" />
        <meta name="msapplication-TileColor" content="#B32E1D" />
        
        {/* PWA Meta Tags */}
        <meta name="application-name" content="Mala King Hot Pot" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mala King" />
        <meta name="description" content="Discover Surrey's newest and most exciting hot pot destination! Authentic hot pot experience with premium ingredients and signature broths." />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#B32E1D" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#B32E1D" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://malakinghotpot.ca/" />
        <meta property="og:title" content="Mala King Hot Pot - Weigh to Pay, Made Your Way" />
        <meta property="og:description" content="Discover Surrey's newest and most exciting hot pot destination! Authentic hot pot experience with premium ingredients and signature broths." />
        <meta property="og:image" content="/icons/icon-512x512.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://malakinghotpot.ca/" />
        <meta property="twitter:title" content="Mala King Hot Pot - Weigh to Pay, Made Your Way" />
        <meta property="twitter:description" content="Discover Surrey's newest and most exciting hot pot destination! Authentic hot pot experience with premium ingredients and signature broths." />
        <meta property="twitter:image" content="/icons/icon-512x512.png" />
        
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
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
