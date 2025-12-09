import React from 'react';
import styles from './InstagramRecoveryLanding.module.css';

const InstagramRecoveryLanding: React.FC = () => {
  const handleCtaClick = () => {
    const phoneNumber = "5516995046471";
    const message = "Olá, perdi o acesso ao meu Instagram e preciso de ajuda jurídica para recuperar.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
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
        {/* @ts-ignore */}
        <wistia-player media-id="8hb5xjczjk" aspect="0.5625"></wistia-player>
      </section>

      {/* CTA Section */}
      <button
        id="assistiu_vsl"
        className={styles.ctaButton}
        onClick={handleCtaClick}
        data-conversao-unica="sb_click"
      >
        Recuperar meu acesso agora
      </button>
    </main>
  );
};

export default InstagramRecoveryLanding;
