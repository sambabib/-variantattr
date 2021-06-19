import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import './TopSection.scss';

const TopSection = () => {
  return (
    <div className='top-section'>
      <h2>Attributes and Options</h2>
      <div className='attributes-options'>
        <div className='attributes-options-left'>
          <h3>Attribute Name</h3>
          <div className='attributes-options-items'>
            <p>Attr 1</p>
            <p>Attr 1</p>
          </div>
        </div>
        <div className='attributes-options-right'>
          <h3>Options</h3>
          <div className='attributes-options-input'>
            <input type='text' placeholder='No options yet' />
            <CloseOutlinedIcon className='closeout-icon' />
          </div>
          <div className='attributes-options-input'>
            <input type='text' placeholder='No options yet' />
            <CloseOutlinedIcon className='closeout-icon' />
          </div>
        </div>
      </div>
      <button className='add-button'>+ Add New Attribute</button>
    </div>
  );
};

export default TopSection;
