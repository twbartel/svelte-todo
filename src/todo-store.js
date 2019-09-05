import { writable } from "svelte/store";

const store = writable([]);

const newItem = title => ({
    id: Math.random(),
    title,
    done: false
});

const addItem = title => {
    store.update(items => [...items, newItem(title)]);
};

const toggleIfId = id => item => {
    if (item.id === id) {
        return {
            ...item,
            done: !item.done
        };
    }
    return item;
};

const toggleItem = id => {
    store.update(items => items.map(toggleIfId(id)));
};

const removeItem = id => {
    store.update(items => items.filter(item => item.id !== id));
};

export const todoStore = {
    subscribe: store.subscribe,
    addItem,
    toggleItem,
    removeItem
};
