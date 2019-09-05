<script>
    import TodoItem from "./TodoItem.svelte";
    import { todoStore } from "./todo-store.js";

    let inputElem = null;

    const onItemRemove = event => {
        todoStore.removeItem(event.detail);
    };

    const onItemToggle = event => {
        todoStore.toggleItem(event.detail);
    };

    const onAddClick = event => {
        todoStore.addItem(inputElem.value.trim());
        inputElem.value = "";
        inputElem.focus();
    };
</script>

<style>
    .form-controls {
        margin: 1rem;
    }
</style>

<div class="form-controls">
    <input type="text" bind:this={inputElem} bind />
    <button type="button" on:click={onAddClick}>Add</button>
</div>
<ul>
    {#each $todoStore as item}
        <TodoItem
            title={item.title}
            done={item.done}
            id={item.id}
            on:remove={onItemRemove}
            on:toggle={onItemToggle} />
    {/each}
</ul>
