import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import style from './NewQuestion.module.scss';
import Button from '../../components/Button/Button';
import { saveQuestion } from '../../components/QuestionCard/questionSlice';
import { useAuth } from '../../components/Auth/useAuth';
import { addQuestionToUser } from '../Login/userSlice';

const NewQuestion = ({ history }) => {
  const dispatch = useDispatch();
  const authedUser = useAuth();

  const [loading, setLoading] = useState(false);

  const [question, setQuestion] = useState({
    author: authedUser.id,
    optionOneText: '',
    optionTwoText: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    dispatch(saveQuestion(question));
    dispatch(addQuestionToUser(question));

    history.push('/');
  };

  return (
    <div className={style.newQuestion}>
      <div className={style.header}>
        <h1>Create NewQuestion</h1>
      </div>

      <div className={style.content}>
        <p>Complete this question:</p>
        <h2>Would you rather...</h2>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Enter Option One Text Here'
            onChange={(e) =>
              setQuestion({
                ...question,
                optionOneText: e.target.value,
              })
            }
          />
          <div className={style.divider}>
            <hr />

            <p>OR</p>

            <hr />
          </div>
          <input
            type='text'
            placeholder='Enter Option Two Text Here'
            onChange={(e) =>
              setQuestion({
                ...question,
                optionTwoText: e.target.value,
              })
            }
          />

          <Button
            className={style.btn}
            name={loading ? 'Loading...' : 'Submit'}
            disabled={
              question.optionOneText === '' || question.optionTwoText === ''
                ? true
                : false
            }
          />
        </form>
      </div>
    </div>
  );
};

export default withRouter(NewQuestion);
