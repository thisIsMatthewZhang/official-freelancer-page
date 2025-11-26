<script lang="ts">
    import '../../styles/global.css';
    import { Modal } from 'flowbite-svelte';
    import Form from './Form.svelte';

    let openModal = $state(false);
</script>

<section class="hero" aria-labelledby="hero-heading">
  <div class="hero-inner">
    <div class="hero-left">
        <img src='/src/assets/matthew-w.webp' alt="Matthew Zhang portrait">  
    </div>

    <div class="hero-right">
      <h1 id="hero-heading" class="hero-title">
        Hi, I'm Matthew! I help others build full stack applications and AI-powered products
      </h1>

      <p class="hero-sub">
        I have 4 years of experience creating websites, mobile apps, and AI tools for startups and individuals alike. Got an idea you want brought into reality? Hit the button below and let's chat!
      </p>

      <div class="hero-cta-wrap">
        <button class="hero-cta" type="button" aria-label="Let's Schedule" onclick={ () => openModal = true }> Let's Schedule </button>
        <Modal title="Request Form" form bind:open={openModal}>
            <Form />
        </Modal>
      </div>
    </div>
  </div>
</section>

<style>
  :global(:root) {
    --warmBg: #ffa5a5;
    --cta-strong: #ff6b6b; /* pairs with warm gradient */
    --content-max: 1100px;
  }

  .hero {
    min-height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, var(--warmBg), #ffb9b9, #ffdada);
    color: #2b2b2b;
    padding: 36px 20px;
  }

  .hero-inner {
    max-width: var(--content-max);
    width: 100%;
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 32px;
    align-items: center;
  }

  /* Left image placeholder */
  .hero-left {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    border-radius: 50px;
  }

  .hero-right {
    padding-right: 12px;
  }

  .hero-title {
    font-family: "Golos Text", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    font-size: 36px;
    line-height: 1.05;
    font-weight: 900;
    margin: 0 0 12px 0;
    letter-spacing: -0.3px;
    color: #1b1b1b;
  }

  .hero-sub {
    font-family: "Libre Franklin", system-ui, sans-serif;
    font-size: 16px;
    margin: 0 0 18px 0;
    color: #2d2d2d;
    max-width: 52ch;
  }

  .hero-cta {
    font-family: "Golos Text", sans-serif;
    font-weight: 800;
    padding: 12px 20px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    background: var(--cta-strong);
    color: white;
    font-size: 16px;
    transition: transform .14s ease, box-shadow .14s ease;
  }
  .hero-cta:active { transform: translateY(1px); }
  .hero-cta:focus,
  .hero-cta:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 36px rgba(0,0,0,0.12);
    outline: 3px solid rgba(255,255,255,0.18);
  }

  /* Responsive: mobile-first adjustments */
  @media (max-width: 1024px) {
    .hero-inner { grid-template-columns: 1fr; gap: 20px; text-align: center; }
    .hero-left { display: none; }
    .hero-right { order: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; }
    .hero-title { font-size: 32px; }
  }

  @media (max-width: 767px) {
    .hero {
      padding: 28px 18px;
      min-height: calc(100vh - 72px);
    }


    .hero-left { display: none; }

    .hero-inner { grid-template-columns: 1fr; text-align: left; }
    .hero-title { font-size: 28px; }
    .hero-sub { font-size: 15px; }
    .hero-cta { width: auto; }
  }

  @media (min-width: 1600px) {
    .hero-title { font-size: 44px; }
  }
</style>
