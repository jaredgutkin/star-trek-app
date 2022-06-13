document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const alienName = document.querySelector('input').value
    try{
        const response = await fetch(`https://alien-startrek-api.herokuapp.com/api/${alienName}`)
    } catch {

    }
}