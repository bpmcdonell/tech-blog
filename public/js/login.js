

console.log('login js loaded');

const loginEvent = async (e) => {
    e.preventDefault();
    var username = document.querySelector('#username');
    var password = document.querySelector('#password');

    var data = {
        username: username.value,
        password: password.value,
    };
    console.log(data);
    fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);

        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

document.querySelector('#login').addEventListener('click', loginEvent);

