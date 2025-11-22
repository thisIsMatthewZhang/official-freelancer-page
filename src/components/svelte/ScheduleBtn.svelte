<!-- 
@component
- Form Popup Button Component 
-->

<script lang="ts">
    import "../../styles/global.css";
    import { Modal } from "flowbite-svelte";
    import Form from "./Form.svelte";
    let { isHomePage, isMobile }: { isHomePage: boolean, isMobile: boolean } = $props();
    let defaultModal = $state(false);

</script>

<button type="button" class={ `${isHomePage ? 'home-btn' : 'nav-btn'}` } onclick={ () => defaultModal = true }>
    Let's Schedule
</button>
<Modal bind:open={defaultModal}>
    <Form isMobile/>
</Modal>

<style>
    :global(.home-btn) {
        width: max-content;
        border: 2px solid black;
        border-radius: 50px;
        color: black;
        font-family: sans-serif;
        font-weight: bold;
        background: #ec221f;
        padding-inline: 5px;
        padding-block: 7.5px;
        cursor: pointer;
    }
    .nav-btn {
        border: 2px solid black;
        border-radius: 50px;
        font-family: sans-serif;
        font-weight: bold;
        background: none;
        padding-inline: 5px;
        padding-block: 7.5px;
        cursor: pointer;
    }
</style>