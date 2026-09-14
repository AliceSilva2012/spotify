document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
    {name: 'Jorge & Mateus', image: './img/jorgeemateus.jpeg'},
    {name: 'Dua Lipa', image: './img/dualipa.jpeg'},
    {name: 'Grupo Revelação', image: './img/revelacao.png'},
    {name: 'Turma do Pagode', image: './img/pagode.jpeg'},
    {name: 'Pharrell Willians', image: './img/pharrell.png'},
];

const albumsData = [
    {name: 'Feel It', artist: 'd4vd', image: './img/feel.png', preview: 'url_do_audio_aqui'},
    {name: 'Chess', artist: 'Joyful', image: './img/chess.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Happy', artist: 'Pharrell Willians', image: './img/happy.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'We dont talk anymore', artist: 'Charlie Puth & Selena Gomez', image: './img/anymore.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Im Still Standing', artist: 'Taron Egerton', image: './img/sing.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Dont You Worry Bout A Thing', artist: 'Tori Kelly', image: './img/sing.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Levitating (feat. DaBaby)', artist: 'Dua Lipa', image: './img/levitating.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Dont Start Now', artist: 'Dua Lipa', image: './img/start.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Timber', artist: 'Pitbull, Kesha', image: './img/timber.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Dancin', artist: 'Aron Smith, Krono, Luvli', image: './img/dancin.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Shake It Off', artist: 'Nick Kroll, Resse Witherspoon', image: './img/sing.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Deixa Acontecer', artist: 'Grupo Revelação', image: './img/acontecer.png', preview: 'url_do_audio_aqui'},
    {name: 'Camisa 10', artist: 'Turma do Pagode', image: './img/camisa10.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'O Mundo É Tão Pequeno - Ao Vivo', artist: 'Jorge & Mateus', image: './img/pequeno.jpeg', preview: 'url_do_audio_aqui'},
    {name: 'Flor - Ao Vivo', artist: 'Jorge & Mateus', image: './img/flor.jpeg', preview: 'url_do_audio_aqui'}
]; 

const artistsGrid = document.querySelector('.artists-grid')
const albumsGrid = document.querySelector('.albums-grid')

artistsData.forEach(artist => { //o artistsData vira artist (pro card ficar um artista de cada vez)
            const artistCard = document.createElement('div')
            artistCard.classList.add('artist-card')

            //pega as informações e faz uma div no HTML
            artistCard.innerHTML = ` 
                <img src= "${artist.image}" alt= "${artist.name}">
                <div>
                    <h3>${artist.name}</h3>
                    <p>Artista</p>
                </div>
            `
            artistsGrid.appendChild(artistCard) // eu fiz a div, aogra eu lanço pro HTML
    })

    albumsData.forEach(album => { //o artistsData vira artist (pro card ficar um artista de cada vez)
            const albumCard = document.createElement('div')
            albumCard.classList.add('artist-card')

            //pega as informações e faz uma div no HTML
            albumCard.innerHTML = ` 
                <img src= "${album.image}" alt= "${album.name}">
                <div>
                    <h3>${album.name}</h3>
                    <p>${album.artist}</p>
                </div>
            `
            albumCard.addEventListener('click', async () => {
    // pesquisando o nome...
    const termoBusca = `${album.name} ${album.artist}`;
    const termoFormatado = termoBusca.replaceAll(' ', '+');
    const url = `https://itunes.apple.com/search?term=${termoFormatado}&entity=song&limit=1`;

    try {
        // busca a musica na api 
        const resposta = await fetch(url);
        const dados = await resposta.json();

        if (dados.results.length > 0) {
            audioInvisivel.src = dados.results[0].previewUrl;
            audioInvisivel.play();
        }
    } catch (erro) {
        console.error('Erro ao buscar o áudio:', erro);
    }
});

            albumsGrid.appendChild(albumCard) // eu fiz a div, aogra eu lanço pro HTML
    })
})

const audioInvisivel = new Audio();
const albumsGrid = document.querySelector('.albums-grid');

async function buscarMusicas (termoDigitado) {
    const termoFormatado = termoDigitado.replaceAll(' ', '+');
    const url = `https://itunes.apple.com/search?term=${termoFormatado}&entity=song&limit=6`;

    try {
        const resposta = await fetch(url); 
        const dados = await resposta.json();
        albumsGrid.innerHTML = '';

        dados.results.forEach(musica => {
            const albumCard = document.createElement('div');
            albumCard.classList.add('album-card');

            albumCard.innerHTML = `
                <img src= "${musica.artworkUrl100.replace('100x100', '300x300')}" alt="${musica.trackName}">
                <p><strong>${musica.trackName}</strong></p>
                <p style="font-size: 12px; color: #a7a7a7;">${musica.artistName}</p>
            `;

            albumCard.addEventListener('click', () => {
                audioInvisivel.src = musica.previewUrl;
                audioInvisivel.play();
            });
            albumsGrid.appendChild(albumCard);
        });
    }
    catch (erro) {
        alert('Sinto muito, música não encontrada no momento!');
    }
}

const barraPesquisa = document.querySelector('.search-bar input');

barraPesquisa.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const termoDigitado = barraPesquisa.value
        buscarMusicas(termoDigitado);
    }
})
