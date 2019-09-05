<script>
    import { createEventDispatcher } from "svelte";

    export let title = "";
    export let id = null;
    export let done = false;

    const dispatch = createEventDispatcher();

    const remove = () => {
        dispatch("remove", id);
    };

    const toggle = () => {
        dispatch("toggle", id);
    };
</script>

<style>
    .done {
        text-decoration: line-through;
    }
</style>

<li data-id={id}>
    <span class="title" class:done>{title}</span>
    <button type="button" on:click={toggle}>Toggle</button>
    <button type="button" on:click={remove}>Remove</button>
</li>
