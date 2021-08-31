import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../components/Auth/useAuth';
import PollResultCard from '../../components/PollResultCard/PollResultCard';
import { percentageCalc } from '../../utils/percentageCalc';
import style from './PollResult.module.scss';

const PollResult = () => {
  const { qid } = useParams();
  const questions = useSelector((state) => state.questions.questions);
  const user = useSelector((state) => state.users.allUsers);
  const authUser = useAuth();

  const filterQuestion = Object.values(questions).filter(
    ({ id }) => id === qid
  );

  return (
    <>
      <div className={style.wrapper}>
        {filterQuestion.map(({ id, optionOne, optionTwo, author }) => {
          const { avatarURL, name } = user[author];

          const checkOptionOne = optionOne.votes.includes(authUser.id);
          const checkOptionTwo = optionTwo.votes.includes(authUser.id);
          const voteOneCount = optionOne.votes.length;
          const voteTwoCount = optionTwo.votes.length;
          const totalVotes = optionOne.votes.length + optionTwo.votes.length;

          const percentageCalcOne = percentageCalc(voteOneCount, totalVotes);
          const percentageCalcTwo = percentageCalc(voteTwoCount, totalVotes);

          return (
            <div key={id}>
              <h1>Asked by {name}</h1>

              <div className={style.result}>
                <div className={style.avatar}>
                  <img src={avatarURL} alt={author} />
                </div>

                <div className={style.details}>
                  <PollResultCard
                    option={optionOne.text}
                    percentage={percentageCalcOne}
                    vote={checkOptionOne ? true : false}
                    voteCount={voteOneCount}
                    totalVotes={totalVotes}
                  />
                  <br />
                  <PollResultCard
                    vote={checkOptionTwo ? true : false}
                    option={optionTwo.text}
                    percentage={percentageCalcTwo}
                    voteCount={voteTwoCount}
                    totalVotes={totalVotes}
                  />
                </div>
              </div>
            </div>
          );
        })}
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
