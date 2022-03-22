const formSend = document.getElementById('formSend');
const urlInputReference = document.getElementById('url_input');

if(!formSend){
    console.log('VAMO')
}

formSend?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('xDF')
})

console.log(formSend)

/*const resp = fetch('http://localhost:3000/', {
    method: 'POST'
})*/