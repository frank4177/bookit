"use client"

import React, { useState, useEffect } from 'react';

const Range: React.FC = () => {
  const [value1, setValue1] = useState<number>(500);
  const [value2, setValue2] = useState<number>(2500);

  useEffect(() => {
    const range1 = document.getElementById('range1') as HTMLInputElement;
    const rangeV1 = document.getElementById('rangeV1')!;
    const range2 = document.getElementById('range2') as HTMLInputElement;
    const rangeV2 = document.getElementById('rangeV2')!;

    const setValueHandler1 = () => {
      const newValue = ((parseInt(range1.value) - parseInt(range1.min)) * 100) / (parseInt(range1.max) - parseInt(range1.min));
      const newPosition = 10 - (newValue * 0.2);
      rangeV1.innerHTML = `<span>$${range1.value}</span>`;
      rangeV1.style.left = `calc(${newValue}% + (${newPosition}px))`;

      // Ensure range1 doesn't exceed range2
      if (parseInt(range1.value) >= parseInt(range2.value)) {
        range1.value = (parseInt(range2.value) - 1).toString();
        setValue1(parseInt(range2.value) - 1);
      }
    };

    const setValueHandler2 = () => {
      const newValue = ((parseInt(range2.value) - parseInt(range2.min)) * 100) / (parseInt(range2.max) - parseInt(range2.min));
      const newPosition = 10 - (newValue * 0.2);
      rangeV2.innerHTML = `<span>$${range2.value}</span>`;
      rangeV2.style.left = `calc(${newValue}% + (${newPosition}px))`;

      // Ensure range2 doesn't exceed range1
      if (parseInt(range2.value) <= parseInt(range1.value)) {
        range2.value = (parseInt(range1.value) + 1).toString();
        setValue2(parseInt(range1.value) + 1);
      }
    };

    setValueHandler1();
    setValueHandler2();

    range1.addEventListener('input', setValueHandler1);
    range2.addEventListener('input', setValueHandler2);

    return () => {
      range1.removeEventListener('input', setValueHandler1);
      range2.removeEventListener('input', setValueHandler2);
    };
  }, []);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue1(parseInt(event.target.value));
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue2(parseInt(event.target.value));
  };

  return (
    <div className="range-wrap">
      <div className="range-value" id="rangeV1"></div>
      <input id="range1" type="range" min="200" max="3000" value={value1} step="1" onChange={handleChange1} />

      <div className="range-value" id="rangeV2"></div>
      <input id="range2" type="range" min="200" max="3000" value={value2} step="1" onChange={handleChange2} />
    </div>
  );
};

export default Range;
