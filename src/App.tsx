import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner'
import Nav from './components/Nav'
import Players from './components/Players';
import type { Player } from './types/types';

const playersFetch = async ():Promise<Player[]> => {
  const res = await fetch("/data.json");  
  const data = await res.json(); 
  return data;
};

const playersPromise = playersFetch();     // fix 3: create once, outside the component

function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  )
}

export default App