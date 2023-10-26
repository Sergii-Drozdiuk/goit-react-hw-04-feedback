import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FeedbackOptions = ({ buttons, onChangeFeedback }) => {
  return (
    <div className='mb-4 flex h-12 w-full place-content-evenly items-center'>
      {buttons.map(button => (
        <button
          type='submit'
          key={button}
          className={clsx(
            button === 'good' &&
              'w-[70px] rounded-lg border-2 border-lime-400 bg-transparent px-2 py-1 text-center text-lime-400 hover:scale-110 hover:bg-lime-400 hover:text-black focus:scale-110 focus:bg-lime-400 focus:text-black active:scale-110 active:bg-lime-400 active:text-black',
            button === 'neutral' &&
              'w-[70px] rounded-lg border-2 border-yellow-400 bg-transparent px-2 py-1 text-center text-yellow-400 hover:scale-110 hover:bg-yellow-400 hover:text-black focus:scale-110 focus:bg-yellow-400 focus:text-black active:scale-110 active:bg-yellow-400 active:text-black',
            button === 'bad' &&
              'w-[70px] rounded-lg border-2 border-red-400 bg-transparent px-2 py-1 text-center text-red-400 hover:scale-110 hover:bg-red-400 hover:text-black focus:scale-110 focus:bg-red-400 focus:text-black active:scale-110 active:bg-red-400 active:text-black'
          )}
          onClick={() => {
            onChangeFeedback(button);
          }}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttons: PropTypes.array.isRequired,
  onChangeFeedback: PropTypes.func.isRequired,
};
