import React, { ReactNode } from 'react';
import Header from './Header';
import { useRouter } from 'next/router';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <>
      {router.asPath !== '/' && <Header />}
      <main className="p-4 pb-16">{children}</main>
    </>
  );
}
