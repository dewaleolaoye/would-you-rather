import style from './QuestionCard.module.scss';
import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Button from '../Button/Button';
import faker from 'faker';

const QuestionCard = ({ pollCard }) => {
  const id = '123';
  const avatar = faker.image.avatar();
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    value ? setLoading(true) : setLoading(false);
  };

  return (
    <>
      <div className={style.card}>
        <div className={style.title}>Sarah Edo asks:</div>

        <div className={style.details}>
          <>
            <div className={style.avatar}>
              <img src={avatar} alt='question' />
            </div>

            <div className={style.content}>
              <>
                <h2>Would you rather</h2>
                {!pollCard ? (
                  <>
                    <p>...become a superhero...</p>

                    <Link to={`/poll/${id}`} className={style.btn}>
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
                        value='value1'
                        onChange={handleChange}
                      />
                      <label htmlFor='option1'>be a front-end Developer</label>

                      <br />
                      <br />

                      <input
                        type='radio'
                        id='option2'
                        name='question'
                        value='value2'
                        onChange={handleChange}
                      />
                      <label htmlFor='option2'>be a back-end Developer</label>

                      <br />
                      <br />

                      <Button
                        className={style.btn}
                        name='Submit'
                        disabled={!value && true}
                      />
                    </form>

                    {loading && <Redirect push to='/pollresult/123' />}
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
