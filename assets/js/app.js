function normalizarTitulo(nome) {
  return nome
    .replace(/mesttra-/gi, "")
    .replace(/value\.toupper\(\)/gi, "")
    .replace(/\.\s*/g, " ")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, l => l.toUpperCase());
}

function extrairNumero(aula) {
  // tenta pelo arquivo primeiro (mais confiável)
  let m = aula.arquivo.match(/(\d{1,4})/);
  if (m) return parseInt(m[1], 10);

  // fallback: tenta pelo título
  m = aula.titulo.match(/(\d{1,4})/);
  if (m) return parseInt(m[1], 10);

  return 9999; // joga pro fim se não achar número
}

fetch("menu.json")
  .then(res => res.json())
  .then(menu => montarMenu(menu));

function montarMenu(menu) {
  const container = document.getElementById("menu");
  const vistos = JSON.parse(localStorage.getItem("vistos")) || [];

  menu.forEach(cat => {
    const h3 = document.createElement("h3");
    h3.innerText = normalizarTitulo(cat.titulo);
    container.appendChild(h3);

    cat.aulas.forEach(aula => {
      const a = document.createElement("a");
      a.href = "#";
      a.innerText = normalizarTitulo(aula.titulo);

      a.onclick = (e) => {
        e.preventDefault();
        carregarAula(aula.arquivo);
      };

      if (vistos.includes(aula.arquivo)) {
        a.classList.add("visto");
      }

      container.appendChild(a);
    });
  });
}

function carregarAula(arquivo) {
  const frame = document.getElementById("frame");
  frame.src = arquivo;

  let vistos = JSON.parse(localStorage.getItem("vistos")) || [];
  if (!vistos.includes(arquivo)) {
    vistos.push(arquivo);
    localStorage.setItem("vistos", JSON.stringify(vistos));
  }
}
