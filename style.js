// Пример простого JavaScript-кода без авторизации
document.addEventListener('DOMContentLoaded', (event) => {
    // Этот код выполнится, когда DOM полностью загружен

    // Пример простого действия, например, изменения текста на странице
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.innerHTML = `
            <h1>Welcome to Developereva</h1>
            <p>This is a simple static page without authorization.</p>
        `;
    }

    // Пример простой функции, которая может быть полезна на вашем сайте
    function showAlert(message) {
        alert(message);
    }

    // Пример вызова функции
    showAlert('Welcome to the page!');
});
