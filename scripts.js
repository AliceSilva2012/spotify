document.addEventListener('DOMContentLoaded', () => {
  const audioInvisivel = new Audio();
  let faixaTocandoAtual = null;

  const artistsData = [
  { name: 'Dua Lipa', image: './img/dualipa.jpeg' },
  { name: 'Grupo Revelação', image: './img/revelacao.png' },
  { name: 'Thalles Roberto', image: './img/thalles.jpeg' },
  { name: 'Seu Jorge', image: './img/seujorge.jpeg' },
  { name: 'Jorge & Mateus', image: './img/jorgeemateus.jpeg' }
];

  const albumsData = [
  { name: 'Chess', artist: 'Joyful', image: './img/chess.jpeg' },
  { name: 'Dont You Worry Bout A Thing', artist: 'Tori Kelly', image: './img/sing.jpeg' },
  { name: 'Levitating (feat. DaBaby)', artist: 'Dua Lipa', image: './img/levitating.jpeg' },
  { name: 'Dont Start Now', artist: 'Dua Lipa', image: './img/start.jpeg' },
  { name: 'Shake It Off', artist: 'Nick Kroll & Reese Witherspoon', image: './img/sing.jpeg' },
  { name: 'Deixa Acontecer', artist: 'Grupo Revelação', image: './img/acontecer.png' },
  { name: 'Camisa 10', artist: 'Turma do Pagode', image: './img/camisa10.jpeg' },
  { name: 'O Show Tem Que Continuar', artist: 'Mundo Bita & Péricles', image: './img/show.png' },
  { name: 'Flor', artist: 'Jorge & Mateus', image: './img/flor.jpeg' },
  { name: 'Galileu', artist: 'Fernandinho', image: './img/galileu.png' },
  { name: 'Arde Outra Vez', artist: 'Thalles Roberto', image: './img/arde.png' },
  { name: 'Eu Sou Blindado', artist: 'Thalles Roberto', image: './img/blindado.png' },
  { name: 'Não Pare', artist: 'Midian Lima', image: './img/naopare.png' },
  { name: 'IMPERFEITO', artist: 'Seven Plus, Rayssa Andreoli', image: './img/imperfeito.png' },
  { name: 'Me Leva Pra Casa', artist: 'Israel Subirá', image: './img/meleva.png' },
  { name: 'Genius', artist: 'LSD (Sia, Diplo, Labrinth)', image: './img/genius.png' },
  { name: 'Can\'t Take My Eyes Off You', artist: 'Frankie Valli', image: './img/canttake.png' },
  { name: 'I\'m Still Standing', artist: 'Taron Egerton', image: './img/sing.jpeg' },
  { name: 'Clareou', artist: 'Xande de Pilares', image: './img/clareou.png' },
  { name: 'UP!', artist: 'Forrest Frank, Connor Price', image: './img/up.png' },
  { name: '1000 Graus', artist: 'Renascer Praise', image: './img/1000graus.png' },
  { name: 'Mr. Blue Sky', artist: 'Electric Light Orchestra', image: './img/mrblue.png' },
  { name: 'Sweet Child O\' Mine', artist: 'Guns N\' Roses', image: './img/sweetchild.png' },
  { name: 'Só Depois', artist: 'Grupo Revelação', image: './img/sodepois.png' },
  { name: 'Burguesinha', artist: 'Seu Jorge', image: './img/burguesinha.png' },
  { name: 'Gone, Gone, Gone', artist: 'Phillip Phillips', image: './img/gone.png' },
  { name: 'The Avengers Theme', artist: 'Alan Silvestri', image: './img/avengers.png' },
  { name: 'Come and Get Your Love', artist: 'Redbone', image: './img/redbone.png' },
  { name: 'September', artist: 'Earth, Wind & Fire', image: './img/september.png' },
  { name: 'Sunflower', artist: 'Post Malone & Swae Lee', image: './img/sunflower.png' },
  { name: 'I Will Survive', artist: 'Demi Lovato', image: './img/survive.png' }
];

  const artistsGrid = document.querySelector('.artists-grid');
  const albumsGrid = document.querySelector('.albums-grid');
  const barraPesquisa = document.querySelector('.search-bar input');

  function tocarAudio(urlPreview) {
    if (!urlPreview) return;

    if (faixaTocandoAtual === urlPreview && !audioInvisivel.paused) {
      audioInvisivel.pause();
    } else {
      audioInvisivel.src = urlPreview;
      audioInvisivel.play();
      faixaTocandoAtual = urlPreview;
    }
  }

  function renderizarArtistas(artistas) {
    if (!artistsGrid) return;
    artistsGrid.innerHTML = '';

    artistas.forEach(artist => {
      const artistCard = document.createElement('div');
      artistCard.classList.add('artist-card');

      artistCard.innerHTML = `
        <img src="${artist.image}" alt="${artist.name}" onerror="this.src='https://via.placeholder.com/300?text=Artista'">
        <h3>${artist.name}</h3>
        <p>Artista</p>
      `;

      artistCard.addEventListener('click', () => {
        if (barraPesquisa) barraPesquisa.value = artist.name;
        buscarMusicasAPI(artist.name);
      });

      artistsGrid.appendChild(artistCard);
    });
  }

  function renderizarAlbunsLocais(albuns) {
    if (!albumsGrid) return;
    albumsGrid.innerHTML = '';

    albuns.forEach(album => {
      const albumCard = document.createElement('div');
      albumCard.classList.add('album-card');

      albumCard.innerHTML = `
        <img src="${album.image}" alt="${album.name}" onerror="this.src='https://via.placeholder.com/300?text=Capa'">
        <h3>${album.name}</h3>
        <p>${album.artist}</p>
      `;

      albumCard.addEventListener('click', async () => {
        const termoBusca = `${album.name} ${album.artist}`;
        const url = `https://itunes.apple.com/search?term=${encodeURIComponent(termoBusca)}&entity=song&limit=1`;

        try {
          const resposta = await fetch(url);
          const dados = await resposta.json();

          if (dados.results && dados.results.length > 0) {
            tocarAudio(dados.results[0].previewUrl);
          } else {
            console.warn('Prévia de áudio não encontrada para esta faixa.');
          }
        } catch (erro) {
          console.error('Erro ao buscar áudio no iTunes:', erro);
        }
      });

      albumsGrid.appendChild(albumCard);
    });
  }

  async function buscarMusica(termoDigitado) { 
    if (!termoDigitado.trim()) {
      renderizarAlbunsLocais(albumsData);
      return;
    }

    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(termoDigitado)}&entity=song&limit=12`;

    try {
      const resposta = await fetch(url);
      const dados = await resposta.json();

      if (!albumsGrid) return;
      albumsGrid.innerHTML = '';

      if (dados.results.length === 0) {
        albumsGrid.innerHTML = '<p style="color: #b3b3b3;">Nenhuma música encontrada.</p>';
        return;
      }

      dados.results.forEach(musica => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-card');

        const capaAltaRes = musica.artworkUrl100.replace('100x100bb', '600x600bb');

        albumCard.innerHTML = `
          <img src="${capaAltaRes}" alt="${musica.trackName}">
          <h3>${musica.trackName}</h3>
          <p>${musica.artistName}</p>
        `;

        albumCard.addEventListener('click', () => {
          tocarAudio(musica.previewUrl);
        });

        albumsGrid.appendChild(albumCard);
      });
    } catch (erro) {
      console.error('Erro na requisição da API:', erro);
    }
  }

  // EVENTOS DA BARRA DE PESQUISA
  if (barraPesquisa) {
    barraPesquisa.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        buscarMusica(barraPesquisa.value);
      }
    });

    let tempoDigitacao;
    barraPesquisa.addEventListener('input', () => {
      clearTimeout(tempoDigitacao);
      tempoDigitacao = setTimeout(() => {
        buscarMusica(barraPesquisa.value);
      }, 500);
    });
  }

  // INICIALIZAÇÃO
  renderizarArtistas(artistsData);
  renderizarAlbunsLocais(albumsData);
});