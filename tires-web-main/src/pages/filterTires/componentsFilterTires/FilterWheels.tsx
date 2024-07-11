import { useState, useEffect } from 'react';
import '../style/Filter.css';
import { filterWheels, getDiameter, getWidth, getBoltSpacing, getCentralBoreDiameter } from '../../../dbRequests/tiresRequests';
import { IWheelController, IWheelProperty } from '../../../interfaces/IWheel';

function FilterWheels({ onChange }: any) {
  const [diameterWheelsValue, setDiametrWheelsValue] = useState('0');
  const [diameterWheelsId, setDiametrWheelsId] = useState(0);
  const [boltSpacingValue, setBoltSpacingValue] = useState('0');
  const [widthWheelsValue, setWidthWheelsValue] = useState('0');
  const [centralBoreDiameterValue, setCentralBoreDiameterValue] = useState('0');

  const [diameterWheels, setDiametrWheels] = useState<IWheelController[]>([]);
  const [boltSpacing, setBoltSpacing] = useState<IWheelController[]>([]);
  const [widthWheels, setWidthWheels] = useState<IWheelController[]>([]);
  const [centralBoreDiameter, setCentralBoreDiameter] = useState<IWheelController[]>([]);

  useEffect(() => {
    const fetchgetDiameter = async () => {
      try {
        const data = await getDiameter();
        setDiametrWheels(data);
      } catch (error) {
        console.error('Error fetching tires:', error);
      }
    };
    fetchgetDiameter();
  }, []);

  function handleChangeDiametrWheels(event: React.ChangeEvent<HTMLSelectElement>) {
    setDiametrWheelsValue(event.target.value);
    const fetchgetBoltSpacing = async (diameter: number) => {
      try {
        const data = await getBoltSpacing(diameter);
        setBoltSpacing(data);
      } catch (error) {
        console.error('Error fetching tires:', error);
      }
    };
    fetchgetBoltSpacing(event.target.selectedIndex);
    setDiametrWheelsId(event.target.selectedIndex);
  }

  function handleChangeBoltSpacing(event: React.ChangeEvent<HTMLSelectElement>) {
    setBoltSpacingValue(event.target.value);
    const fetchgetWidth = async (diameter: number, bolt_spacing: number) => {
      try {
        const data = await getWidth(diameter, bolt_spacing);
        setWidthWheels(data);
      } catch (error) {
        console.error('Error fetching tires:', error);
      }
    };
    const fetchgetCentralBoreDiameter = async (diameter: number, bolt_spacing: number) => {
      try {
        const data = await getCentralBoreDiameter(diameter, bolt_spacing);
        setCentralBoreDiameter(data);
      } catch (error) {
        console.error('Error fetching tires:', error);
      }
    };
    fetchgetWidth(diameterWheelsId, event.target.selectedIndex);
    fetchgetCentralBoreDiameter(diameterWheelsId, event.target.selectedIndex);
  }

  function handleChangeWidthWheels(event: React.ChangeEvent<HTMLSelectElement>) {
    setWidthWheelsValue(event.target.value);
  }

  function handleChangeCentralBoreDiameter(event: React.ChangeEvent<HTMLSelectElement>) {
    setCentralBoreDiameterValue(event.target.value);
  }

  function handleClickSearchWheels() {
    let dataWheels: IWheelProperty = {
      diameter: Number(diameterWheelsValue),
    };
    const fetchfilterWheels = async (dataWheels: IWheelProperty) => {
      try {
        const data = await filterWheels(dataWheels);
        console.log('Fetched wheels data:', data);
        onChange(data);
      } catch (error) {
        console.error('Error fetching wheels:', error);
      }
    };

    if (boltSpacingValue != '0' && widthWheelsValue != '0' && centralBoreDiameterValue != '0') {
      dataWheels.boltSpacing = boltSpacingValue;
      dataWheels.width = Number(widthWheelsValue);
      dataWheels.centralBoreDiameter = Number(centralBoreDiameterValue);
      fetchfilterWheels(dataWheels);
    } else if (boltSpacingValue != '0' && widthWheelsValue != '0') {
      dataWheels.boltSpacing = boltSpacingValue;
      dataWheels.width = Number(widthWheelsValue);
      fetchfilterWheels(dataWheels);
    } else if (boltSpacingValue != '0' && centralBoreDiameterValue != '0') {
      dataWheels.boltSpacing = boltSpacingValue;
      dataWheels.centralBoreDiameter = Number(centralBoreDiameterValue);
      fetchfilterWheels(dataWheels);
    } else if (boltSpacingValue != '0') {
      dataWheels.boltSpacing = boltSpacingValue;
      fetchfilterWheels(dataWheels);
    } else {
      fetchfilterWheels(dataWheels);
    }
  }

  return (
    <>
      <div className="wheels__choose-diametr">
        <select defaultValue={diameterWheelsValue} onChange={handleChangeDiametrWheels}>
          <option value="0">Wybierz</option>
          {diameterWheels.map(item => {
            return (
              <option key={item.id} id={String(item.id)} value={item.value}>
                {item.value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="wheels__bolt-spacing">
        <select defaultValue={boltSpacingValue} onChange={handleChangeBoltSpacing} disabled={diameterWheelsValue == '0'}>
          <option value="0">Wybierz</option>
          {boltSpacing.map(item => {
            return (
              <option key={item.id} id={String(item.id)} value={item.value}>
                {item.value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="wheels__choose-width">
        <select defaultValue={widthWheelsValue} onChange={handleChangeWidthWheels} disabled={diameterWheelsValue == '0' || boltSpacingValue == '0'}>
          <option value="0">Wybierz</option>
          {widthWheels.map(item => {
            return (
              <option key={item.id} id={String(item.id)} value={item.value}>
                {item.value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="wheels__choose-central-bore-diameter">
        <select defaultValue={centralBoreDiameterValue} onChange={handleChangeCentralBoreDiameter} disabled={diameterWheelsValue == '0' || boltSpacingValue == '0'}>
          <option value="0">Wybierz</option>
          {centralBoreDiameter.map(item => {
            return (
              <option key={item.id} id={String(item.id)} value={item.value}>
                {item.value}
              </option>
            );
          })}
        </select>
      </div>
      <div className="wheels__btn-wrapper">
        <button onClick={handleClickSearchWheels} disabled={diameterWheelsValue == '0'}>
          Szukaj opon
        </button>
      </div>
    </>
  );
}

export default FilterWheels;
