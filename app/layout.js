// "use client"; // Bu satırı kaldırın

import React from "react";
import Header from "@/components/Header";
import './globals.css';
import Providers from "./Providers";
import Tabs from "@/components/Tabs";
import ScrollProgress from "@/components/ScrollProgress";

export const metadata = {
    title: 'BLOG',
    description: 'This is the global description for Blog',
    keywords: 'blog, app, entertainment',
};

const Layout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Providers>
                    <Header />
                    <ScrollProgress/>
                    <Tabs/>
                    {children}
                </Providers>
            </body>
        </html>
    );
}

export default Layout;
