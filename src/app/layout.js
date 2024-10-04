
import "./globals.css";
import {Plus_Jakarta_Sans} from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const Fontjakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Fontjakarta.className}>
      <body>{children}</body>
    </html>
  )
}

// import { Inter } from 'next/font/google'
 
// // If loading a variable font, you don't need to specify the font weight
// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
// })
 
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={inter.className}>
//       <body>{children}</body>
//     </html>
//   )
// }