# Spotify Web 🎵🎧

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/5dbd3e10-2709-4489-a151-01ce8d47fd99" />

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![iTunes API](https://img.shields.io/badge/iTunes_API-FC3C44?style=for-the-badge&logo=apple-music&logoColor=white)
![Iconify](https://img.shields.io/badge/Iconify-1769AA?style=for-the-badge&logo=iconify&logoColor=white)

> Uma recriação interativa e moderna da interface do Spotify Web, com busca dinâmica de músicas em tempo real e reprodução de prévias de áudio de 30 segundos via API do iTunes.

> [!NOTE]
> **🚧 Projeto em Desenvolvimento:** Layout atualizado para o design moderno do Spotify (com suporte a *carrossel horizontal no eixo X* para músicas, cards de artistas populares e busca inteligente com *debounce*).

---

## 💻 Sobre o Projeto

O **Spotify Clone** é uma aplicação web desenvolvida para recriar a experiência visual e funcional do player oficial do Spotify. 

A aplicação exibe playlists locais e populares organizadas em listas e carrosséis com rolagem horizontal no eixo X, permitindo pesquisar qualquer música,artista ou trilha sonora dinamicamente. Integra a **API REST do iTunes** para buscar capas em alta resolução (600x600) e prévias de áudio oficiais de 30 segundos com controle de reprodução instantâneo.

---

## ⚙️ Funcionalidades

- **Busca Dinâmica em Tempo Real:** Pesquisa de faixas diretamente na API do iTunes com mecanismo de *debounce* (500ms) para evitar chamadas excessivas durante a digitação.
- **Carrossel Horizontal (Eixo X):** Seção de músicas em fileira única com rolagem lateral suave e responsiva.
- **Player de Áudio Integrado:** Reprodução e pausa de trechos de áudio de 30 segundos ao clicar nos cards.
- **Interface Fiel ao Spotify:** Header superior com busca integrada, sidebar com a seção de biblioteca, tema escuro e cards estilizados.
- **Design Responsivo:** Adaptação completa para desktop, tablets e dispositivos móveis.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica da barra de navegação, sidebar, grids de conteúdo e banner promocional.
- **CSS3:** Estilização moderna utilizando Flexbox, CSS Grid, variáveis de cores, efeitos de *hover*, suporte a *scroll-x* e consultas de mídia (*media queries*).
- **JavaScript (Vanilla ES6+):** Manipulação dinâmica do DOM, consumo de API assíncrona (`async/await` / `fetch`), codificação de busca (`encodeURIComponent`) e controle do elemento `Audio()`.
- **API do iTunes:** Integração para busca de faixas, metadados e prévias musicais.
- **Iconify:** Biblioteca de ícones vetoriais modernos.

---

## 🌎 Teste meu projeto no seu navegador!

- **Spotify Web:** [VEJA ESTE PROJETO NO SEU NAVEGADOR!](https://alicesilva2012.github.io/spotify/)

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Um navegador web atualizado (Google Chrome, Microsoft Edge, Safari, Firefox, etc.).
- Extensão **Live Server** no VS Code (opcional, mas recomendado).

### ☕ Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/AliceSilva2012/spotify.git
   ```
2. **Acesse a pasta do projeto:**
   ```bash
   cd spotify
   ```
3. **Execute a aplicação:**
   - Abra o arquivo index.html diretamente no seu navegador OU
   - No VS Code, clique com o botão direito no index.html e selecione **Open with Live Server**.

---

## 📁 Estrutura de Arquivos

```mermaid
graph TD
    A[spotify] --> B[index.html]
    A --> C[styles.css]
    A --> D[scripts.js]
    A --> F[.gitignore]
    A --> G[img/]

    style B fill:#e34f26,stroke:#fff,stroke-width:2px,color:#fff
    style C fill:#1572b6,stroke:#fff,stroke-width:2px,color:#fff
    style D fill:#f7df1e,stroke:#fff,stroke-width:2px,color:#000
    style F fill:#333,stroke:#fff,stroke-width:2px,color:#fff
    style G fill:#1db954,stroke:#fff,stroke-width:2px,color:#fff
```
