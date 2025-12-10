<script lang="ts">
    import '../../styles/global.css';
    import { Gallery } from 'flowbite-svelte';
    import type { ImgType } from 'flowbite-svelte';

    const image1 = $state.raw({
        alt: "Big Branch Plumbing",
        src: "/big-branch-plumbing.webp",
    })

    const images = $state.raw([
        {
            alt: "Big Branch Plumbing",
            src: "/big-branch-plumbing.webp",
        },
        {
            alt: "Yum's Chinese Restaurant",
            src: "/yums-hero.png"
        },
    ])

    let main = $derived<ImgType>({
        alt: image1.alt,
        src: image1.src
    });
</script>

<section id="projects">
    <h1> Projects </h1>
    <img src={main.src} alt={main.alt} class="max-h-full max-w-[75%] rounded-lg bg-gray-100 object-cover">
    <Gallery class="gap-4">
        <Gallery class="grid-cols-4 mt-5 mx-5 py-10" items={images} {figure} />
        {#snippet figure(item)}
            <button type="button" class="cursor-pointer rounded-lg border-0 bg-transparent p-0 hover:opacity-70 focus-within:opacity-70 touch-manipulation" onclick={() => (main = item)}>
                <img src={item.src} alt={item.alt} class="rounded-lg" />
            </button>
        {/snippet}
    </Gallery>
</section>

<style>
    h1 {
        font-family: "Golos Text", system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        font-size: 50px;
        line-height: 2.05;
        font-weight: 600;
        margin: 0 0 32px 0;
        letter-spacing: -0.3px;
    }
    #projects {
        min-height: calc(100vh - 72px);
        width: 100%;
        background: linear-gradient(to bottom, var(--warmBg), #ffb9b9, #ffdada);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

</style>