import Head from 'next/head'
import HomePage from '@/components/Page/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Chris Tseng's Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&family=Noto+Serif+TC:wght@500&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='overflow-x-hidden'>
        <HomePage />
      </main>
    </>
  )
};
