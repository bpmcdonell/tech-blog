console.log('logout.js loaded')

const logoutEvent = async (e) => {
    e.preventDefault();
    console.log('logout button clicked')
    fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((response) => {
            if (response.ok) {
                document.location.replace('/');
            } else {
                alert(response.statusText);
            }
        })
        .catch((err) => console.log(err));
}

document.querySelector('#logoutButton').addEventListener('click', logoutEvent);