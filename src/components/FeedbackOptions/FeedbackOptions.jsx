import PropTypes from 'prop-types';

export const FeedbackOptions = ({ buttons, onChangeFeedback }) => {
  return (
    <div className='mb-4 flex h-12 w-full place-content-evenly items-center'>
      {buttons.map(button => (
        <button
          type='submit'
          key={button.text}
          style={{ color: button.color }}
          className='w-[70px] rounded-lg border-2 px-2 py-1 text-center hover:scale-110 focus:scale-110 focus:bg-emerald-700'
          onClick={() => {
            onChangeFeedback(button.text);
          }}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChangeFeedback: PropTypes.func.isRequired,
};
