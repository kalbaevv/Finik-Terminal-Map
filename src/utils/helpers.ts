export function setLocalStorage(key: string, value: any) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(key, value);
  }
}

export function getItemFromLocalStorage(key: string) {
  if (typeof localStorage !== 'undefined') {
    return localStorage.getItem(key);
  } else {
    return JSON.stringify({ mockData: 'mockData' });
  }
}
