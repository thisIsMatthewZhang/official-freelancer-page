<script lang="ts">
    import '../../styles/global.css';
    import emailjs from '@emailjs/browser';
    let { isMobile }: { isMobile: boolean } = $props();

    function validateForm() {
        try {
            emailjs.init({publicKey: "x8aGnSPqceYdIMz7B"});
            // const serviceId = process.env.SERVICE_ID as string;
            // const templateId = process.env.CONTACT_US_TEMPLATE_ID as string;
            const form = document.getElementById('contact-form') as HTMLFormElement;
            emailjs.sendForm("service_iqxcs52", "template_joq93w9", form)
            .then(() => alert("sent!"))
            .catch((reason) => alert(reason));
        }
        catch (error) {
            alert(`Error occurred when attempting to send form completion email: ${error}`, );
        }
    }


</script>

<form id="contact-form" class={`${isMobile ? 'mobile' : ''}`} onsubmit={validateForm}>
    <input type="hidden" name="time" value="Mar 10 2025 08:46">
    <label for="first-name"> 
        <input type="text" name="first-name" id="first-name" required placeholder="First Name*">
    </label>
    <label for="last-name"> 
        <input type="text" name="last-name" id="last-name" required placeholder="Last Name*">
    </label>
    <label for="email"> 
        <input type="email" name="email" id="email" required placeholder="Email*">
    </label>
    <textarea name="message" id="message" rows="10" placeholder="Please provide information such as a description of your project*"></textarea>
    <button type="submit" class="home-btn"> Submit </button>
</form>

<style>
    form {
        background: whitesmoke;
        padding-inline: 20px;
    }
    form :nth-child(n) {
        margin-block: 10px;
    }
    form.mobile {

    }

    input {
        padding-inline-start: 2px;
    }

    input:focus {
        border: 2px solid rgb(175, 246, 255);
        outline: none;
    }

    textarea {
        width: 100%;
        height: 100%;
    }
</style>