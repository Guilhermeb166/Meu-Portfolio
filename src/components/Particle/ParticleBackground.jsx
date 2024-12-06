import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = async (main) => {
    // Carrega o módulo completo para maior flexibilidade
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent", // Fundo transparente
          },
        },
        fpsLimit: 60, // Limite de FPS para performance
        particles: {
          number: {
            value: 80, // Quantidade de partículas
            density: {
              enable: true,
              area: 800, // Densidade
            },
          },
          color: {
            value: "#ffffff", // Cor das partículas
          },
          links: {
            enable: true,
            color: "#ffffff", // Cor das linhas
            distance: 150, // Distância entre as partículas para criar links
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2, // Velocidade de movimento
            direction: "none",
            outModes: {
              default: "out", // Partículas saem da tela e reaparecem
            },
          },
          opacity: {
            value: 0.5, // Opacidade das partículas
          },
          size: {
            value: 5, // Tamanho das partículas
          },
        },
        // Configuração para interação no hover
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Modo "repulse" faz as partículas se afastarem ao passar o mouse
            },
          },
          modes: {
            repulse: {
              distance: 100, // Distância em que o efeito ocorre
              duration: 0.4, // Duração do efeito
            },
          },
        },
      }}
    />
  );
}
