import Head from 'next/head';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { Navbar } from '../ui/Navbar';

interface Props {
  children: ReactNode;
  title: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Paco" />
        <meta name="description" content="Info sobre pokemon" />
        <meta name="keywords" content="Pokemon, pokedex" />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0px 20px',
        }}>
        {children}
      </main>
    </>
  );
};
