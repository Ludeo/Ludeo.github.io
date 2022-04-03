import Head from 'next/head';

export default function Mari() {
  var test = 'n/a';

  if (typeof window !== "undefined") {
    test = window.localStorage.getItem('hPouchS');
  }
  
  return (
    <div>
      <Head>
        <title>Mari Shop </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <p>Mari Shop</p>
        <br/>
        <p>{test}</p>
      </div>
    </div>
  );
}
