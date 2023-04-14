var title = document.querySelector('#title');
var content = document.querySelector('#content');
var submit = document.querySelector('#submit');

submit.addEventListener('click', function (e) {
    e.preventDefault();
    var data = {
        title: title.value,
        content: content.value,
    };
    console.log(data);
    fetch('/api/newPost', {
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
});

