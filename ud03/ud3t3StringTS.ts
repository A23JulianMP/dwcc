<!DOCTYPE  html>
<html>
    <head>
        <META HTTP-EQUIV="Access-Control-Allow-Origin" CONTENT="file:///home/vagrant/Documentos/DWCC/ud03/ud3t1Window.html">
        <meta  http-equiv="content-type"  content="text/html;charset=utf-8">
        <title>Fechas</title>
        <div id="data"></div>
        <script type="text/javascript">
             let nomeApelido = window.prompt("Escriba o seu nome e apelidos");
             let separtadoNombreApelido = nomeApelido.split(" ");
             document.getElementById('data').innerHTML+=`<br><br>El tamaño total de su nombre y apellidos es: ${nomeApelido.length} `;
             document.getElementById('data').innerHTML+=`<br><br>Su nombre tiene una longitud de: ${separtadoNombreApelido[0].length} 
             .Su 1º apellido: ${separtadoNombreApelido[1].length}  y su 2º segundo apellido de: ${separtadoNombreApelido[2].length} `;
             document.getElementById('data').innerHTML+=`<br><br>Su nombre y apellidos en minúsculas: ${nomeApelido.toLowerCase()} `;
             document.getElementById('data').innerHTML+=`<br><br>Su nombre y apellidos en mayúsculas: ${nomeApelido.toUpperCase()} `;
             document.getElementById('data').innerHTML+=`<br>Su nombre es:${separtadoNombreApelido[0]} <br> su 1º apellido es:${separtadoNombreApelido[2]} <br> 
             y su 2º apellido es ${separtadoNombreApelido[2]} `;
             document.getElementById('data').innerHTML+=`<br><br>A proposta de nome é: ${separtadoNombreApelido[0].toLocaleLowerCase()}${separtadoNombreApelido[1][0].toLocaleUpperCase()}${separtadoNombreApelido[2][0].toLocaleUpperCase()}`;
            // Engada unha contrasinal
            let contra = window.prompt("Escriba unha contrasinal");
            let contieneMayusculaMinusculaNumero = /[A-Za-z0-9]/.test(contra);
            let contieneEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(contra);
            if (!(contra.length >= 8 && contra.length <= 16) ){
                document.getElementById('data').innerHTML+=`<br><br>La contraseña tiene que tener entre 8 y 16 caracteres`;
              
            }else if(!(contieneMayusculaMinusculaNumero && contieneEspecial)) {
                document.getElementById('data').innerHTML+=`<br><br>La contraseña tiene que tener alguna mayúscua, minúscula, número y caracter especial`;
            }else{
                document.getElementById('data').innerHTML+=`<br><br>La contraseña introducida cumple todos los requisitos`;
            }

        </script>
    </head>
     
</html>