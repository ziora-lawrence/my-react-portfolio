import {motion} from "framer-motion";


const Scrolldown = ({ content }) => {
  return (
    <div>
      <motion.button className="bg-blue-500 text-white px-10 py-4 rounded-2xl hover:bg-blue-600"
        whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.45, transition: { duration: 0.2 } }}

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

export default Scrolldown;
