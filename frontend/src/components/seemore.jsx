import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Seemore = ({ content }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projects');
  };

  return (
    <div>
      <motion.button
        className="gradient-mesh text-white px-10 py-4 rounded-2xl hover:text-pink-200"
        onClick={handleClick}
        whileHover={{ scale: 1.25, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {content}
      </motion.button>
    </div>
  );
};

export default Seemore;
