import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const Particle = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Particles
        id="tsparticles"
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