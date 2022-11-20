const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if(email.value === "" || password.value === "") {
   alert("Все поля должны быть заполнены!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
};
  const user = {};
    user.email = email.value;
    user.password = password.value;
    console.log(user);
