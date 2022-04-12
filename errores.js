const mensajesErrores = (codigo) => {
    switch (codigo) {
        case '42P01':
            return 'Nombre de tabla incorrecto';
        break;

        case '42703':
            return 'Columna o campo incorrecto en el SELECT'
        break;

        case '42883':
            return 'Tipo de dato incorrecto en la consulta';
        break;

        case '3D000':
            return 'Nombre de base de datos incorrecto';
        break;
        
        case '23505':
            return 'Ya existe la llave, no cumple con unicidad de campo PK';
        break;

        case '42601':
            return 'Error de sintaxis en la consulta';
        break;

        default:
            return 'Error desconocido';
        break;
    }
}
module.exports = mensajesErrores;