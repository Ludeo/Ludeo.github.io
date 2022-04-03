import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { prefix } from '../components/prefix.js';

export default function Prices() {
    var hPouchS = '100';
    if (typeof window !== "undefined") {
        hPouchS = window.localStorage.getItem('hPouchS');
    }

    const handleClick = () => {
      updatePrices();
    };

  return (
    <div>
      <Head>
        <title>Prices</title>
        <link rel='icon' href={`${prefix}/favicon.ico`} />
      </Head>
      <Navbar />
      <div>Prices</div>
      <div>
            <p>Honing Materials</p><br/>
            <p>Harmony Shard Pouch (S)</p>
            <input type='text' id='hPouchS' defaultValue={hPouchS} />
            <button type='button' onClick={handleClick}>Submit</button>
      </div>
    </div>
  );
}

function updatePrices() {
    var hPouchS = document.getElementById('hPouchS').value;
    window.localStorage.setItem("hPouchS", hPouchS);
}