export const saveState = (key, state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(key, serializedState)
    } catch (error) {
        // ignore write errors
    }
};

export const loadState = (key) => {
    try {
        const serializedState = localStorage.getItem(key)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch ( error ){
        return undefined
    }
};
