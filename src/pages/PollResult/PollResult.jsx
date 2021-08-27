import PollResultCard from '../../components/PollResultCard/PollResultCard';

const PollResult = () => {
  return (
    <div>
      <h1>Poll Result</h1>
      <PollResultCard percentage={20} vote={true} />
      <br />
      <PollResultCard percentage={50} />

      <br />
      <br />

      <a
        target='_blank'
        rel='noreferrer'
        href='https://icons8.com/icon/80776/trophy'
      >
        Trophy icon by Icons8
      </a>
    </div>
  );
};

export default PollResult;
