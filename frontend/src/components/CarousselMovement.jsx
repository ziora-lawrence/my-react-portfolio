import {useState} from 'react';
import {motion} from 'framer-motion';
import Project from '../Data/Project';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const CarousselMovement = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? Project.length - 1 : prevIndex - 1));
    }

    const nextSlide = () => {
        setCurrentIndex((nextIndex) => (nextIndex === Project.length - 1 ? 0 : nextIndex + 1));
    }

  return (
    <div>
        <div>
          <div className="relative h-94 w-full flex justify-center items-center "
          style={{perspective: 1200}}
          >
            {Project.map((project, index) => {
              const ofset = index - currentIndex;

              return (
                <motion.div
                  key={project.id}
                  className="absolute"
                 animate={{
                  x: ofset * 250,
                  z: -Math.abs(ofset) * 0,
                  rotateY: ofset * 60,
                  scale: ofset === 0 ? 1 : 0.8,
                  opacity: Math.abs(ofset) > 1 ? 0 : 1,
                  zIndex: 10 - Math.abs(ofset)
                 }}
                 transition={{
                  duration: 0.5
                 }}
                 >
                  <ProjectCard project={project} />
                </motion.div>
              )

            })}
          </div>
        </div>
    
    

        <div className="flex justify-center gap-6 mt-4">
          <button onClick={prevSlide} className="bg-blue-500 text-white px-10 py-4 rounded-2xl hover:bg-blue-600">
            <ChevronLeft />
          </button>
          <button onClick={nextSlide} className="bg-blue-500 text-white px-10 py-4 rounded-2xl hover:bg-blue-600">
            <ChevronRight />
          </button>
        </div>
    </div>
  )
}

export default CarousselMovement
