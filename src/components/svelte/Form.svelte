<script lang="ts">
    import { Modal, Label, Input, Textarea, Button } from 'flowbite-svelte';
    import type { EventHandler } from 'svelte/elements';
    import emailjs from '@emailjs/browser';

    function handleFormSubmit() {
        try {
            emailjs.init({ publicKey: "x8aGnSPqceYdIMz7B" });
            const form = document.getElementById('request-form') as HTMLFormElement;
            emailjs.sendForm("service_iqxcs52", "template_joq93w9", form)
            .then(() => alert("sent!"))
            .catch((reason) => alert(reason));
        }
        catch (e) {
            alert("Error occurred when attempting to send form. Please try again.")
        }
    }
</script>


<form id="request-form" onsubmit={handleFormSubmit}>
    <Label for="first-name"> First Name </Label>
    <Input id="first-name" name="first-name" size="lg"  placeholder="First Name" required/>
    <Label for="last-name"> Last Name </Label>
    <Input id="last-name" name="last-name" size="lg" placeholder="Last Name" required/>
    <Label for="email"> Email </Label>
    <Input type="email" id="email" name="email" size="lg" placeholder="Email" required/>
    <Label for="message"> Message </Label>
    <Textarea id="message" name="message" placeholder="Please describe the project you have in mind" rows={10} cols={90}></Textarea>
    <Button type="submit" class="text-black cursor-pointer bg-[#ff6b6b]"> Submit </Button>
</form>


