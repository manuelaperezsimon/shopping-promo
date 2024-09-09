import React from "react";
import Head from "next/head";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Doc Morris</title>
        <meta
          name="description"
          content="Tu Parafarmacia a Domicilio — Tus Productos de Cuidado al Mejor Precio. Descubre PromoFarma by DocMorris y ahorra. PromoFarma by DocMorris, tu Parafarmacia Online!"
        />
      </Head>
      <body className="font-inter">{children}</body>
    </html>
  );
}
