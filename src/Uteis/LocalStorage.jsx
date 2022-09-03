export const addLocalStorage = (item) => {
  const storage = JSON.parse(localStorage.getItem('favorites')) || [];

  const newItem = storage.filter(({ id }) => id !== item._source.id);
  const objFavorite = {
    id: item._source.id,
    title: item._source.title,
    description: item._source.description,
  };
  localStorage.setItem('favorites', JSON.stringify([...newItem, objFavorite]));
};

export const removeLocalStorage = (item) => {
  const storage = JSON.parse(localStorage.getItem('favorites')) || [];

  const newFavorites = storage.filter(({ id }) => id !== item._source.id);
  localStorage.setItem('favorites', JSON.stringify([...newFavorites]));
};
