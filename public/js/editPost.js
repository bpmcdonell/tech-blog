const editPostEvent = async (e) => {
    e.preventDefault();
    console.log('edit post event init');
    const title = document.querySelector('#postTitle').value.trim();
    const postBody = document.querySelector('#postBody').value.trim();

    const id = window.location.href.match(/(\d+)$/)[0];
    const jsonBody = JSON.stringify({ title, postBody, id });

    console.log(jsonBody);
    fetch("/api/posts/editpost", {
        method: 'PUT',
        body: jsonBody,
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            if (response.ok) {
                console.log(response);
                document.location.replace('/post/' + id);
            } else {
                alert(response.statusText);
            }
        })
        .catch(err => console.log(err));


};

console.log('edit.js loaded');

document.querySelector('#postEdit').addEventListener('click', editPostEvent);
