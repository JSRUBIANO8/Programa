const loginForm = document.getElementById('loginForm');
const messageElement = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Aquí deberías realizar la validación del usuario y contraseña con una lógica adecuada
  // Por simplicidad, vamos a usar valores fijos para este ejemplo
  if (username === 'JSRUBIANO' && password === 'FOCUS123') {
    messageElement.textContent = 'Inicio de sesión exitoso. Redireccionando...';
    setTimeout(() => {
      window.location.href = 'paginaprincipal.html'; // Redirecciona a la página principal
    }, 1500);
  } else {
    messageElement.textContent = 'Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.';
  }
});