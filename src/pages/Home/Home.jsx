import { useState } from 'react';
import { Answered, UnAnswered } from '../../components/Question';
import style from './Home.module.scss';

const Home = () => {
  const [state, setState] = useState(0);

  const handleClick = (value) => {
    setState(value);
  };

  return (
    <div className={style.home}>
      <div className={style.header}>
        <div
          className={style.tab}
          onClick={() => handleClick(0)}
          style={{ color: state === 0 && '#008967' }}
        >
          UnAnswered Questions
        </div>

        <div
          className={style.tab}
          onClick={() => handleClick(1)}
          style={{ color: state === 1 && '#008967' }}
        >
          Answered Questions
        </div>
      </div>
      <>
        {state === 0 && <UnAnswered />}

        {state === 1 && <Answered />}
      </>
    </div>
  );
};

export default Home;
