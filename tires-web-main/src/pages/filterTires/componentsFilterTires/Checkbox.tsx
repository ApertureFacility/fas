function Checkbox({ checked, onChangeHandler, idx, name, id, product }: any) {
  return <input type="checkbox" name={name} id={id} checked={checked} onChange={() => onChangeHandler(idx, product)} />;
}

export default Checkbox;
