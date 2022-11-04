export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=MX5kyrv9n4jZGaYgkc1NQlnZjLT68lC4&q=${category}&limit=10`
    const respuest = await fetch(url);
    const {data} = await respuest.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    return gifs;
}