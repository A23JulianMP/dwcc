letedad: number | null;
parseInt(prompt("Por favor, introduce a túa idade:"), 10);
if (isNaN(edad)) {
    alert("Por favor, introduce un número válido para a idade.");
}
else {
    letcategoria: string | undefined;
    if (edad >= 0 && edad <= 12) {
        categoria = "neno";
    }
    elseif(edad >= 13 && edad <= 18);
    {
        categoria = "adolescente";
    }
    elseif(edad >= 19 && edad <= 30);
    {
        categoria = "xoven";
    }
    elseif(edad >= 31 && edad <= 64);
    {
        categoria = "adulto";
    }
    elseif(edad >= 65 && edad <= 100);
    {
        categoria = "xubilado";
    }
    {
        alert("Idade fora do rango permitido.");
    }
    if (categoria) {
        alert("Eres " + categoria + ".");
    }
}
