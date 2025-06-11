async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response= await fetch ('http://localhost:4000/login', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                user:email,
                psw: password
            })
        });
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            window.location.href = 'token.html';
        }else {
            alert ('Email ou senha incorretos');
        }
    } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert ('Erro ao fazer login');
        }
    }


