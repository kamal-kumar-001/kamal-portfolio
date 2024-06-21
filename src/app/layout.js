import { Inter } from "next/font/google";
import "./globals.css";
import "./index.css";
import NextTopLoader from 'nextjs-toploader';
import ParticlesBackrgound from './components/ParticlesBackrgound';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kamal",
  description: "Web Developer Portfolio Website", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader
          color="#fff"
          initialPosition={0.08}
          height={2}
          easing="ease"
        />
        <ParticlesBackrgound>
      {children}
    </ParticlesBackrgound>

        </body>
    </html>
  );
}
