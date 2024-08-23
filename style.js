// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Показать данные в alert для теста
    alert(`Email: ${email}\nPassword: ${password}`);

    // В реальном приложении здесь будет код для отправки данных на сервер
});
