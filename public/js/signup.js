var username = document.querySelector('#username');
var password = document.querySelector('#password');

console.log("signup.js loaded")
const signupEvent = async (e) => {
    e.preventDefault();
    var data = {
        username: username.value,
        password: password.value,
    };
    console.log(data);
    fetch('/api/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
            document.location.replace('/dashboard');

        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

document.querySelector('#signupButton').addEventListener('click', signupEvent);
