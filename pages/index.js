import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { prefix } from '../components/prefix.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href={`${prefix}/favicon.ico`} />
      </Head>
      <Navbar />
      <div>Home page</div>
    </div>
  );
}
