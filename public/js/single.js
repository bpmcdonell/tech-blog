document.querySelector('#commentButton').addEventListener('click', function () {

    document.querySelector('#commentButton').remove();
    // create a text box
    const commentBox = document.createElement('textarea');
    commentBox.setAttribute('id', 'commentBox');
    commentBox.setAttribute('placeholder', 'Enter your comment here');
    commentBox.setAttribute('rows', '4');
    commentBox.setAttribute('cols', '50');
    commentBox.setAttribute('style', 'margin: 10px 0px 10px 0px;');
    document.querySelector('#addCommentSection').appendChild(commentBox);

    // create a submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('id', 'submitButton');
    submitButton.setAttribute('class', 'btn btn-primary');
    submitButton.setAttribute('style', 'margin: 10px 0px 10px 0px;');
    submitButton.textContent = 'Submit';
    document.querySelector('#addCommentSection').appendChild(submitButton);

    // create a cancel button
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('id', 'cancelButton');
    cancelButton.setAttribute('class', 'btn btn-primary');
    cancelButton.setAttribute('style', 'margin: 10px 0px 10px 0px;');
    cancelButton.textContent = 'Cancel';
    document.querySelector('#addCommentSection').appendChild(cancelButton);

    // add event listener to cancel button
    document.querySelector('#cancelButton').addEventListener('click', function () {
        // remove the text box and submit button
        document.querySelector('#commentBox').remove();
        document.querySelector('#submitButton').remove();
        document.querySelector('#cancelButton').remove();
    });


    // add event listener to submit button
    document.querySelector('#submitButton').addEventListener('click', function () {
        // get the comment text
        const commentText = document.querySelector('#commentBox').value.trim();
        const url = window.location.href
        const regex = /(\d+)$/;
        const postId = url.match(regex)[0];

        console.log(postId);
        // create an object to send to the api
        const commentObject = {
            body: commentText,
            post_id: postId
        };


        fetch('/api/comments/', {
            method: 'POST',
            body: JSON.stringify(commentObject),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                alert(response.statusText);
            })
            .then(data => {
                console.log(data);
                window.location.reload();
                // remove the text box and submit button
                document.querySelector('#commentBox').remove();
                document.querySelector('#submitButton').remove();
                document.querySelector('#cancelButton').remove();
            });
    });

});

