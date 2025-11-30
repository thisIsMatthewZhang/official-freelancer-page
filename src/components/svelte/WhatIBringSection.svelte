<script lang="ts">

    let containerStates = $state([
        { id: 'website', open: false },
        { id: 'mobile', open: false },
        { id: 'ai', open: false }
    ])

    function handleContainerClicks(event: Event) {
        const clickedBtn = event.target as HTMLButtonElement;
        const clickedBtnId = clickedBtn.id;
        containerStates.forEach(container => 
            container.open = (container.id == clickedBtnId) ? !container.open : false
        )
    }

</script>


<section id="what-i-bring">
    <div class="text-container">
        <h1> What Will I Bring </h1>
        <p>
            I've worked alongside clients on a variety of end-to-end applications. 
            Feel free to reach out if you have inquiries for any of the following: 
        </p>
    </div>
    <div class="dropdown-container">
        <button id="website" class="role-container" onclick={handleContainerClicks}>
            Websites
            {@render containerInfo(
                containerStates[0].id,
                [
                "I build modern, responsive websites that combine clean design with solid functionality.", 
                "From landing pages to full-scale frontend web applications, I create solutions optimized for performance, accessibility, and user experience across all devices."
                ]
            )}
        </button>
        <button id="mobile" class="role-container" onclick={handleContainerClicks}>
            Mobile Applications
            {@render containerInfo(
                containerStates[1].id, 
                [
                    "I develop native and cross-platform mobile applications for iOS and Android that users love.", 
                    "Whether you need a consumer-facing app or an internal business tool, I deliver intuitive interfaces backed by robust, scalable code."
                ]
            )}
        </button>
        <button id="ai" class="role-container" onclick={handleContainerClicks}>
            AI Tools
            {@render containerInfo(
                containerStates[2].id, 
                [
                    "I create custom AI solutions that solve real business problems.",
                    "From integrating existing AI models to building specialized tools for automation, data analysis, and intelligent workflows, I help you leverage AI technology effectively and practically."
                ]
            )}
        </button>
    </div>
    
    {#snippet containerInfo(containerId: string, [...paragraphs]: string[])}
        {#if containerStates.find((container) => container.id === containerId)?.open}
            <div class="info-dropdown">
                {#each paragraphs as paragraph}
                    <p> {paragraph} </p>
                {/each}
            </div>
        {/if}
    {/snippet}
</section>

<style>
    * {
        color: white
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
        font-size: 32px;
        font-weight: 500;
        max-width: 45ch;
    }
    #what-i-bring {
        min-height: calc(100vh - 72px);
        width: 100%;
        background: var(--darkBg);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .text-container {
        justify-self: center;
        align-self: center;
    }

    .dropdown-container {
        margin-block-start: 24px;
        width: 75%;
    }

    .info-dropdown p {
        font-size: 24px;
        margin-block-end: 12px;
    }

    .role-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: left;
        width: 100%;
        background: #02616C;
        border-radius: 15px;
        cursor: pointer;
        font-size: 32px;
        font-weight: 600;
        padding: 24px;
        margin-block-start: 8px;
        
    }
    .role-container:focus,
    .role-container:hover {
        transform: translateY(-3px);
        box-shadow: 0 18px 36px rgba(0,0,0,0.12);
        outline: 3px solid rgba(255,255,255,0.18);
        transition: all 0.2s ease-in-out;
    }

    @media (max-width: 1024px) and (orientation: landscape) {
        h1 {
            font-size: 40px;
        }
        p {
            font-size: 16px;
            max-width: 55ch;
        }
        .info-dropdown p {
            font-size: 18px;
            max-width: 30ch;
            margin-inline-start: 12px;
        }
        .dropdown-container {
            width: 85%;
            margin-block-end: 24px;
        }
        .role-container {
            font-size: 20px;
        }
    }

    @media (max-width: 1024px) and (orientation: portrait) {
        h1 {
            font-size: 40px;
        }
        p {
            font-size: 20px;
            max-width: 40ch;
            margin-inline: 12px;
        }
        .info-dropdown p {
            font-size: 12px;
            max-width: 30ch;
            margin-inline-start: 12px;
        }
        .dropdown-container {
            width: 85%;
            margin-block-end: 24px;
        }
        .role-container {
            font-size: 20px;
        }
    }
</style>