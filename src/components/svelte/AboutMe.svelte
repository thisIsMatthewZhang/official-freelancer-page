<script lang="ts">

</script>

<section id="about-me">
    <div> 
        <h1> About Me </h1>
        <p> My name is Matthew Zhang </p>
        <p>
            I began my independent practice as a way to help others bring their vision into reality. My enthusiasm
            for building effective products coupled with my ability to work alongside a team means you can be assured 
            that you will be receiving only the most cutting-edge outcome. 
        </p>
        <p>
            I am currently based in the USA in Memphis TN, and have worked with clients ranging from those in the local area 
            to those residing out of state.
        </p>
    </div>
</section>

<style>
    * {
        color: white;
    }
    h1 {
        font-family: "Golos Text", system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        font-size: 50px;
        line-height: 2.05;
        font-weight: 600;
        margin: 0 0 32px 0;
        letter-spacing: -0.3px;
    }

    p {
        font-family: "Golos Text", system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        font-size: 24px;
        margin-block: 16px;
        max-width: 35ch;

    }

    #about-me {
        min-height: calc(100vh - 72px);
        width: 100%;
        background: var(--darkBg);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media only screen and (max-width: 767px) {
        h1 {
            font-size: 40px;
        }
        p {
            font-size: 16px;
        }
    }

</style>