module.exports = {
  send: (err, req, res, code = 400) => {
    if(err){
      console.log(`Error: ${err}`);
      res.status(code).json({
        error:err
      });
    }
  }
}