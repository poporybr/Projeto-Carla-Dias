const formulario = document.getElementById('formAdd');
formulario.addEventListener('submit', function(event){
    event.preventDefault();
    const sku = document.getElementById('sku').value
    const name = document.getElementById('name').value
    const color = document.getElementById('color').value
    const container = document.getElementById('itensLevados')
    const novoParagrafo = document.createElement('p')
    novoParagrafo.textContent = `- ${sku} - ${name} ${color}`
    container.appendChild(novoParagrafo);
    document.getElementById('sku').value = ''
    document.getElementById('name').value = ''
    document.getElementById('color').value = ''
})