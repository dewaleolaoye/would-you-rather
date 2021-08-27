import ProgressBar from '@ramonak/react-progress-bar';
import style from './PollResultCard.module.scss';

const PollResultCard = ({ vote, percentage }) => {
  return (
    <div className={`${style.card} ${vote ? style.active : ''}`}>
      {vote && (
        <div className={style.img}>
          <img
            src='https://img.icons8.com/doodle/48/000000/trophy--v1.png'
            alt='vote'
          />
        </div>
      )}
      <h3>Would you rather be a front-end developer?</h3>
      <ProgressBar
        className={style.bar}
        completed={percentage}
        bgColor='#06d6a2'
        borderRadius='5px'
        height='30px'
      />

      <p>1 out of 2 votes</p>
    </div>
  );
};

export default PollResultCard;
