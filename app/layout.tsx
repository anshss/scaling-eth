import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  EthersExtension,
  DynamicContextProvider,
  EthereumWalletConnectors,
} from "../lib/dynamic";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DynamicContextProvider
        settings={{
          environmentId: "03e970fe-bc9e-46e8-851c-10cc77b16dca",
          walletConnectors: [EthereumWalletConnectors],
          walletConnectorExtensions: [EthersExtension],
        }}
      >
        <body className={inter.className}>{children}</body>
      </DynamicContextProvider>
    </html>
  );
}
