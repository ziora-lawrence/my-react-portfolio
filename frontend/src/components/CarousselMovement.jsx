import {useState} from 'react';
import {motion} from 'framer-motion';
import Project from '../Data/Project';
import ProjectCard from './ProjectCard';
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
      <button onClick={prevSlide} className="bg-blue-500 text-white px-10 py-4 rounded-2xl hover:bg-blue-600">Previous</button>
      <button onClick={nextSlide} className="bg-blue-500 text-white px-10 py-4 rounded-2xl hover:bg-blue-600">Next</button>
    </div>
  )
}

export default CarousselMovement
