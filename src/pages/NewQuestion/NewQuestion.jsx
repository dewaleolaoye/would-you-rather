import style from './NewQuestion.module.scss';
import Button from '../../components/Button/Button';

const NewQuestion = () => {
  return (
    <div className={style.newQuestion}>
      <div className={style.header}>
        <h1>Create NewQuestion</h1>
      </div>

      <div className={style.content}>
        <p>Complete this question:</p>
        <h2>Would you rather...</h2>

        <form action=''>
          <input type='text' placeholder='Enter Option One Text Here' />
          <div className={style.divider}>
            <hr />

            <p>OR</p>

            <hr />
          </div>
          <input type='text' placeholder='Enter Option Two Text Here' />

          <Button className={style.btn} name='Submit' />
        </form>
      </div>
    </div>
  );
};

export default NewQuestion;
