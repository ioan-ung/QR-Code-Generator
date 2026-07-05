const path = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
let image = document.getElementsByTagName('div')[1];
let card = document.getElementsByTagName('div')[0];
let input;

document.getElementById('button').addEventListener('click',()=>{
    input = document.getElementsByTagName('input')[0].value;
    card.style.display = 'none';
    image.style.display = 'flex';

    document.getElementById('imageTitle').textContent = input;
    document.getElementsByTagName('img')[0].src = path + encodeURIComponent(input);
    
})

document.getElementById('svg').addEventListener('click',()=>{
    image.style.display = 'none';
    card.style.display = 'flex';
    document.getElementsByTagName('input')[0].value = '';
})