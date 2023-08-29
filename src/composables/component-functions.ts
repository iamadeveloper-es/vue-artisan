import { getCurrentInstance } from 'vue'

export function useComponentFunctions() {
    const instance = getCurrentInstance()

    function randomId() {
        const id = `${instance?.type.name}-${instance?.uid}`
        return id
    }

    return {
        randomId
    }
}
