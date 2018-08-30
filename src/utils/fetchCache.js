export default async (url) => {
  if ('caches' in window) {
    const response = await caches.match(url);
    if (response) {
      const json = await response.json();
      return json;
    }
  }
  throw new Error('Cache not found');
};
