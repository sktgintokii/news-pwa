export default async (url) => {
  if ('caches' in window) {
    const response = await caches.match(url);
    if (response) {
      return response.json();
    }
  }
  throw new Error('Cache not found');
};
