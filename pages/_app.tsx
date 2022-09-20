import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import React from 'react';
import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient, withPageAuth } from '@supabase/auth-helpers-nextjs';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  )
}

export default MyApp;

export const getServerSideProps = withPageAuth({
  redirectTo: '/login',
});
