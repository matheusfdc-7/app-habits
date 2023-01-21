const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

/*adicinando eventos com funcoes*/ 
button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
    /* nessa parte pega a data atual coloca em pt e tbm corta ela */ 
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5) 
    const dayExists= nlwSetup.dayExists(today)

    if (dayExists){
        alert('Dia ja incluso 🔴')
        return
    }
    alert('Adicionado com sucesso ✅ ')
    nlwSetup.addDay(today)
}
/* guarda dados e utilizar*/
function save() {
    localStorage.setItem('NLSetup@habits', JSON.stringify(nlwSetup.data)) 
}

const data = JSON.parse(localStorage.getItem('NLSetup@habits')) || {}
nlwSetup.setData(data);
nlwSetup.load();