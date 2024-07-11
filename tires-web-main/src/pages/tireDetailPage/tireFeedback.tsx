import React from "react";
import Rating from "./ratingComponent/ratingComponent";

interface FeedbackProps {
  user: string;
  date: string;
  text: string;
  likes: number;
  dislikes: number;
}  

const Feedback: React.FC<FeedbackProps> = ({ user, date, text, likes, dislikes }) => (
  <div className='feedback'>
    <div className="feedback__content">
      <div className="feedback__header">
        <div className="feedback__user">{user}</div>
        <div className="feedback__date">{date}</div>
      </div>
      <div className="feedback__text">{text}</div>
      <div className="feedback__footer">
        <div className="feedback__likes">
          <img src='/public/Like.svg' alt="like_img" className="feedback__icon" />{likes}
        </div>
        <div className="feedback__dislikes">
          <img src='/public/Dislike.svg' alt="dislike_img" className="feedback__icon" />{dislikes}
        </div>
      </div>
    </div>
    <div className="feedback__ratings">
      <div className="feedback__rating-container">
        <Rating label="Уровень шума" stars={5} />
        <Rating label="Мокрый асфальт" stars={5} />
        <Rating label="Сухой асфальт" stars={5} />
        <div className="feedback__extra-star">
          <div className="feedback__one-star">
            <img src='./ratingComponent/star.svg' alt="Extra star" /> 5.0
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Feedback;
