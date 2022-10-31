import Particles from "react-tsparticles";
import { useCallback, useMemo } from "react";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const options = useMemo(() => {
    return {
      particles: {
        move: {
          enable: true,
          speed: 1,
        },
        size: {
          value: 2,
        },
      },
    };
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesBackground;
