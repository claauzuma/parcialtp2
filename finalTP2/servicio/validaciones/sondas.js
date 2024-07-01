
export const validar = (id,temperatura) => {
let validado = false;

if( id >= 1 && id <= 5 && temperatura >= -20 && temperatura <= 100)
{
    validado = true;

}

return validado

}