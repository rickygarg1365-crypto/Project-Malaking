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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        
        {/* Preload critical hero images */}
        <link rel="preload" as="image" href="/assets/images/Grand Opening.jpg" />
        <link rel="preload" as="image" href="/assets/images/Uniform.jpg" />
        <link rel="preload" as="image" href="/assets/images/Fresh Ingredients.jpg" />
        <link rel="preload" as="image" href="/assets/images/Table.jpg" />
        <link rel="preload" as="image" href="/assets/images/Checkout Area.jpg" />
        <link rel="preload" as="image" href="/assets/images/Seating Area.jpg" />
        <link rel="preload" as="image" href="/assets/images/Drinks section.jpg" />
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
