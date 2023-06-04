"use client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { createContext, useEffect, useState } from "react";
import { fetchGeneralSettings } from "@/services/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient = new QueryClient();
export const AppContext = createContext(null);

export default function RootLayout({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchGlobalSettings = async () => {
    setLoading(true);
    const response = await fetchGeneralSettings();
    const globalSettings = await response.data.data;
    setSettings(globalSettings);
    setLoading(false);
  };

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cart")));
    fetchGlobalSettings();
  }, []);

  const values = {
    cartItems,
    setCartItems,
    settings,
  };

  return (
    <html lang="en">
      <body className={`${inter.className} mt-32`}>
        <AppContext.Provider value={values}>
          <QueryClientProvider client={queryClient}>
            <Header />
            {children}
            <Footer />
          </QueryClientProvider>
        </AppContext.Provider>
      </body>
    </html>
  );
}
