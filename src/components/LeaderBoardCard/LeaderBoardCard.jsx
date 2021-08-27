import style from './LeaderBoard.module.scss';
import faker from 'faker';

const LeaderBoardCard = () => {
  const avatar = faker.image.avatar();

  return (
    <div className={style.card}>
      <div className={style.avatar}>
        <img src={avatar} alt='leaderboard' />
      </div>

      <div className={style.details}>
        <h1>Sarah Edo</h1>

        <div className={style.detailsDescription}>
          <p>Answered question</p>
          <p>7</p>
        </div>
        <hr />

        <div className={style.detailsDescription}>
          <p>Created question</p>
          <p>3</p>
        </div>

        <hr />
      </div>

      <div className={style.score}>
        <div className={style.title}>
          <h2>Score</h2>
        </div>

        <div className={style.number}>
          <p>4</p>
        </div>
      </div>

      <div className={style.badge}>
        <img
          src='https://img.icons8.com/doodle/48/000000/trophy--v1.png'
          alt='vote'
        />
      </div>
    </div>
  );
};

export default LeaderBoardCard;
