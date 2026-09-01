import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: 'transparent' },
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 40 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.6 },
            size: { value: 2 },
            links: { enable: false },
            collisions: { enable: false },
          },
        }}
      />
    </div>
  );
};

export default Particle;
