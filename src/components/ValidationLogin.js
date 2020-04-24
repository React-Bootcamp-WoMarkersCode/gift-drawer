export default function validate(values) {
    let errors = {};
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if (!values.email) {
        errors.email = "Campo obrigatório!";
    } else if (!pattern.test(values.email)) {
        errors.email = "Endereço de e-mail inválido!";
    } else if (!['marilias@amobrindes.com', 'lialobo@amobrindes.com', 'beccaarantes@amobrindes.com', 'adrieler@amobrindes.com', 'priscylap@amobrindes.com', 'anapaulam@amobrindes.com', 'dianacoelho@amobrindes.com', 'evelynb@amobrindes.com', 'angelam@amobrindes.com'].includes(values.email)) {
        errors.email = "E-mail não existe!"
    }
    if (!values.password) {
        errors.password = "Campo obrigatório!";
    } else if (values.password !== '1234') {
        errors.password = "Senha incorreta!"
    }
    if (!values.name) {
        errors.name = "Campo obrigatório!"
    }
    return errors;
}