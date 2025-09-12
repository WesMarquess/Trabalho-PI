

function logar(){
    
    let login = document.getElementById('login').value;
    let senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "123"){
        alert('Sucesso');
    }else{
        alert('falha');
    }
}
