import PropTypes from 'prop-types';

export const FeedbackOptions = ({ buttons, onChangeFeedback }) => {
	return (
		<div className='mb-4 flex h-12 w-full place-content-evenly items-center'>
			{buttons.map(button => (
				<button
					type='submit'
					key={button}
					className='w-[70px] rounded-lg bg-emerald-500 px-2 py-1 text-center hover:scale-110 hover:bg-emerald-700 focus:scale-110 focus:bg-emerald-700'
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
	buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
	onChangeFeedback: PropTypes.func.isRequired,
};