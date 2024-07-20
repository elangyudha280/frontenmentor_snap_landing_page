import { Epilogue } from "next/font/google";
import Head from "next/head";
import "./globals.css";
const epilogue = Epilogue({ 
  subsets: ["latin"],
  weight:['400','500','600','700']
});

export const metadata = {
  title: "Snap Landing Page",
  description: "Snap Landing Page challange frontend mentor",
 
  icons: {
    icon: '/favicon2.ico',
    apple: '/favicon2.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={epilogue.className}>{children}</body>
    </html>
  );
}
