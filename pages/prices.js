import Head from 'next/head';

export default function Prices() {
    var hPouchS = '100';
    if (typeof window !== "undefined") {
        hPouchS = window.localStorage.getItem('hPouchS');
      }
  return (
    <div>
      <Head>
        <title>Prices</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>Prices</div>
      <div>
            <p>Honing Materials</p><br/>
            <p>Harmony Shard Pouch (S)</p>
            <input type='text' id='hPouchS' defaultValue={hPouchS} />
            <button type='button' onClick='updatePrices()'>Submit</button>
      </div>
    </div>
  );
}

function updatePrices() {
    var hPouchS = document.getElementById('hPouchS').value;
    window.localStorage.setItem("hPouchS", hPouchS);
}