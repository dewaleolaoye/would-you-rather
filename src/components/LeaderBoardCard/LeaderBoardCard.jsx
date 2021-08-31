import style from './LeaderBoard.module.scss';

const LeaderBoardCard = ({
  name,
  avatar,
  answeredCount,
  createdCount,
  totalScore,
  position,
}) => {
  return (
    <div className={style.card}>
      <div className={style.avatar}>
        <img src={avatar} alt={name} />
        <span>{position}</span>
      </div>

      <div className={style.details}>
        <h1>{name}</h1>

        <div className={style.detailsDescription}>
          <p>Answered question</p>
          <p>{answeredCount}</p>
        </div>
        <hr />

        <div className={style.detailsDescription}>
          <p>Created question</p>
          <p>{createdCount}</p>
        </div>

        <hr />
      </div>

      <div className={style.score}>
        <div className={style.title}>
          <h2>Score</h2>
        </div>

        <div className={style.number}>
          <p>{totalScore}</p>
        </div>
      </div>

      <div className={style.badge}>
        {position === 1 && (
          <img
            src='https://img.icons8.com/doodle/48/000000/trophy--v1.png'
            alt='vote'
          />
        )}

        {position === 2 && (
          <img
            src='https://img.icons8.com/glyph-neue/50/000000/trophy.png'
            alt='vote'
          />
        )}
        {position === 3 && (
          <img
            src='https://img.icons8.com/ultraviolet/40/000000/trophy--v1.png'
            alt='vote'
          />
        )}
      </div>
    </div>
  );
};

export default LeaderBoardCard;
