function checkAge(age) {
    return (age > 18) ? true : prompt('Родители разрешили?', '')
}

function checkAge2(age) {
    return (age > 18) || prompt('Родители разрешили?', '')
}