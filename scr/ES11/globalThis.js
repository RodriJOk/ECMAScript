//Una de las incorporaciones de ES11 es globalThis.
//Global This hace referencia al objeto global, sin importar el contexto en el que se encuentre el codigo
//Veamos un ejemplo para entenderlo mejor. 

const getGlobalThis = () => {
    if(typeof globalThis !== 'undefined') return globalThis;
};

const theGlobalThis = getGlobalThis();


