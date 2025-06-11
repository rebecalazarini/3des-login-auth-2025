function logout() {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
}

async function carregarPosts() {
    const token = localStorage.getItem("token");

    if (!token) {
        alert ("Faça login para continuar");
        window.location.href = 'index.html';
        return;
    }

    try {
        const response = await fetch ("http://localhost:4000/posts", {
            headers: {
                Authorization: "Bearer " + token
            }
        });

        if (response.status !== 200) {
            throw new Error ("Acesso negado");
        }
        const posts = await response.json();

    const container = document.getElementById("posts-container");
    container.innerHTML = ""; // Limpa antes de preencher

    posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "post-card";
      card.innerHTML = `
         <img src="${post.avatar}" alt="Avatar" class="avatar">
        <span class="user-name">${post.name}</span>
        <h2>${post.title}</h2>
        <p><strong>Data:</strong> ${post.date}</p>
        <p>${post.summary}</p>
        <p><strong>Visualizações:</strong> ${post.views} | <strong>Curtidas:</strong> ${post.likes}</p>
        <hr/>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    alert("Erro ao carregar posts: " + error.message);
    window.location.href = "index.html";
  }
}
carregarPosts();

