<script lang="ts">
    import { Button, Endorsement, Skills } from "@ui";
    import { certifications } from "@stores";
</script>

<div class="content flex flex-col pb-24 gap-6">

    <div class="flex flex-col gap-3 mt-4">
        <h1 class="desktop:text-5xl text-white text-4xl font-semibold leading-[2.5rem] desktop:leading-tight text-pretty">Hey I'm Noel, Studying <br>  <span class="text-text font-bold">Cyber Security</span>.</h1>
        <h3 class="text-text text-pretty font-medium antialiased">A Specialist in Cyber Security, a Generalist in everything involving Computers, <br> engaged with emerging technologies and exploring new opportunities.</h3>
    </div>

    
    <div class="flex gap-3">
        <Button style="secondary" icon="lucide:github" text="Github" href="https://github.com/Nash-ken" />
        <Button style="secondary" icon="lucide:linkedin" text="LinkedIn" href="https://www.linkedin.com/in/noel-aczel-274655288/" />
    </div>

    <Skills />

    <h3 class="font-semibold text-white text-lg">Certifications</h3>

    <div class="flex desktop:flex-row flex-col gap-3">
        {#each certifications as {name, icon, link}}
            <Button style="anchor" icon={icon} text={name} href={link} />
        {/each}
    </div>

    <h3 class="text-lg text-white font-semibold">Endorsements</h3>

    <div class="flex flex-col desktop:flex-row gap-3">
        <Endorsement message="Noel is enthusiastic, polite, and friendly, with a strong drive to learn new things daily." />
        <Endorsement message="A true team player, Noel is praised by managers for his high standards and is always a pleasure to work with." />
    </div>
   
</div>