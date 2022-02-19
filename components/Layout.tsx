import React from 'react';
import Head from 'next/head';
import Container from './Container';
import Footer from './Footer';
import Nav from './Nav';
import script from 'next/script';

import styles from '@styles/Home.module.css';

type LayoutProps = {
  children?: React.ReactNode;
  title?: string;
};

const Layout: React.FC<LayoutProps> = ({ title = 'Parthiv', children }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="author" content="Parthiv" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Parthiv" />
        <meta property="og:description" content="I'm a student.." />
        <meta property="og:type" content="website" />

        <>
          <script src="https://www.googletagmanager.com/gtag/js?id=G-DYEYJQYHPP" />
          <script id="google-analytics">
            {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-DYEYJQYHPP');`}
          </script>
        </>

        <meta
          httpEquiv="refresh"
          content="0; url=https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        ></meta>
        <script>
          {`window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";`}
        </script>
      </Head>
      <Nav
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
      />
      <Container justifyContent="space-between" alignContent="space-between">
        {!isOpen && <main className={styles.main}>{children}</main>}
        <Footer />
      </Container>
    </div>
  );
};

export default Layout;
