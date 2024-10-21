// Объект для хранения данных формы
const formData = {
    email: "",
    message: ""
};

// Когда страница загружается, проверяем локальное хранилище и заполняем форму, если данные найдены
window.addEventListener('load', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        formData.email = email;
        formData.message = message;

        // Заполняем поля формы
        document.querySelector('input[name="email"]').value = email;
        document.querySelector('textarea[name="message"]').value = message;
    }
});

// Обработчик события для отслеживания ввода в форме
document.querySelector('.feedback_form').addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value;

    // Сохраняем введенные данные в локальное хранилище
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

// Обработчик события для отправки формы
document.querySelector('.feedback_form').addEventListener('submit', (event) => {
    event.preventDefault(); // Останавливаем стандартную отправку формы
    
    // Проверяем, что все поля заполнены
    if (!formData.email || !formData.message) {
        alert('Please fill out all fields');
        return;
    }

    // Выводим данные формы в консоль
    console.log('Submitted data:', formData);

    // Очищаем локальное хранилище и сбрасываем форму
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
    
    // Очищаем объект с данными формы
    formData.email = "";
    formData.message = "";
});
