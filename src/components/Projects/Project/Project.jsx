import styles from './Project.module.css';
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from 'react';

export default function Project({ image, name, description, tech, url }) {
  const [isMobile, setIsMobile] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(false);

  // Detecta se o dispositivo é mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 481);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Bloqueia o scroll no body quando o overlay estiver ativo
  useEffect(() => {
    if (overlayVisible) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
    return () => document.body.classList.remove(styles.noScroll);
  }, [overlayVisible]);

  const openOverlay = () => setOverlayVisible(true);
  const closeOverlay = () => setOverlayVisible(false);

  return (
    <div className={`${styles.project} ${overlayVisible ? styles.noScroll : ''}`}>
      <p className={styles.name}>{name}</p>

      {/* Wrapper com clique no mobile */}
      <div
        className={styles.imageWrapper}
        onClick={() => isMobile && openOverlay()}
      >
        <img src={image} alt={name} className={styles.image} />
        {!isMobile && (
          <div className={styles.overlay}>
            <div className={styles.projectDetails}>
              <p className={styles.description}>{description}</p>
              <p className={styles.skills}>{tech}</p>
              <button className={styles.url}>
                <a href={url} target="blank" rel="external">
                  Acessar Projeto
                </a>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Overlay Centralizado para Mobile */}
      {overlayVisible && isMobile && (
        <div className={styles.mobileOverlay}>
          <div className={styles.overlayContent}>
            <IoMdClose className={styles.closeButton} onClick={closeOverlay}/>
            <p className={styles.description}>{description}</p>
            <p className={styles.skills}>{tech}</p>
            <button className={styles.url}>
              <a href={url} target="blank" rel="external">
                Acessar Projeto
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
