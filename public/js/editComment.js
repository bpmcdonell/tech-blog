const editCommentEvent = async (e) => {
    e.preventDefault();
    console.log('edit comment event init');
    const id = this.getAttribute('data-id');
    const url = `/api/comments/${id}`;
    fetch(url, {
        method: 'PUT',
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
};


document.querySelector('#commentEdit').addEventListener('click', editCommentEvent);