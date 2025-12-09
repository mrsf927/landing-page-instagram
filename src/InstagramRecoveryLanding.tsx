import React from 'react';
import styles from './InstagramRecoveryLanding.module.css';

const InstagramRecoveryLanding: React.FC = () => {
  const handleCtaClick = () => {
    // Placeholder for future WhatsApp/Support link integration
    console.log('CTA Clicked - Initiate Support Flow');
    alert('Redirecionando para o atendimento...'); 
  };

  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Conta do Instagram hackeada, invadida ou suspensa, recupere seu acesso com apoio jurídico especializado
        </h1>
        <p className={styles.subtitle}>
          Time de advogados focado em casos digitais, atuando diariamente na recuperação de contas e perfis profissionais em todo o Brasil
        </p>
      </section>

      {/* VSL Section */}
      <section className={styles.vslContainer}>
        {/* Placeholder for Video Embed (YouTube/Vimeo/etc) */}
        <div className={styles.vslPlaceholder}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
            <line x1="7" y1="2" x2="7" y2="22"></line>
            <line x1="17" y1="2" x2="17" y2="22"></line>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <line x1="2" y1="7" x2="7" y2="7"></line>
            <line x1="2" y1="17" x2="7" y2="17"></line>
            <line x1="17" y1="17" x2="22" y2="17"></line>
            <line x1="17" y1="7" x2="22" y2="7"></line>
          </svg>
          <p>Espaço para Vídeo (VSL)</p>
          <small>Insira o iframe do vídeo aqui</small>
        </div>
      </section>

      {/* CTA Section */}
      <button className={styles.ctaButton} onClick={handleCtaClick}>
        Recuperar meu acesso agora
      </button>
    </main>
  );
};

export default InstagramRecoveryLanding;
