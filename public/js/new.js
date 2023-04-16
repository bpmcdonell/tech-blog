

console.log('new js loaded');

const newPostEvent = async (e) => {

    e.preventDefault();

    var title = document.querySelector('#title');
    var body = document.querySelector('#body');

    var data = {
        title: title.value.trim(),
        body: body.value.trim(),
    };
    console.log('------------------')
    console.log(data);
    console.log('------------------')
    fetch('/api/posts/newPost', {
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

document.querySelector('#createNewPost').addEventListener('click', newPostEvent);

