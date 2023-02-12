import React, { ReactNode } from 'react';
import Header from './Header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className='p-4 pb-16'>{children}</main>
    </>
  );
}
