# Spotify Hub🎧🔎

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![iTunes API](https://img.shields.io/badge/iTunes_API-FA243C?style=for-the-badge&logo=apple-music&logoColor=white)

> Uma aplicação web interativa inspirada no design do Spotify que consome dados locais e a API do iTunes para exibir álbuns, artistas populares e reproduzir prévias de músicas em tempo real.

> [!NOTE]
> **🚧 Projeto em Desenvolvimento:** Esta não é a versão final do projeto. Novas funcionalidades, melhorias de design e ajustes de performance estão sendo implementados continuamente. 

---

## 💻 Sobre o Projeto

O **Spotify Hub** é um projeto front-end que simula a interface e a experiência de usuário da plataforma de música Spotify. A aplicação renderiza dinamicamente listas de artistas e álbuns utilizando JavaScript Vanilla, permitindo a exploração de conteúdos musicais e a busca interativa por novas faixas diretamente na interface.

O grande destaque do projeto é a integração com a **iTunes Search API**, que possibilita a busca em tempo real por músicas digitadas pelo usuário no campo de pesquisa, além da reprodução de trechos de áudio (*previews*) ao clicar nos cards dos álbuns.

---

## ⚙️ Funcionalidades

- **Renderização Dinâmica:** Listagem automática de artistas populares e álbuns na página principal através de manipulação do DOM.
- **Busca Interativa de Músicas:** Sistema de pesquisa integrado na barra superior, acionado ao pressionar a tecla `Enter`.
- **Integração com API Externa:** Consumo da API do iTunes utilizando `fetch` e requisições assíncronas (`async/await`) com tratamento de erros.
- **Player de Prévia de Áudio:** Reprodução instantânea de trechos de áudio oficiais ao clicar em qualquer card de música ou álbum.
- **Interface Fiel:** Layout inspirado no design moderno e escuro do Spotify (Dark Mode), utilizando ícones via Iconify, flexbox, grids customizados e barra de rolagem horizontal.

---

## 🎵 Músicas em Destaque

> Uma seleção especial de exemplificação de músicas carregadas dinamicamente no projeto a partir da iTunes API, prontas para teste e reprodução rápida.

| Música | Artista |
| :--- | :--- |
| Deixa Acontecer | Grupo Revelação |
| Chess | Joyful |
| I'm Still Standing | Taron Egerton |
---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do player, barra lateral (*sidebar*), barra de pesquisa e áreas de conteúdo dinâmico.
- **CSS3:** Estilização visual avançada com Flexbox, Grid Layout (responsivo e colunas horizontais com rolagem), transições suaves e posicionamento fixo para o banner inferior.
- **JavaScript (ES6+):**
  - **Manipulação do DOM:** Criação e injeção dinâmica de elementos HTML baseados em arrays de dados.
  - **Requisições Assíncronas:** Comunicação com a API do iTunes via `fetch` e tratamento de respostas em formato JSON.
  - **Eventos:** Gerenciamento de eventos de clique nos cards e captura de eventos de teclado (`keypress`) no input de pesquisa.
  - **API de Áudio do Navegador:** Instanciação e controle de objetos `Audio()` para a reprodução das prévias musicais.

---

## 🌎 Teste meu projeto no seu navegador!

> O projeto ainda não é responsivo. Teste em um PC, Notebook ou Tablet! 

- **Spotify Hub:** [VEJA ESTE PROJETO NO SEU NAVEGADOR!](https://myspotifyhub.netlify.app)

---

## 📁 Estrutura de Arquivos

```text
├── index.html       # Estrutura HTML da aplicação
├── styles.css       # Estilização visual, layouts em grid/flexbox e responsividade
└── scripts.js       # Lógica de renderização, manipulação do DOM e integração com a API do iTunes
