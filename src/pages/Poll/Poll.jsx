import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import { useAuth } from '../../components/Auth/useAuth';
import QuestionCard from '../../components/QuestionCard/QuestionCard';
import { saveQuestionAnswer } from '../../components/QuestionCard/questionSlice';
import { addAnswerToUser } from '../Login/userSlice';

const Poll = ({ history }) => {
  const { pollID: qid } = useParams();
  const auth = useAuth();
  const { id: authedUser } = auth;
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.allUsers);
  const state = useSelector((state) => state.questions);
  const [answer, setAnswer] = useState('');

  const question = Object.values(state.questions).filter(({ id }) => {
    return id === qid;
  });

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };
  console.log(answer, 'answer');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addAnswerToUser({ authedUser, qid, answer }));
    dispatch(saveQuestionAnswer({ authedUser, qid, answer }));

    history.push('/');
  };

  return (
    <>
      {question.map(({ id, optionOne, author, optionTwo }) => {
        const { avatarURL, name } = users[author];
        return (
          <QuestionCard
            key={id}
            avatar={avatarURL}
            id={id}
            name={name}
            optionOne={optionOne.text}
            optionTwo={optionTwo.text}
            pollCard={true}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        );
      })}
    </>
  );
};

export default withRouter(Poll);
