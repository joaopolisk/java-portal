# Java Portal — Portal de Estudos com HTML Legado.

Este repositório contém um **portal de estudos em Java** construído a partir de **arquivos HTML legados**, organizados, automatizados e publicados como um **site estático** usando **GitHub Pages**.

O projeto foi feito com foco em **aprendizado prático**, mostrando como lidar com conteúdo real, bagunçado e sem estrutura — algo comum no dia a dia profissional.

🔗 **Demo (GitHub Pages)**  
https://joaopolisk.github.io/java-portal/

---

## 🎯 Objetivo do Projeto

Este projeto existe para responder à pergunta:

> *“Como transformar dezenas ou centenas de HTMLs soltos em um portal organizado e publicável?”*

Aqui você aprende:
- Organização de conteúdo legado
- Automação com scripts
- Navegação dinâmica sem backend
- Boas práticas de engenharia
- Deploy real no GitHub Pages

---

## 🧠 Para quem é este repositório?

✔️ Desenvolvedores **júnior / iniciante**  
✔️ Quem quer aprender além de CRUD  
✔️ Quem nunca lidou com conteúdo legado  
✔️ Quem quer algo real para portfólio  

❌ Não é tutorial de framework  
❌ Não é curso de Java  
❌ Não é projeto artificial  

---

## 🧱 Estrutura do Projeto

```
java-portal/
├── index.html        # Página principal do portal
├── app.js            # Lógica de navegação e menu
├── style.css         # Estilos
├── menu.json         # Índice das aulas (gerado automaticamente)
├── conteudo/         # Aulas HTML organizadas por módulos
│   ├── 01_fundamentos/
│   ├── 02_poo/
│   ├── 03_banco_dados/
│   ├── 04_backend/
│   ├── 05_projetos/
│   └── 06_todas_as_aulas/
└── scripts/          # Scripts de automação (Python)
```

---

## 🧩 Conceito-chave

> **HTML não decide navegação.**  
> **Script organiza dados.**  
> **JavaScript orquestra tudo.**

---

## ⚙️ Tecnologias Utilizadas

- HTML / CSS
- JavaScript (Vanilla)
- Python 3 (automação)
- Git / GitHub
- GitHub Pages

---

## ▶️ Como rodar o projeto localmente

```bash
git clone https://github.com/joaopolisk/java-portal.git
cd java-portal
python -m http.server 8000
```

Abra no navegador:
```
http://localhost:8000
```

---

## 🔢 Ordenação das Aulas

As aulas são ordenadas **numericamente**, usando o número no nome do arquivo.

---

## 🤖 Scripts de Automação

Os scripts servem para:
- organizar arquivos em pastas
- remover menus duplicados
- garantir encoding correto
- gerar automaticamente o menu.json

---

## 💾 Progresso do Usuário

O progresso é salvo usando `localStorage`, sem backend.

---

## 🚀 Publicação no GitHub Pages

Branch: `main`  
Pasta: `/ (root)`

URL:
https://joaopolisk.github.io/java-portal/

---

## 👤 Autor

**João Polisk**  
GitHub: https://github.com/joaopolisk
