 
export default function validate(values){
  let errors = {};
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  if(!values.email){
    errors.email = "Endereço de e-mail obrigatório!";
  } else if(!pattern.test(values.email)){
    errors.email = "Endereço de e-mail inválido!";
  }
  if(!values.password){
    errors.password = "Senha obrigatória!";
  } else if(values.password.length < 6){
    errors.password = "Senha deverá ser no mínimo 6 caracteres ou mais!"
  }
  if(!values.name){
    errors.name = "Preencha o nome!";
  } else if(values.name.length < 6){
    errors.name = "Nome incompleto!"
  }

  return errors;
}