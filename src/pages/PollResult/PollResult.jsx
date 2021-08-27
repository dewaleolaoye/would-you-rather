import PollResultCard from '../../components/PollResultCard/PollResultCard';
import style from './PollResult.module.scss';
import faker from 'faker';

const PollResult = () => {
  const avatar = faker.image.avatar();

  return (
    <>
      <div className={style.wrapper}>
        <h1>Asked by Adewale Olaoye</h1>

        <div className={style.result}>
          <div className={style.avatar}>
            <img src={avatar} alt='leaderboard' />
          </div>

          <div className={style.details}>
            <PollResultCard percentage={20} vote={true} />
            <br />
            <PollResultCard percentage={50} />
          </div>
        </div>
      </div>

      <a
        target='_blank'
        rel='noreferrer'
        href='https://icons8.com/icon/80776/trophy'
        style={{ marginTop: '3rem', display: 'block' }}
      >
        Trophy icon by Icons8
      </a>
    </>
  );
};

export default PollResult;
