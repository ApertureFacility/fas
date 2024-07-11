import { useState, useEffect } from 'react';
import { ITire } from '../../interfaces/ITire';
import { IWheel } from '../../interfaces/IWheel';
import TiresImg from '/tires-filter.jpg';
import FilterTires from './componentsFilterTires/FilterTires';
import FilterWheels from './componentsFilterTires/FilterWheels';
import CardTire from './componentsFilterTires/CardTire';
import CardWheel from './componentsFilterTires/CardWheel';
import './style/Filter.css';
import { useParams } from 'react-router-dom';

function Filter() {
  const [typeFilter, setTypeFilter] = useState('tires');
  const [dataTires, setDataTires] = useState<ITire[]>([]);
  const [dataWheels, setDataWheels] = useState<IWheel[]>([]);
  const [active, setActive] = useState(false);

  const { query } = useParams();

  useEffect(() => {
    if (query) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [query]);

  function handleChangeTires(tires: ITire[]) {
    setDataTires(tires);
  }

  function handleChangeWheels(wheels: IWheel[]) {
    setDataWheels(wheels);
  }

  function handleClickTypeFilterTires() {
    setTypeFilter('tires');
  }

  function handleClickTypeFilterWheels() {
    setTypeFilter('wheels');
  }

  function renderTireList() {
    return (
      <div className="tires-list">
        {dataTires.map((tire, index) => (
          <CardTire key={index} {...tire} />
        ))}
      </div>
    );
  }

  function renderWheelList() {
    return (
      <div className="wheels-list">
        {dataWheels.map(wheel => (
          <CardWheel key={wheel.id} {...wheel} />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className={`list ${active ? 'active' : ''}`}>
        <div className={`wrapper ${active ? 'active' : ''}`}>
          <div className={`tab-content ${active ? 'active' : ''}`}>
            <div className={`tires ${typeFilter == 'tires' || !active ? '' : 'hidden'}`}>
              <FilterTires onChange={handleChangeTires} />
            </div>
            {active ? (
              <></>
            ) : (
              <div className="wrapper-image">
                <img src={TiresImg} />
              </div>
            )}
            {active ? (
              <div className={`wheels ${typeFilter == 'wheels' ? '' : 'hidden'}`}>
                <FilterWheels onChange={handleChangeWheels} />
              </div>
            ) : (
              <></>
            )}
          </div>
          {active ? (
            <div className="wrapper-button">
              <button className={`wrapper-button__tires ${typeFilter == 'tires' ? 'active' : ''}`} onClick={handleClickTypeFilterTires}>
                Tires
              </button>
              <button className={`wrapper-button__wheels ${typeFilter == 'wheels' ? 'active' : ''}`} onClick={handleClickTypeFilterWheels}>
                Wheels
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        {dataTires && active && typeFilter == 'tires' ? renderTireList() : <></>}
        {dataWheels && active && typeFilter == 'wheels' ? renderWheelList() : <></>}
      </div>
    </>
  );
}

export default Filter;
