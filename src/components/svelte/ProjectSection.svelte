<script lang="ts">
    import "../../styles/global.css";
    import { Carousel, Controls, Button, ControlButton } from "flowbite-svelte";
    import { CaretRightOutline } from "flowbite-svelte-icons"
    import type { HTMLImgAttributes } from "svelte/elements";

    let images = $state.raw([
        {
            alt: "big branch plumbing hero page",
            src: "/big-branch-plumbing.webp",
        },
        {
            alt: "",
            src: "",
        },
        {
            alt: "",
            src: "",
        }
    ])
    let index = $state(0);
    let image: HTMLImgAttributes | undefined = $state();
</script>

<section id="projects">
    <div class="content-container">
        <h1> Projects </h1>
        <Carousel 
        {images} 
        bind:index 
        onchange={ (detail) => (image = detail) } 
        class="w-full h-full sm:w-full sm:h-full md:w-full md:h-full lg:w-[1100px] lg:h-[600px]">
            <Controls class="bg-gray-400 opacity-50"/>
        </Carousel>
        <div class="font-[Golos_Text] my-2 h-10 rounded-sm bg-gray-300 p-2 text-center dark:bg-gray-700 dark:text-white">
            {image?.alt}
        </div>
    </div>
</section>

<style>

    * {
        color: black;
    }
    h1 {
        font-family: "Golos Text", system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        font-size: 50px;
        line-height: 2.05;
        font-weight: 600;
        margin: 0 0 32px 32px;
        letter-spacing: -0.3px;
    }
    #projects {
        min-height: 100vh;
        width: 100vw;
        background: linear-gradient(to bottom, var(--warmBg), #ffb9b9, #ffdada);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .content-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 767px) {
        h1 {
            font-size: 40px;
        }
    }
</style>