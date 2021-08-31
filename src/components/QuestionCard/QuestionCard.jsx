import style from './QuestionCard.module.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const QuestionCard = ({
  id,
  pollCard,
  avatar,
  name,
  optionOne,
  optionTwo,
  handleChange,
  handleSubmit,
  route,
}) => {
  return (
    <>
      <div className={style.card}>
        <div className={style.title}>{name} asks:</div>

        <div className={style.details}>
          <>
            <div className={style.avatar}>
              <img src={avatar} alt={name} />
            </div>

            <div className={style.content}>
              <>
                <h2>Would you rather</h2>
                {!pollCard ? (
                  <>
                    <p>...{optionOne}...</p>

                    <Link to={`/${route}/${id}`} className={style.btn}>
                      View poll
                    </Link>
                  </>
                ) : (
                  <>
                    <form className={style.select} onSubmit={handleSubmit}>
                      <input
                        type='radio'
                        id='option1'
                        name='question'
                        value={'optionOne'}
                        onChange={handleChange}
                      />
                      <label htmlFor='option1'>{optionOne}</label>

                      <br />
                      <br />

                      <input
                        type='radio'
                        id='option2'
                        name='question'
                        value={'optionTwo'}
                        onChange={handleChange}
                      />
                      <label htmlFor='option2'>{optionTwo}</label>

                      <br />
                      <br />

                      <Button className={style.btn} name='Submit' />
                    </form>
                  </>
                )}
              </>
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
