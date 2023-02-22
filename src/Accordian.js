import React, { useState } from 'react';
import './style.css';
import { data } from './Const';
import { GrAdd, GrSubtract } from 'react-icons/gr';


export default function Accordian({setSelect}) {
  const [list, setList] = useState(data);
  const handleClick = (x,i) => {
    if (!x.isClick) {
      x.isClick = true;
    } else {
      x.isClick = false;
    }
    setList([...list]);
    setSelect(i)
  };
  return (
    <div>
      {list.map((x, i) => (
        <>
          <div>
            <div
              onClick={() => {
                handleClick(x,i);
              }}
              className="quest"
            >
              <h2 className="questSub">
                Question ({i + 1}) : <span>{x.quest}</span>
              </h2>
              {x.isClick ? <GrSubtract className="icon"/> : <GrAdd className="icon" />}
            </div>
            {x.isClick ? <h3 className="ans">{x.ans}</h3> : ''}
          </div>
        </>
      ))}
    </div>
  );
}
