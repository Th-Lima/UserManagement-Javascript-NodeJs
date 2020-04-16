module.exports = {

  user:(app, req, res)=>{
    req.assert('_name', 'O nome é obrogatório.').notEmpty();
    req.assert('_email', 'O email está inválido.').notEmpty().isEmail()
    req.assert('_password', 'O password é obrigatório.').notEmpty();

    let errors = req.validationErrors();

    if(errors){
      app.utils.error.send(errors, req, res);
      return false;
    }else{
      return true;
    }
  }

}