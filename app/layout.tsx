import './globals.css';
import Image from 'next/image';
import SocialBar from '@/components/SocialBar';

export const metadata = { title:'Battle of Wallets', description:'Status competition, not a lottery.' };

export default function RootLayout({ children }:{ children:React.ReactNode }){
  return <html lang="en"><body>
    <div className="container">
      <header><Image src="/logo.svg" width={200} height={40} alt="logo"/><SocialBar/></header>
      {children}
      <footer>© {new Date().getFullYear()} Battle of Wallets</footer>
    </div>
  </body></html>;
}
