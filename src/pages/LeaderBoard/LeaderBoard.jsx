import { useSelector } from 'react-redux';
import LeaderBoardCard from '../../components/LeaderBoardCard/LeaderBoardCard';

const LeaderBoard = () => {
  const users = useSelector((state) => state.users.allUsers);

  const newUser = Object.values(users).sort((a, b) => {
    const answerCountA = Object.values(a.answers).length;
    const answerCountB = Object.values(b.answers).length;
    const createdCountA = a.questions.length;
    const createdCountB = b.questions.length;
    const totalCountA = answerCountA + createdCountA;
    const totalCountB = answerCountB + createdCountB;

    return totalCountB - totalCountA;
  });

  return (
    <div>
      {newUser.map(({ id, name, avatarURL, answers, questions }, index) => {
        const answerCount = Object.values(answers).length;
        const createdCount = questions.length;

        const totalScore = createdCount + answerCount;

        return (
          <LeaderBoardCard
            key={id}
            position={index + 1}
            name={name}
            avatar={avatarURL}
            answeredCount={answerCount}
            createdCount={questions.length}
            totalScore={totalScore}
          />
        );
      })}
    </div>
  );
};

export default LeaderBoard;
