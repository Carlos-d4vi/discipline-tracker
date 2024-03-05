const depoistButton = document.getElementById('depositButton')

const sucessMessage = document.getElementById('sucessMessage')

const nameErrorMessage = document.getElementById('nameErrorMessage')

const form = document.getElementById('form')

function validaNome(customerName){
    const nomoComoArray = customerName.split(' ')
    return nomoComoArray.length >= 2;
}



form.addEventListener('submit', function(event) {
    depoistButton.addEventListener('click', () => {
        const customerName = document.getElementById('custumerName').value

        if(validaNome(customerName)){
            
            const moneyValue = document.getElementById('moneyValue').value
            
            const custumerAccount = document.getElementById('custumerAccount').value
            
            sucessMessage.style.display = "flex"
    
            const successText = `O montante de: <b> ${moneyValue}</b> foi enviado para o cliente: <b> ${customerName}</b> conta: <b> ${custumerAccount}</b>`
            
            sucessMessage.innerHTML = successText
        }else{
            console.log('nome inválido')
            nameErrorMessage.style.display = 'flex'
            nameErrorMessage.innerText = 'O nome precisa ser completo'
            customerName.style.backgroundColor = 'red'
        }
    })
    event.preventDefault(); // Previne o envio do formulário
});