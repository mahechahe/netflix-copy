const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export const validateEmail = (email, password, setError) => {

    if(!emailVálido(email)){
        return setError({
          watchMessage: true,
          message: 'Email no valido'
        })
      }
  
      if(email === '') {
        return setError( {
          watchMessage: true,
          message: 'Email no valido'
        })
      }
  
      if(password === '') {
        return setError({
          watchMessage: true,
          message: 'Contraseña no valida'
        })
      }
  
      return true

}