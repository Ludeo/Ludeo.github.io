import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { prefix } from '../components/prefix.js';

export default function Mari() {
  return (
    <div>
      <Head>
        <title>Mari Shop</title>
        <link rel='icon' href={`${prefix}/favicon.ico`} />
      </Head>
      <Navbar />
      <div>Mari Shop</div>
      <div>

      </div>
    </div>
  );
}
