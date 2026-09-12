import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Findout = ({content}) => {

  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/about');
    }
  return (

    <div>
      <motion.button className="bg-blue-500 text-white px-20 py-4 text-2xl font-extrabold rounded-2xl hover:bg-blue-600"
        whileHover={{ scale: 1.15, transition: { duration: 0.5} }}
        whileTap={{ scale: 0.45, transition: { duration: 0.2 }}}

        animate={{ y: [0, -10, 0] }}

        transition ={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={handleClick}
      >
        {content}
      </motion.button>
    </div>
  )
}

export default Findout
