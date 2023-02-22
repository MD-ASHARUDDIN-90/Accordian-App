import React, { useState } from 'react';
import './style.css';
import { ImArrowRight } from 'react-icons/im';
import Accordian from './Accordian';
export default function App() {
  const [select, setSelect] = useState('ashar');
  setTimeout(() => {
    setSelect('ashar');
  }, 3000);
  // console.log(select);
  return (
    <div>
      <div className="app">
        <ImArrowRight className="icon" />
        <h2 className="appMain">
          Some Important Question On React ... 
          {select !== 'ashar'
            ? ` Hey You Selected Question : ${select + 1}`
            : ''}
        </h2>
      </div>
      <Accordian setSelect={setSelect} />
    </div>
  );
}
