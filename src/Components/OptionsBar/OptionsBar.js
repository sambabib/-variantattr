import { useState } from 'react';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import './OptionsBar.scss';

const OptionsBar = () => {
  const [optionsValue, setOptionsValue] = useState('');

  const handleOptionsChange = (e) => {
    let value = e.target.value;
    setOptionsValue((e.target.name = value));
    console.log('my options', optionsValue);
  };

  const clearOptions = () => {
    setOptionsValue('');
    console.log('clearing');
  };

  return (
    <div className='options-bar'>
      <div className='options-bar-component'>
        <input
          type='text'
          placeholder='No options yet'
          className='options-text-bar'
          onChange={handleOptionsChange}
          value={optionsValue}
        />
        <CloseOutlinedIcon className='closeout-icon' onClick={clearOptions} />
      </div>
    </div>
  );
};

export default OptionsBar;
