document.getElementById('signinBtn').addEventListener('click', login);

function login() {
    let email = document.getElementById('email-field').value;
    let password = document.getElementById('passwordField').value;

    if (email === 'admin@example.com' && password === '1234') {
        alert('Inicio de Sesión Exitoso!');
        // Aquí puedes redirigir al usuario a la página de inicio después del inicio de sesión
        window.location.href = '../../index.html';
    } else {
        alert('Los datos ingresados no son correctos!');
    }
}
