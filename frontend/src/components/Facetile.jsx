import { motion, useMotionValue, useTransform } from 'framer-motion';
import {useRef} from 'react';

const Facetile = ({image, Name, note}) => {
    const ref = useRef(null)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [-30, 30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const centerx = rect.left + rect.width / 2;
        const centery = rect.top + rect.height / 2;

        x.set(e.clientX - centerx);
        y.set(e.clientY - centery);
    } 

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    }
   return (
    <motion.div className="w-100 h-auto rounded-4xl border-2 shadow-2xl border-white/40" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{rotateX, rotateY}} drag dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}} dragElastic={0.2} whileTap={{scale: 0.9}}>
      <img src={image}  alt={Name} className="w-100 h-100 rounded-4xl" />
      <div>
        <motion.h1 drag className="ml-4 text-2xl text-red-500 font-extrabold ">{Name}</motion.h1>
        <p className="ml-30 text-lg text-gray-700">{note}</p>
      </div>
    </motion.div>
  )
}

export default Facetile
