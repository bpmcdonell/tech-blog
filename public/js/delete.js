document.querySelector('.commentDelete').addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('data-id');
    const url = `/api/comments/${id}`;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        .catch(err => console.log(err));
});

document.querySelector('.postDelete').addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('data-id');
    const url = `/api/posts/${id}`;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.replace('/');
        })
        .catch(err => console.log(err));
});


// Path: public\js\edit.js

