import PropTypes from 'prop-types';
import { FcFeedback } from 'react-icons/fc';

export const Section = ({ title, children }) => {
  return (
    <section className='w-80 rounded-lg border p-2 max-[375px]:w-72'>
      <h2 className='mb-4 flex items-center justify-center gap-2 text-2xl'>
        <FcFeedback size={40} />
        {title}
      </h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
