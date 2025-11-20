<!-- 
@component
- Component for Home Nav Link
- Corresponds with '#top' target in Nav component
-->

<script lang="ts">
    import "../../styles/global.css";
    const { label, target } = $props();
</script>

<div class="line-div">
    <a href={target}> {label} </a>
    <hr>
</div>

<style>
    a {
        margin-inline-end: 20px;
        font-size: 20px;
    }
    hr {
        width: 200px;
        border: 1px solid black;
    }

    .line-div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
</style>