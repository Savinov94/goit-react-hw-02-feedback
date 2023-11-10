import css from './Buttons.module.css';

const Buttons = ({ handleClick }) => {
  return (
    <div className={css.buttonsContainer}>
      <button className={css.button} onClick={handleClick('good')}>
        Good
      </button>
      <button className={css.button} onClick={handleClick('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={handleClick('bad')}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
