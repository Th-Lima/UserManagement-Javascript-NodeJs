module.exports = {

  user:(app, req, res)=>{
    req.assert('name', 'O nome é obrogatório.').notEmpty();
    req.assert('email', 'O email está inválido.').notEmpty().isEmail()
    req.assert('password', 'O password é obrigatório.').notEmpty();

    let errors = req.validationErrors();

    if(errors){
      app.utils.error.send(errors, req, res);
      return false;
    }else{
      return true;
    }
  }

}