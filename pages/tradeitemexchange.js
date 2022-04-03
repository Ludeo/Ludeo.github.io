import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { prefix } from '../components/prefix.js';

export default function TradeItemExchange() {
  return (
    <div>
      <Head>
        <title>Trade Item Exchange</title>
        <link rel='icon' href={`${prefix}/favicon.ico`} />
      </Head>
      <Navbar />
      <div>Trade Item Exchange</div>
    </div>
  );
}
