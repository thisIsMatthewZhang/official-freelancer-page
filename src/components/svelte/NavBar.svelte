<script lang="ts">
  import { onMount } from 'svelte';
  import { Modal } from 'flowbite-svelte';
  import Form from './Form.svelte';
  let isOpen = $state(false);
  let openModal = $state(false);

  // close overlay on escape
  onMount(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') isOpen = false;
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const toggle = () => isOpen = !isOpen;
  const close = () => isOpen = false;
</script>

<nav class="nav">
  <div class="nav-inner">
    <div class="brand">
      <!-- Avatar placeholder: replace with <img> when ready -->
      <div class="avatar" aria-hidden="true">
        <!-- PLACEHOLDER: drop your avatar image here later -->
        <span class="avatar-text"> Matthew Zhang </span>
      </div>

      <!-- thin separator line between avatar and items on desktop -->
      <div class="sep" aria-hidden="true"></div>
    </div>

    <!-- Desktop nav -->
    <ul class="nav-items">
      <li><button class="nav-link" type="button">What I Bring</button></li>
      <li><button class="nav-link" type="button">Projects</button></li>
      <li><button class="nav-link" type="button">About Me</button></li>
    </ul>

    <!-- Transparent CTA -->
    <div class="cta-wrap">
      <button class="cta-transparent" type="button" aria-label="Let's Schedule" onclick={ () => openModal = true }> Let's Schedule </button>
      <Modal title="Request Form" form bind:open={openModal}>
        <Form />
      </Modal>
    </div>

    <!-- Hamburger for mobile -->
    <button class="hamburger" aria-label="Open menu" onclick={toggle} aria-expanded={isOpen}>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
      <span class="burger-line"></span>
    </button>
  </div>

  <!-- Mobile overlay menu (full viewport) -->
  {#if isOpen}
  <div class="overlay" role="dialog" aria-modal="true">
    <div class="overlay-inner">
      <button class="overlay-close" onclick={close} aria-label="Close menu">&times;</button>

      <div class="overlay-avatar">
        <!-- Re-use avatar placeholder -->
        <div class="avatar large" aria-hidden="true"><span class="avatar-text"> Matthew Zhang </span></div>
      </div>

      <ul class="overlay-nav">
        <li><button class="overlay-link" onclick={close}>What I Bring</button></li>
        <li><button class="overlay-link" onclick={close}>Projects</button></li>
        <li><button class="overlay-link" onclick={close}>About Me</button></li>
      </ul>

      <div class="overlay-cta">
        <button class="cta-transparent large" type="button" onclick={ () => openModal = true }>Let's Schedule</button>
        <Modal title="Request Form" form bind:open={openModal}>
            <Form />
        </Modal>
      </div>
    </div>
  </div>
  {/if}
</nav>

<style>
  :global(:root) {
    --nav-height: 72px;
    --glass: rgba(255,255,255,0.06);
  }

  .nav {
    position: sticky;
    top: 0;
    z-index: 80;
    backdrop-filter: blur(6px);
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    border-bottom: 1px solid rgba(0,0,0,0.04);
  }

  .nav-inner {
    max-width: 1100px;
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 20px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* Avatar placeholder */
  .avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(180deg, #ffffff10, #00000008);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .avatar.large { width: 88px; height: 88px; border-radius: 12px; }

  .avatar-text {
    font-family: "Golos Text", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    font-weight: 700;
    color: #222;
  }

  .sep {
    width: 1px;
    height: 28px;
    background: rgba(0,0,0,0.08);
    margin-left: 20px;
  }

  /* Desktop nav items */
  .nav-items {
    display: flex;
    gap: 20px;
    list-style: none;
    margin-left: 12px;
    margin-right: auto;
    padding: 0;
  }

  .nav-link {
    background: transparent;
    border: 0;
    padding: 8px 6px;
    font-family: "Libre Franklin", system-ui, sans-serif;
    font-weight: 600;
    cursor: pointer;
  }
  .nav-link:hover,
  .nav-link:focus { outline: none; text-decoration: underline; }

  /* CTA in nav: fully transparent background (per spec) */
  .cta-wrap {
    margin-left: auto;
  }

  .cta-transparent {
    background: transparent;
    border: 1px solid rgba(0,0,0,0.06);
    padding: 8px 14px;
    border-radius: 999px;
    font-weight: 700;
    cursor: pointer;
    font-family: "Golos Text", system-ui, sans-serif;
  }
  .cta-transparent:focus,
  .cta-transparent:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.06);
  }

  /* Hamburger (hidden on desktop) */
  .hamburger {
    display: none;
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
  }
  .burger-line {
    display: block;
    width: 22px;
    height: 2px;
    background: #111;
    margin: 3px 0;
  }

  /* Overlay menu (mobile) */
  .overlay {
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    z-index: 200;
    background: rgba(255, 225, 210, 0.98);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .overlay-inner {
    width: 100%;
    max-width: 720px;
    padding: 36px;
    text-align: center;
  }
  .overlay-close {
    position: absolute;
    top: 18px;
    right: 18px;
    font-size: 28px;
    background: none;
    border: none;
    cursor: pointer;
  }
  .overlay-avatar { margin-bottom: 18px; }
  .overlay-nav { 
    list-style: none; 
    padding: 0; 
    margin: 24px; 
    display: grid; 
}
  .overlay-link {
    font-size: 24px;
    font-weight: 700;
    background: none;
    border: none;
    padding: 5px 10px;
    margin: 18px 0;
    cursor: pointer;
    touch-action: manipulation;
  }
  .overlay-link:hover,
  .overlay-link:active {
    text-decoration: underline;
    /* touch-action: manipulation; */
  }
  .overlay-cta { margin-top: 14px; }

  /* Responsive breakpoints */
  @media (max-width: 767px) {
    .nav-items { display: none; }
    .cta-wrap { display: none; }
    .hamburger { display: inline-flex; flex-direction: column; margin-left: auto; }

    .sep { display: none; } /* hide separator to save space */
  }
</style>
