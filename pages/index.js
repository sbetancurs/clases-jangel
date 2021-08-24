import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className='container'>
        <h1>Hola mi papa</h1>
        <input type='text' placeholder='num 1' />
        <input type='text' placeholder='num 2' />
        <button type='submit'>Sumar</button>
      </div>
      <style jsx>{`
        div.container {
          align-items: center;
          background-color: #606060;
          color: white;
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          min-height: 100vh;
          padding: 0 0.5rem;
        }
      `}</style>
    </>
  );
}
