import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from '../../components/Auth/useAuth';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import style from './Home.module.scss';

const Home = () => {
  const authedUser = useAuth();
  const state = useSelector((state) => state.questions);
  const user = useSelector((state) => state.users.allUsers);
  const [page, setPage] = useState(0);

  const handleClick = (value) => {
    setPage(value);
  };

  const unAnswered = Object.values(state.questions)
    .filter(({ id }) => {
      return !authedUser.answers[id];
    })
    .sort((a, b) => b.timestamp - a.timestamp);

  const answered = Object.values(state.questions)
    .filter(({ id }) => {
      return authedUser.answers[id];
    })
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div className={style.home}>
      <div className={style.header}>
        <div
          className={style.tab}
          onClick={() => handleClick(0)}
          style={{ color: page === 0 && '#008967' }}
        >
          UnAnswered Questions
        </div>

        <div
          className={style.tab}
          onClick={() => handleClick(1)}
          style={{ color: page === 1 && '#008967' }}
        >
          Answered Questions
        </div>
      </div>
      <>
        {page === 0 && (
          <>
            {state.loading === 'idle'
              ? 'Loading...'
              : unAnswered.map(({ id, optionOne, author }) => {
                  const { avatarURL, name } = user[author];
                  return (
                    <QuestionCard
                      key={id}
                      avatar={avatarURL}
                      id={id}
                      name={name}
                      optionOne={optionOne.text}
                      route='poll'
                    />
                  );
                })}

            {state.loading === 'fulfilled' && (
              <>
                {unAnswered.length === 0 && (
                  <p className={style.p}>
                    No UnAnswered question(s) at the moment
                  </p>
                )}
              </>
            )}
          </>
        )}

        {page === 1 && (
          <>
            {state.loading === 'idle'
              ? 'Loading...'
              : answered.map(({ id, optionOne, author }) => {
                  const { avatarURL, name } = user[author];
                  return (
                    <QuestionCard
                      key={id}
                      avatar={avatarURL}
                      id={id}
                      name={name}
                      optionOne={optionOne.text}
                      // pollCard={true}
                      route='pollresult'
                    />
                  );
                })}
            {answered.length === 0 && (
              <p className={style.p}>Answer some questions</p>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default Home;
