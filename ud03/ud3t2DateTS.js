var fecha1 = new Date();
var fechaFin = new Date('2024-06-25T00:00:00');
var diferencia = Math.trunc((fechaFin.getTime() - fecha1.getTime()) / (1000 * 3600 * 24));
document.getElementById('data').innerHTML += 'Para el día 25 de Junio quedan ' + diferencia.toString() + ' días';
// Aniversario
var aniversario = window.prompt("Escriba a data do teu aniversario da seguinte forma mm-dd sen o ano");
aniversario = "2024-" + aniversario;
var anoDate = new Date(aniversario);
console.log(anoDate.toString());
var year = anoDate.getFullYear();
var month = anoDate.getMonth();
var day = anoDate.getDate();
var anosWeekend = [];
for (var i = 0; i <= (2100 - 2024); i++) {
    var newDate = new Date(year + i, month, day);
    var dayOfWeek = newDate.getDay();
    var isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0);
    if (isWeekend) {
        anosWeekend.push(year + i);
    }
}
document.getElementById('data').innerHTML += '<br><br>Los siguientes años serán fin de semana en tu cumpleaños: ' + anosWeekend.toString();
// Fechas en función del usuario
var comandoUser = window.prompt("Escriba 1, 2 ou 3 en función de como que que saia a data");
var dataAhora = new Date();
var dia = 0;
var ano = 0;
switch (comandoUser) {
    case "1":
        dia = dataAhora.getDate();
        var mes1 = dataAhora.getMonth() + 1;
        ano = dataAhora.getFullYear();
        document.getElementById('data').innerHTML += '<br><br>El día de hoy es: ' + dia + '/' + mes1 + '/' + ano;
        break;
    case "2":
        dia = dataAhora.getDate();
        ano = dataAhora.getFullYear();
        var meses = ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'];
        var diasSemana = ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'];
        document.getElementById('data').innerHTML += '<br><br>El día de hoy es: ' + diasSemana[dataAhora.getDay()] + ', ' + dia + ' de ' + meses[dataAhora.getMonth()] + ' de ' + ano;
        break;
    case "3":
        var opciones = {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        };
        var fechaEnIngles = dataAhora.toLocaleString('en-US', opciones);
        document.getElementById('data').innerHTML += '<br><br>El día de hoy es: ' + fechaEnIngles;
        break;
}
// Hora en función del usuario
var comando2User = window.prompt("Escriba 1 ou 2 en función de como quere que saia a hora");
var horas = dataAhora.getHours();
var minutos = dataAhora.getMinutes();
var segundos = dataAhora.getSeconds();
var ampm = horas >= 12 ? 'PM' : 'AM';
// Pasamos a formato 12
horas = horas % 12;
horas = horas ? horas : 12;
switch (comando2User) {
    case "1":
        document.getElementById('data').innerHTML += "<br><br>La hora es: ".concat(dataAhora.getHours() < 10 ? '0' : '').concat(dataAhora.getHours(), ":").concat(minutos < 10 ? '0' : '').concat(minutos, ":").concat(segundos < 10 ? '0' : '').concat(segundos);
        break;
    case "2":
        var horaS = "".concat(horas < 10 ? '0' : '').concat(horas, ":").concat(minutos < 10 ? '0' : '').concat(minutos, " ").concat(ampm);
        document.getElementById('data').innerHTML += '<br><br>La hora es: ' + horaS;
        break;
}
