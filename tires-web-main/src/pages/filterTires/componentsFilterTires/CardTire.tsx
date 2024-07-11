import TiresImg from '/tires-filter.jpg';
import { ITire } from '../../../interfaces/ITire';
import '../style/Card.css';
import { Link } from 'react-router-dom';

function CardTire(props: ITire) {
  return (
    <>
      <Link to={'/tireDetail'}>
        <div key={props.id} className="card">
          <div className="card__image">
            <div className="card__image__guaranty-frame">
              <p>1 year guaranty</p>
            </div>
            <img src={TiresImg} alt="tire" />
            <div className="card__image__discount-frame">
              <p> - 5%</p>
            </div>
          </div>
          <div className="card__info">
            <p>{props.manufacturer}</p>
            <p>{props.typeOfTire}</p>
            <p>{props.width}/</p>
            <p>{props.profile}</p>
            <p>R{props.diameter}</p>
          </div>
          <div className="card__price">
            <div className="card__price__with-discount">
              <p>12160 PLN</p>
            </div>
            <div className="card__price__before-discount">
              <p>12800 PLN</p>
            </div>
          </div>
          <div className="card__reviews">
            <p>59 opinie</p>
          </div>
          <button className="card__button">Kupić</button>
        </div>
      </Link>
    </>
  );
}

export default CardTire;
