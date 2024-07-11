import Checkbox from './Checkbox';

function CheckboxHeader({ isCheckedCheckbox, onChangeHandler, id }: any) {
  return (
    <>
      <Checkbox name="allPremium" id={id} idx={id} checked={isCheckedCheckbox} onChangeHandler={onChangeHandler} />
      <label htmlFor={id}>Klasa {id}</label>
    </>
  );
}

export default CheckboxHeader;
