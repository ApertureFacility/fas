import Checkbox from './Checkbox';

function CheckboxList({ items, onChangeHandler, product }: any) {
  return (
    <ul>
      {items.map((el: any, idx: any) => (
        <li key={idx}>
          <label htmlFor={el.name}>
            <Checkbox name={el.name} id={el.name} checked={el.checked} onChangeHandler={onChangeHandler} idx={idx} product={product} />
            <span>{el.name}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default CheckboxList;
