import { useState } from 'react';
import './InputBar.scss';

const InputBar = () => {
  const [attributesValue, setAttributesValue] = useState('');

  const handleAttributeChange = (e) => {
    let value = e.target.value;
    setAttributesValue((e.target.name = value));
    console.log(attributesValue);
  };

  return (
    <div className='input-bar'>
      <div className='input-bar-component'>
        <input
          type='text'
          className='input-text-bar'
          onChange={handleAttributeChange}
          value={attributesValue}
        />
      </div>
    </div>
  );
};

export default InputBar;
