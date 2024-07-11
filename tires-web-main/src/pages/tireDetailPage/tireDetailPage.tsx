import React, { useEffect, useState } from 'react';
import { loadTireById } from '../../dbRequests/tiresRequests';
import './tireDetailPage.css';
import './tireFeedback.css'
import Feedback from './tireFeedback'


interface TireComponentProps {
  id: number;
}
export interface DetailedTire {
  id: number;
  typeOfTire: string;
  icVc: string;
  diameter: number;
  width: number;
  profile: number;
  manufacturer: string;
  season: string;
  url: string;
  urls: string[];
  inf: string;
  price:number;
  quantityInStock: number
}

const imageUrl = "https://firebasestorage.googleapis.com/v0/b/tires-dm.appspot.com/o/Tires%2Fmichelin-primacy-4-23385-f-f-l130x175-sk6.webp?alt=media&token=e34a0787-2e67-40bb-a138-74dbd271c365";


export const TireComponent: React.FC<TireComponentProps> = ({ id }) => {
  const [tire, setTire] = useState<DetailedTire | null>(null);

  useEffect(() => {
    console.log(`Fetching tire with id: ${id}`);
    loadTireById(id).then(data => {
      console.log('Fetched tire data:', data);
      setTire(data);
    }).catch(error => {
      console.error('Error fetching tire:', error);
    });
  }, [id]);

  if (!tire) {
    return <div>Loading tire...</div>;
  }

  return (
    <div className='tireWrapp'>
    <div className="tire">
      <div className="tire__section tire__section--left">
        <div className='tire__block'>
          <img src={imageUrl} alt={tire.typeOfTire} className="tire__image" />
          <div className="tire__thumbnails">
            <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail" />
            <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail" />
            <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail" />
            <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail" />
          </div>
        </div>
       
      </div>
      <div className="tire__section tire__section--center">
        <h2 className='tire__name'>{tire.manufacturer} {tire.typeOfTire}</h2>
        <div className='tire__feedbacks'>
          <img src='/public/star.svg' alt="Rating star" />
          <p className='tire__rating'>4.5</p>
          <p className='tire__rating'>Отзывы: 23</p>
        </div>
        <div className='tire__prices'>
          <p className='tire__price'>{tire.price}р</p>
          <p className='tire__sold'>620 р</p>
        </div>
        <button className="tire__add-to-cart-button">Добавить в карзину</button>
      </div>
   
      <div className="tire__section tire__section--right">
        <div className="tire__section-title">Доставка</div>
        <p className="tire__section-content">Доставка по всей Польше</p>
        <p className="tire__section-content">Доставка по странам</p>
        <div className="tire__section-title">Способы оплаты</div>
        <p className="tire__section-content">Наличные при доставке</p>
        <p className="tire__section-content">Кредитная карта</p>
        <p className="tire__section-content">Кредитная карта при доставке</p>
        <div className="tire__section-title">Сертификаты</div>
        <p className="tire__section-content">Сертификат качества</p>
      </div>
    </div>
    <div className='tireunder'>
      <div className='tireleftBlock'>
      <div className="tire__specifications">
          <h3 className='tire__specification-title'>Характеристики</h3>
          <div className="tire__specification-item">
            <span className="tire__specification-name">ICVC:</span>
            <span className="tire__specification-value">{tire.icVc}</span>
          </div>
          <div className="tire__specification-item">
            <span className="tire__specification-name">Диаметр:</span>
            <span className="tire__specification-value">{tire.diameter}</span>
          </div>
          <div className="tire__specification-item">
            <span className="tire__specification-name">Ширина:</span>
            <span className="tire__specification-value">{tire.width}</span>
          </div>
          <div className="tire__specification-item">
            <span className="tire__specification-name">Количество на складе:</span>
            <span className="tire__specification-value">{tire.quantityInStock}</span>
          </div>
          <div className="tire__specification-item">
            <span className="tire__specification-name">Профиль:</span>
            <span className="tire__specification-value">{tire.profile}</span>
          </div>
          <div className="tire__specification-item">
            <span className="tire__specification-name">Сезон:</span>
            <span className="tire__specification-value">{tire.season}</span>
          </div>
        </div>
      </div>
      <div className='tirerightBlock'>
        <div className='tirebox'>
        <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail-box" />
        <h2 className='tire__name'>{tire.manufacturer} {tire.typeOfTire}</h2>
        <div className='tire__prices'>
          <p className='tire__price'>5000 р</p>
          <p className='tire__sold'>6200 р</p>
        </div>
        <button className="tire__buy-button">Купить</button>
        </div>
        <div className='tirebox'>
        <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail-box" />
        <h2 className='tire__name'>{tire.manufacturer} {tire.typeOfTire}</h2>
        <div className='tire__prices'>
          <p className='tire__price'>5000 р</p>
          <p className='tire__sold'>6200 р</p>
        </div>
        <button className="tire__buy-button">Купить</button>
        </div>
        <div className='tirebox'>
        <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail-box" />
        <h2 className='tire__name'>{tire.manufacturer} {tire.typeOfTire}</h2>
        <div className='tire__prices'>
          <p className='tire__price'>5000 р</p>
          <p className='tire__sold'>6200 р</p>
        </div>
        <button className="tire__buy-button">Купить</button>
        </div>
        <div className='tirebox'>
        <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail-box" />
        <h2 className='tire__name'>{tire.manufacturer} {tire.typeOfTire}</h2>
        <div className='tire__prices'>
          <p className='tire__price'>5000 р</p>
          <p className='tire__sold'>6200 р</p>
        </div>
        <button className="tire__buy-button">Купить</button>
        </div>
        <div className='tirebox'>
        <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail-box" />
        <h2 className='tire__name'>{tire.manufacturer} {tire.typeOfTire}</h2>
        <div className='tire__prices'>
          <p className='tire__price'>5000 р</p>
          <p className='tire__sold'>6200 р</p>
        </div>
        <button className="tire__buy-button">Купить</button>
        </div>
        <div className='tirebox'>
        <img src={imageUrl} alt={tire.typeOfTire} className="tire__thumbnail-box" />
        <h2 className='tire__name'>{tire.manufacturer} {tire.typeOfTire}</h2>
        <div className='tire__prices'>
          <p className='tire__price'>5000 р</p>
          <p className='tire__sold'>6200 р</p>
        </div>
        <button className="tire__buy-button">Купить</button>
        </div>
      </div>
    </div>
    <div className='feedback_wrapper'>
    <div className="review-container">
    <p className="review-container__text">Отзывы</p>
  <button className="tire__buy-button">Написать отзыв</button>
  
</div>
      <Feedback
        user="Сергей"
        date="21 мая,2024"
        text="Я недавно приобрел шины Michelin Primacy 4 для своего автомобиля, и я абсолютно в восторге от их производительности. С самого начала заметно, насколько тихо и плавно они катятся по дороге, что делает мои поездки более комфортными. Я также ощутил значительное улучшение сцепления и управляемости, особенно на мокрых и скользких поверхностях. В целом, я полностью доволен выбором этих шин и рекомендую их всем."
        likes={10}
        dislikes={2}
      />
      <Feedback
        user="Сергей"
        date="21 мая,2024"
        text="Я недавно приобрел шины Michelin Primacy 4 для своего автомобиля, и я абсолютно в восторге от их производительности. С самого начала заметно, насколько тихо и плавно они катятся по дороге, что делает мои поездки более комфортными. Я также ощутил значительное улучшение сцепления и управляемости, особенно на мокрых и скользких поверхностях. В целом, я полностью доволен выбором этих шин и рекомендую их всем."
        likes={10}
        dislikes={2}
      />
      <Feedback
        user="Сергей"
        date="21 мая,2024"
        text="Я недавно приобрел шины Michelin Primacy 4 для своего автомобиля, и я абсолютно в восторге от их производительности. С самого начала заметно, насколько тихо и плавно они катятся по дороге, что делает мои поездки более комфортными. Я также ощутил значительное улучшение сцепления и управляемости, особенно на мокрых и скользких поверхностях. В целом, я полностью доволен выбором этих шин и рекомендую их всем."
        likes={10}
        dislikes={2}
      />
    </div>
    </div>
  );
};
