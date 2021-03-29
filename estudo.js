function calcularIdade(dataDeNascimento) {
    var [dia, mes, ano] = dataDeNascimento.split('/');
    var d = new Date();
    var anoAtual = d.getFullYear();
    var mesAtual = d.getMonth() + 1;
    var diaAtual = d.getDate();
    ano = +ano; mes = +mes; dia = +dia;
    var quantosAnos = anoAtual - ano;
    if (mesAtual < mes || mesAtual == mes && diaAtual < dia) {
        quantosAnos--;
    }
    return quantosAnos < 0 ? 0 : quantosAnos;
 }
  
 var dataDeNascimento = 13/10/2000
 var censura= 16
 
 function deixaEntrar( dataDeNascimento,censura){
     var calculo =  calcularIdade(dataDeNascimento)
    return calculo > censura ? true : false
 n}



 
    





 