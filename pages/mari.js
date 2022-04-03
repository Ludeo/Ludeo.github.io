import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { prefix } from '../components/prefix.js';

export default function Mari() {
  var test = 'n/a';

  if (typeof window !== "undefined") {
    test = window.localStorage.getItem('hPouchS');
  }
  
  return (
    <div>
      <Head>
        <title>Mari Shop</title>
        <link rel='icon' href={`${prefix}/favicon.ico`} />
      </Head>
      <Navbar />
      <div>Mari Shop</div>
    </div>
  );
}
