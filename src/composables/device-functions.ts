export function useDeviceFunctions () {
    function isMobileSize (size: String = '758') {
        return window.matchMedia(`(max-width: ${size}px)`).matches;
    }

    return {
        isMobileSize
    };
}
