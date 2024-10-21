
const formData = {
    email: "",
    message: ""
};


window.addEventListener('load', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const { email, message } = JSON.parse(savedData);
        formData.email = email;
        formData.message = message;

     
        document.querySelector('input[name="email"]').value = email;
        document.querySelector('textarea[name="message"]').value = message;
    }
});

document.querySelector('.feedback_form').addEventListener('input', (event) => {
    const { name, value } = event.target;
    formData[name] = value;

   
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});


document.querySelector('.feedback_form').addEventListener('submit', (event) => {
    event.preventDefault(); 
    
    if (!formData.email || !formData.message) {
        alert('Please fill out all fields');
        return;
    }

 
    console.log('Submitted data:', formData);

 
    localStorage.removeItem('feedback-form-state');
    event.target.reset();
    
   
    formData.email = "";
    formData.message = "";
});
