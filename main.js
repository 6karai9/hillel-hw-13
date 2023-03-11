let link = prompt('Введіть посилання:');

if (!link.startsWith('http://') && !link.startsWith('https://')) {
    link = `https://${link}`;
}
else{
    redirectToLink()
}
function redirectToLink() {
    window.location.href = link;
}

document.getElementById('http-btn').addEventListener('click', redirectToLink);
document.getElementById('https-btn').addEventListener('click', redirectToLink);