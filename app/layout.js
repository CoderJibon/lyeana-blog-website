import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header.jsx";
import AuthContextProvider from "@/context/AuthContext/AuthContextProvider.jsx";
import CategoryContextProvider from "@/context/CategoryContext/CategoryContextProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthContextProvider>
          <CategoryContextProvider>
            <ToastContainer />
            <Header />
            {children}
          </CategoryContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
