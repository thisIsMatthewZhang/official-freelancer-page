<!--
@component
    - Navigation Bar Component
-->

<script lang="ts">
    import ScheduleBtn from "./ScheduleBtn.svelte";
    import Top from "./Top.svelte";
    import { Modal } from "flowbite-svelte";
    import { onMount } from "svelte";
    import "../../styles/global.css"
    import { on } from "svelte/events";

    const navItems = $state.raw([
        { label: "Matthew Zhang", target: "#"},
        { label: "What I Bring", target: "#what-i-bring"},
        { label: "Projects", target: "#projects"},
        { label: "About Me", target: "#about-me"},
    ]);
    let showMobileMenu = $state(false);
    let { screenBgColor }: { screenBgColor: string } = $props();
    const handleMobileMenuClick = () => showMobileMenu = !showMobileMenu; 
    const handleMobileMediaQuery = (evt: MediaQueryListEvent) => {
        if (!evt.matches) { // mobile menu items will never show upon mounting
            showMobileMenu = false;
        }
    }

    onMount(() => { 
        const mediaQueryList = window.matchMedia("(max-width: 767px)");
        on(mediaQueryList, "change", handleMobileMediaQuery);
    });
    

</script>
<nav class={ `${screenBgColor} warm-gradient` }>
    <button title="nav icon for mobile" onclick={handleMobileMenuClick} class={ `mobile-icon${showMobileMenu ? ' active' : ''}` }>
        <div class="nav-icon-line"></div>
        <div class="nav-icon-line"></div>
        <div class="nav-icon-line"></div>
    </button>
    <div class={ `nav-list${showMobileMenu ? ' mobile' : ''}` }>
        {#each navItems as item}
            {#if item.target == '#'}
                <Top target={item.target} label={item.label}/>
            {:else}
                <a href={item.target}> {item.label} </a>
            {/if}
        {/each}
        <ScheduleBtn isHomePage={ false } isMobile={ showMobileMenu } />
    </div>
</nav>

<style>
    /* for <a> in mobile, text color remains black */
    :global(a) { 
        text-decoration: none;
        color: black;
        font-family: sans-serif;
        font-style: normal;
        font-weight: bold;
        touch-action: manipulation;
    } 

    .nav-icon-line {
        display: block;
        width: 35px;
        height: 8px;
        background-color: black;
        border-radius: 50px;
    }

    .mobile-icon {
        display: flex;
        flex-direction: column;
        justify-self: end;
        align-self: end;
        cursor: pointer;
    }
    .mobile-icon.active {
        display: block;
    }
    .mobile-icon .nav-icon-line:nth-child(even) {
        margin-block: 3px 3px;
    }

    .nav-list {
        display: none;
    }
    .nav-list.mobile {
        display: flex;
        flex-direction: column;
    }


    /* CSS for desktop screens */
    @media only screen and (min-width: 767px) {
        nav {
            width: auto;
            height: auto;
            position: sticky;
            top: 0;
            z-index: 100;
            padding-block: 5px;
        }
        nav.bright-bg {
            color: black;
        }
        nav.dark-bg {
            color: white;
        }
        .nav-list {
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .nav-list a:not(:first-child) {
            margin-inline-end: 15px;
        }
        .nav-list a:first-child {
            
        }
        .mobile-icon {
            display: none
        }
    }
</style>