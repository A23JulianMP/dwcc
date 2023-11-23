
        const fecha1: Date = new Date();
        const fechaFin: Date = new Date('2024-06-25T00:00:00');
        const diferencia: number = Math.trunc((fechaFin.getTime() - fecha1.getTime()) / (1000 * 3600 * 24));
        document.getElementById('data').innerHTML += 'Para el día 25 de Junio quedan ' + diferencia.toString() + ' días';

        // Aniversario
        let aniversario: string = window.prompt("Escriba a data do teu aniversario da seguinte forma mm-dd sen o ano");
        aniversario = "2024-" + aniversario;
        let anoDate: Date = new Date(aniversario);
        console.log(anoDate.toString());
        let year: number = anoDate.getFullYear();
        let month: number = anoDate.getMonth();
        let day: number = anoDate.getDate();
        let anosWeekend: number[] = [];
        for (let i = 0; i <= (2100 - 2024); i++) {
            let newDate: Date = new Date(year + i, month, day);
            let dayOfWeek: number = newDate.getDay();
            let isWeekend: boolean = (dayOfWeek === 6) || (dayOfWeek === 0);
            if (isWeekend) {
                anosWeekend.push(year + i);
            }
        }
        document.getElementById('data').innerHTML += '<br><br>Los siguientes años serán fin de semana en tu cumpleaños: ' + anosWeekend.toString();

        // Fechas en función del usuario
        let comandoUser: string = window.prompt("Escriba 1, 2 ou 3 en función de como que que saia a data");
        let dataAhora: Date = new Date();

        let dia: number = 0;
        let ano: number = 0;
        switch (comandoUser) {
            case "1":
                dia = dataAhora.getDate();
                let mes1: number = dataAhora.getMonth() + 1;
                ano = dataAhora.getFullYear();
                document.getElementById('data').innerHTML += '<br><br>El día de hoy es: ' + dia + '/' + mes1 + '/' + ano;
                break;
            case "2":
                dia = dataAhora.getDate();
                ano = dataAhora.getFullYear();
                let meses: string[] = ['Xaneiro', 'Febreiro', 'Marzo', 'Abril', 'Maio', 'Xuño', 'Xullo', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Decembro'];
                let diasSemana: string[] = ['Domingo', 'Luns', 'Martes', 'Mércores', 'Xoves', 'Venres', 'Sábado'];
                document.getElementById('data').innerHTML += '<br><br>El día de hoy es: ' + diasSemana[dataAhora.getDay()] + ', ' + dia + ' de ' + meses[dataAhora.getMonth()] + ' de ' + ano;
                break;
            case "3":
                let opciones = {
                    weekday: 'long',
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                };
                let fechaEnIngles: string = dataAhora.toLocaleString('en-US', opciones);
                document.getElementById('data').innerHTML += '<br><br>El día de hoy es: ' + fechaEnIngles;
                break;
        }

        // Hora en función del usuario
        let comando2User: string = window.prompt("Escriba 1 ou 2 en función de como quere que saia a hora");
        let horas: number = dataAhora.getHours();
        let minutos: number = dataAhora.getMinutes();
        let segundos: number = dataAhora.getSeconds();
        let ampm: string = horas >= 12 ? 'PM' : 'AM';

        // Pasamos a formato 12
        horas = horas % 12;
        horas = horas ? horas : 12;

        switch (comando2User) {
            case "1":
                document.getElementById('data').innerHTML += `<br><br>La hora es: ${dataAhora.getHours() < 10 ? '0' : ''}${dataAhora.getHours()}:${minutos < 10 ? '0' : ''}${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
                break;
            case "2":
                let horaS = `${horas < 10 ? '0' : ''}${horas}:${minutos < 10 ? '0' : ''}${minutos} ${ampm}`;
                document.getElementById('data').innerHTML += '<br><br>La hora es: ' + horaS;
                break;
        }
