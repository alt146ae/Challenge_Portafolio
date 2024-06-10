export const tiposDeError = [
    "valueMissing",
    "typeMissmatch",
    "patterMissmatch",
    "tooShort",
    "customError",
    "tooLong",
    "rangeOverflow",
    "rangeUnderflow",
    "stepMismatch",
    "badInput",
    "customError",
]

export const mensajes = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un nombre válido.",
        tooShort: "Por favor, ingrese un nombre válido.",
        tooLong: "Este campo no puede tener más de 50 caracteres.",
    },
    email: {
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "Por favor, ingrese un email válido.",
        tooShort: "Por favor, ingrese un e-mail válido.",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un número de identificación válido.",
        tooShort: "El campo asunto no tiene caracteres suficientes.",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío.",
        patternMismatch: "El campo no tiene caracteres suficientes.",
        tooShort: "El campo mensaje no tiene caracteres suficientes.",
    },
    terminos: {
        valueMissing: "Debes aceptar los términos antes de continuar.",
    },
};