import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import './BottomSection.scss';

const heading = [
  //   {
  //     id: 1,
  //     title: 'IMAGE',
  //   },
  {
    id: 2,
    title: 'Attr 1',
    placeholder: '',
  },
  {
    id: 3,
    title: 'Attr 2',
    placeholder: '',
  },
  {
    id: 4,
    title: 'PRICE',
    placeholder: '$',
  },
  {
    id: 5,
    title: 'SALE PRICE',
    placeholder: '$',
  },
  {
    id: 6,
    title: 'QTY',
    placeholder: '',
  },
  {
    id: 7,
    title: 'SKU',
    placeholder: '',
  },
];

const BottomSection = () => {
  return (
    <div className='bottom-section'>
      <p>These products do not have any variants</p>
      <div className='variants-table'>
        <h3>Image</h3>
        {heading.map((item) => {
          return (
            <div className='variants-table-item'>
              <h3 key={item.id}>{item.title}</h3>
              <input type='text' placeholder={item.placeholder} />
            </div>
          );
        })}
        <CheckBoxOutlineBlankIcon className='checkbox-icon' />
        <button className='more-button'>More</button>
        <CloseOutlinedIcon className='closeout-icon' />
      </div>

      <button className='create-button'>Create your first variant</button>
    </div>
  );
};

export default BottomSection;
