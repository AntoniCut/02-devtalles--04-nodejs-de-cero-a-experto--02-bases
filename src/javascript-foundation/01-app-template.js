/*
    *  -----------------------------------------------------------------------------------  *
    *  -----  01-app-template.js  --  /src/javascript-foundation/01-app-template.js  -----  *
    *  -----------------------------------------------------------------------------------  *
*/



console.clear();
console.log('--------------------------------');
console.log('-----  01-app-template.js  -----')
console.log('--------------------------------\n\n');


/** @type {string} - `Template` de correo electrónico */
const emailTemplate = `

    <div>
        <h1> Hola, {{name}}! </h1>
        <p> Gracias por registrarte en nuestro sitio web. </p>
        <p> Por favor, confirma tu correo electrónico haciendo clic en el siguiente enlace: </p>
        <a href="{{confirmationLink}}">Confirmar correo electrónico </a>
        <p> Si no te has registrado en nuestro sitio, ignora este correo. </p>
        <br/>
        <p> 
            Saludos,
            <br/>
            El equipo de DevTalles
        </p>
    </div>

`;


module.exports = {
    emailTemplate
};
