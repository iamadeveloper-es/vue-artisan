export function useImageFunctions() {
    // updated with your project's assets folder setup
    function getImageUrl(name: string, ext?: string) {
        return new URL(`../assets/images/${name}`, import.meta.url).href
    }

    return {
        getImageUrl
    }
}
