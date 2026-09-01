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
    <motion.div className="w-100 h-100 bg-amber-700 rounded-4xl border border-white/40" ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{rotateX, rotateY}}>
      <img src={image}  alt={Name} className="w-100 h-100 rounded-4xl" />
      <div>
        <h1>{Name}</h1>
        <p>{note}</p>
      </div>
    </motion.div>
  )
}

export default Facetile
