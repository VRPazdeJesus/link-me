function enviar() {
    var emailValue = document.getElementById('emailTxt').value;
    var areaValue = document.getElementById('areaTxt').value;
    var timestamp = new Date().getTime();
    // A variavel database vai recer as funções de acesso ao banco de dados
    var database = firebase.database();
    database.ref('usuario').set({
        email: emailValue,
        mensagem: areaValue
    });
    
    
}
