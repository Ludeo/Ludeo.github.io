import { useState, useEffect } from 'react';

import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { prefix } from '../components/prefix.js';

const defaultPrices = {
  'Harmony Shard Pouch (S)': null,
  'Harmony Shard Pouch (M)': null,
  'Harmony Shard Pouch (L)': null,
  'Life Shard Pouch (S)': null,
  'Life Shard Pouch (M)': null,
  'Life Shard Pouch (L)': null,
  'Honor Shard Pouch (S)': null,
  'Honor Shard Pouch (M)': null,
  'Honor Shard Pouch (L)': null,
  'Destruction Stone Fragment':  null,
  'Destruction Stone': null,
  'Destruction Stone Crystal': null,
  'Guardian Stone Fragment': null,
  'Guardian Stone': null,
  'Guardian Stone Crystal': null,
  'Harmony Leapstone': null,
  'Life Leapstone': null,
  'Honor Leapstone': null,
  'Great Honor Leapstone': null,
  'Star\'s Breath': null,
  'Moon\'s Breath': null,
  'Solar Grace': null,
  'Solar Blessing': null,
  'Solar Protection': null,
  'Caldarr Fusion Material': null,
  'Simple Oreha Fusion Material': null,
  'Basic Oreha Fusion Material': null,
}

const getInitialPrices = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const pricesStorage = window.localStorage.getItem('prices');

  if (!pricesStorage) {
    window.localStorage.setItem('prices', JSON.stringify(defaultPrices));

    return defaultPrices;
  }

  return JSON.parse(pricesStorage);
}

const useLocalStorage = (collectionName, init) => {
  const [collection, setCollection] = useState(init);

  const handleUpdate = (key) => (event) => {
    setCollection(prevState => ({
      ...prevState,
      [key]: event.target.value
    }));
  }

  useEffect(() => {
    window.localStorage.setItem(collectionName, JSON.stringify(collection))
  }, [collection]);

  return { handleUpdate, collection };
}

const Item = ({ itemKey, value, defaultValue, onChange }) => {
  return (
    <div className="flex flex-align-items-center">
      <img src={`${prefix}/imgs/${itemKey}.webp`} alt={`Picture of ${itemKey}`} className="mr2" />
      <h5 className="mr2">{itemKey}</h5>
      <input type="number" onChange={onChange} defaultValue={defaultValue} className='border-solid border-current border-2 ml-3 pl-1'/>
    </div>
  )
}

export default function Prices() {
  const { handleUpdate, collection } = useLocalStorage('prices', getInitialPrices);

  if (!collection) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>Prices</title>
        <link rel='icon' href={`${prefix}/favicon.ico`} />
      </Head>
      <Navbar />
      <div>Prices</div>
      <div>
        {Object.entries(collection).map(([itemKey, defaultValue]) =>
          <Item key={itemKey} itemKey={itemKey} defaultValue={defaultValue} onChange={handleUpdate(itemKey)} />
        )}
      </div>
    </div>
  );
}
