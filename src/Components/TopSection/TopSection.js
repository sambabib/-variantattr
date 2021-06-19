import { useState } from 'react'
import InputBar from '../InputBar/InputBar';
import OptionsBar from '../OptionsBar/OptionsBar';
import './TopSection.scss';

const attributes = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const TopSection = () => {
  const [showNewAttribute, setShowNewAttribute] = useState('')
  
  const handleNewAttribute = (id) => {
    const newAttribute = [
      ...attributes,
      attributes.push({
        id: attributes.length + 1
      }),
    ];
    setShowNewAttribute(newAttribute)  
    console.log(showNewAttribute);
  };
  
  return (
    <div className='top-section'>
      <h2>Attributes and Options</h2>
      <div className='attributes-options'>
        <div className='attributes-options-left'>
          <h3>Attribute Name</h3>
          {attributes.map((item) => {
            return (
              <div className='attributes-options-items'>
                <InputBar key={item.id} />
              </div>
            );
          })}
        </div>

        <div className='attributes-options-right'>
          <h3>Options</h3>
          {attributes.map((item) => {
            return (
              <div className='attributes-options-input'>
                <OptionsBar key={item.id} />
              </div>
            );
          })}
        </div>
      </div>
      <button className='add-button' onClick={handleNewAttribute}>
        + Add New Attribute
      </button>
    </div>
  );
};

export default TopSection;
