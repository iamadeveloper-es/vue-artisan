export function useCommonFunctions () {
  function bodyBlocked (status: Boolean = false) {
    const body = document.querySelector('body') as HTMLElement;
    return status ? (body.style.overflowY = 'hidden') : (body.style.overflowY = '');
  }

  return {
    bodyBlocked
  };
}
