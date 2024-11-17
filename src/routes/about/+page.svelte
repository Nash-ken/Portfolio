<script lang="ts">

  import Main from "$lib/Components/Main/Main.svelte";
  import { Send } from "$lib";

</script>


<Main>
    <div class="grid grid-cols-1 gap-6 desktop:grid-cols-2">
       <div class="space-y-6">
        <div class="space-y-2">
            <h1 class="text-4xl font-semibold tracking-tighter md:text-5xl/tight">About Me</h1>
            <p class="max-w-[600px] text-text md:text-xl/relaxed desktop:text-base/relaxed xl:text-xl/relaxed">Hi I am Noel, currently a Student based in the <span class="text-white">UK</span> Studying <span class="text-white">Cyber Security</span>. I started my journey in 2018 and began learning everything Cyber Security next to my second interest which is <span class="text-white">Software Development</span>. I am engaged in <span class="text-white">emerging technologies</span> to enhance my skills to optimize my process and creating solutions.</p>
        </div>

        <div class="space-y-2">
            <h3 class="text-lg font-semibold">Background</h3>
            <p class="text-text">I developed a strong fascination for Cybersecurity in 2020, recognizing its rapidly evolving nature which offers exciting challenges beyond the limitations of my formal education. With cybersecurity's continuous growth and innovation, I'm eager to contribute to its advancement and expand my expertise.</p>
        </div>

        <div class="space-y-2">
            <h3 class="text-lg font-semibold">Hobbies</h3>
            <p class="text-text">Walking, cooking, video games, coding, table tennis and reading.</p>
        </div>

        <div class="space-y-2">
            <h3 class="text-lg font-semibold">Interests</h3>
            <p class="text-text">Emerging Tech, AI, Security and Software.</p>
        </div>
       
    </div>

    <div class="space-y-4">
        <img src="" alt="me" class="aspect-square border border-border rounded-md">

        <div class="rounded-xl border border-border bg-accent text-text shadow w-full">
            <div class="p-6 space-y-6 relative overflow-hidden z-20">
                <div class="size-10 rounded-full bg-primary border border-border text-white flex items-center justify-center"><Send size="16" /></div>
                <div>
                    <h3 class="font-medium text-lg text-white">Connect with me.</h3>
                    <p class=" text-text font-medium text-xs">Wish to reach out to me?</p>
                </div>
                <a href="/contact" class="inline-flex items-center justify-center whitespace-nowrap font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-borderalt border text-white shadow hover:opacity-[0.64] transition-all duration-300 h-8 rounded-md px-3 text-xs">
                    Contact
                </a>
            </div>
           </div>
    </div>

   
</Main>