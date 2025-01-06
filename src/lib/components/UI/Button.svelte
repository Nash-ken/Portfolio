<script lang="ts">
    import Icon from "@iconify/svelte";

    type Button = {
        style: "default" | "outline" | "primary" | "secondary" | "anchor";
        icon: string;
        text: string;
        action?: () => void;
        href?: string;
    }

    let { style = "default", icon, text, action, href }: Button = $props();

    const styles: Record<Button["style"], string> = {
        default: "bg-primary text-white",
        outline: "border border-border rounded-md p-2 flex justify-start items-center space-x-4 hover:opacity-[0.64] transition-all duration-300",
        primary: "inline-flex w-fit text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-borderalt shadow-sm bg-primary hover:text-text hover:opacity-[0.64] transition-all duration-300 h-9 px-4 py-2 gap-2",
        secondary: "inline-flex w-fit text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium border border-border shadow-sm bg-accent hover:text-text hover:opacity-[0.64] transition-all duration-300 h-9 px-4 py-2 gap-2",
        anchor: "w-full border border-border rounded-md p-2 flex justify-start items-center space-x-4 hover:opacity-[0.64] transition-all duration-300 *:font-medium text-white"
    }

    const getStyle = (style: Button["style"]) => styles[style];

    function onclick() {
        if (href) {
            window.location.href = href;
        } else if (action) {
            action();
        }
    }

</script>

<button class={getStyle(style)} role={href ? "link": "button"} {onclick}>
    <Icon class={style === "anchor" ? "size-10 p-2.5 bg-accent rounded-lg text-textalt" : ""} icon={icon} />
    <span>{text}</span>
</button>

