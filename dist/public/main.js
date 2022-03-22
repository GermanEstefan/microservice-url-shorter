"use strict";
const formSend = document.getElementById('formSend');
const urlInputReference = document.getElementById('url_input');
if (!formSend) {
    console.log('VAMO');
}
formSend === null || formSend === void 0 ? void 0 : formSend.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('xDF');
});
console.log(formSend);
/*const resp = fetch('http://localhost:3000/', {
    method: 'POST'
})*/ 
