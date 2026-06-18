let q = prompt('Enter login', '');

if  (q === 'Admin') {
    pass = prompt('Enter password', '');

    if (pass === 'Im master') {

        alert('Welcome!');

    } else if (pass === ''  || pass === null) {

        alert('Canceled!');

    } else {
        alert('Wrong password!');
    }
    
} else if (q === null || q === '') {
    alert('Canceled');
} else {
    alert('Who are you?')
}