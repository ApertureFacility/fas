import React, { useEffect, useState } from 'react';
import { loadAllTires } from '../../dbRequests/tiresRequests';
import { ITire } from '../../interfaces/ITire';
import './AllTires.css';
import { Link } from 'react-router-dom';

const AllTires: React.FC = () => {
  const [tires, setTires] = useState<ITire[]>([]);
  const imageUrl = "https://firebasestorage.googleapis.com/v0/b/tires-dm.appspot.com/o/Tires%2Fmichelin-primacy-4-23385-f-f-l130x175-sk6.webp?alt=media&token=e34a0787-2e67-40bb-a138-74dbd271c365";

  console.log('AllTires component rendered');
  console.log('Tires state:', tires);

  useEffect(() => {
    const fetchTires = async () => {
      try {
        const data = await loadAllTires();
        console.log('Fetched tires data:', data);
        setTires(data);
      } catch (error) {
        console.error('Error fetching tires:', error);
      }
    };

    fetchTires();
  }, []);

  return (
    <div>
      <h1>All Tires</h1>
      <div className="tire-list">
        {tires.length === 0 && <p>Loading tires...</p>}
        {tires.map(tire => (
          <Link to={'/tireDetail'}>
            <div key={tire.id} className="tire-item">
              <div>
                <div className='tire-image'>
                  <div className='guaranty-frame'>
                    <div className='guaranty-text'>1 year guaranty</div>
                  </div>
                  <img src={imageUrl} alt="tire" />
                  <div className='discount-frame'>
                    <div className='discount-text'> - 5%</div>
                  </div>
                </div>
                <div className='tire-info'>
                  <p>{tire.manufacturer}</p>
                  <p>{tire.typeOfTire}</p>
                  <p>{tire.width}/</p>
                  <p>{tire.profile}</p>
                  <p>R{tire.diameter}</p>
                </div>
              </div>
              <div className='tire-price'>
                <div className='price-with-discount'>
                  <p>12160 PLN</p>
                </div>
                <div className='price-before-discount'>
                  <p>12800 PLN</p>
                </div>
              </div>
              <button className='button-buy'>
                <div className='button-by-text'>Buy</div>
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllTires;