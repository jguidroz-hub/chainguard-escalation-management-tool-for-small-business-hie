import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChainGuard - Escalation management tool for small business hierarchies',
  description: 'Value Proposition: Prevents employees from bypassing line managers by creating structured communication channels that route issues appropriately, protecting manager time while ensuring proper workflow in small businesses.

Target Customer: Small business owners and managers in hospitality, retail, and service industries with 10-100 employees

---
Category: Micro-SaaS
Target Market: Small business owners and managers in hospitality, retail, and service industries with 10-100 employees
Source Hypothesis ID: 6a9ed65a-a1a8-4a31-a1cc-b3575dd38949
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">ChainGuard - Escalation management tool for small business hierarchies</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
