<script>
  import { Github, LinkedIn } from "$lib";


  import Main from "$lib/Components/Main/Main.svelte";

</script>


{#snippet form()}
    <div class="border border-border bg-accent shadow w-full rounded-md">
        <div class="flex flex-col space-y-1.5 p-6"><h3 class="font-semibold leading-none tracking-tight">Send a message</h3><p class="text-sm text-text">Fill out the form below and i'll get back to you as soon as possible.</p></div>
        <div class="p-6 pt-0">
            <form class="grid gap-4">
                <div class="grid grid-cols-1 desktop:grid-cols-2 gap-3">
                    <div class="grid gap-2">
                        <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">Name</label>
                        <input class="flex h-9 w-full rounded-md border border-borderalt bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Enter your name" value="" required></div>
                        <div class="grid gap-2">
                            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
                            <input class="flex h-9 w-full rounded-md border border-borderalt bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="Enter your email" type="email" value="" required></div>
                        </div>
                        <div class="grid gap-2">
                            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="message">Message</label>
                            <textarea class="flex w-full rounded-md border border-borderalt bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-text focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px]" id="message" placeholder="Enter your message" required></textarea>
                        </div>
                        <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary border-borderalt border text-primary-foreground shadow hover:opacity-[0.64] transition-all duration-300 h-9 px-4 py-2 w-full" type="submit">Send Message</button>
                    </form>
                </div>
    </div>
{/snippet}

{#snippet divider()}
<div>
    <div class="flex">
        <div class="w-full h-fit my-auto border-t border-border"></div>
        <h1 class="w-fit text-text px-6">or</h1>
        <div class="w-full my-auto h-0 border-t border-border"></div>
    </div>
   </div>
{/snippet}


<Main>
    <div class="space-y-2">
        <h1 class="text-4xl font-semibold tracking-tighter md:text-5xl/tight">Contact</h1>
        <p class="max-w-[600px] text-text md:text-xl/relaxed desktop:text-base/relaxed xl:text-xl/relaxed">Want to reach out to me?</p>
    </div>

    {@render form()}
    {@render divider()}

    <div class="grid grid-cols-3 gap-3">
        <a href="https://github.com/Nash-ken"	class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border shadow-sm bg-accent hover:text-text hover:opacity-[0.64] transition-all duration-300 h-9 px-4 py-2 gap-2">
            <Github size="16" />
            <p>Github</p>
        </a>

        <a href="https://www.linkedin.com/in/noel-aczel-274655288/" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border shadow-sm bg-accent hover:text-text hover:opacity-[0.64] transition-all duration-300 h-9 px-4 py-2 gap-2">
            <LinkedIn size="16" />
            <p>LinkedIn</p>
        </a>

        <a href="https://www.linkedin.com/in/noel-aczel-274655288/" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border shadow-sm bg-accent hover:text-text hover:opacity-[0.64] transition-all duration-300 h-9 px-4 py-2 gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" {...$$props}>
                <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12" />
            </svg>
            <p>Discord</p>
        </a>
    </div>
</Main>