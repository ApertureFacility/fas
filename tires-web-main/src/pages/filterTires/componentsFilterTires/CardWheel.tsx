import WheelsImg from '/wheels-filter.jpg';
import '../style/Card.css';
import { IWheel } from '../../../interfaces/IWheel';

function CardWheel(props: IWheel) {
  return (
    <>
      <div key={props.id} className="card">
        <div className="card__image">
          <div className="card__image__guaranty-frame">
            <div className="guaranty-text">1 year guaranty</div>
          </div>
          <img src={WheelsImg} alt="tire" />
          <div className="card__image__discount-frame">
            <div className="discount-text"> - 5%</div>
          </div>
        </div>
        <div className="card__info">
          <p>R{props.diameter}</p>
          <p>{props.boltSpacing}</p>
          <p>{props.width}/</p>
          <p>{props.centralBoreDiameter}</p>
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
    </>
  );
}

export default CardWheel;
