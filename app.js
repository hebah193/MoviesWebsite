const form = document.querySelector('#searchForm');
const list = document.querySelector('#list')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            const newLI = document.createElement("LI");
            img.src = result.show.image.medium;
            newLI.append(img);
            list.append(newLI);
            document.body.append(img)
        }
    }
}