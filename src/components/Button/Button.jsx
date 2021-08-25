import style from './Button.module.scss';

const Button = ({ name, className, onClick, disabled }) => {
  return (
    <button
      className={`${style.button} ${className}`}
      disabled={disabled}
      onClick={onClick}
      style={{ cursor: disabled === true ? 'not-allowed' : 'pointer' }}
    >
      {name}
    </button>
  );
};

export default Button;
