const mongoose = require('mongoose');
const api = {};
api.setup = (User) => (req, res) => {
  const admin = new User({
    username: 'admin1',
    password: 'admin1',
    emailid:'sample1@sample.com',
    dateofbirth:'01/07/2001'
  });
admin.save(error => {
    if (error) throw error;
    console.log('Admin account was succesfully set up');
    res.json({ success: true });
  })
}
api.index = (User, sampleVueToken) => (req, res) => {
    const token = sampleVueToken;
  if (token) {
      User.find({}, (error, users) => {
        if (error) throw error;
        res.status(200).json(users);
      });
    } else return res.status(403).send({ success: false, message: 'Unauthorized' });
  }
  api.signup = (User) => (req, res) => {
    console.log(req.body);
    if (!req.body.username || !req.body.password) res.json({ success: false, message: 'Please, pass a username and password.' });
    else {
      const newUser = new User({
        username: req.body.username,
        password: req.body.password,
        emailid:req.body.emailid,
        dateofbirth:req.body.dateofbirth
      });
      newUser.save((error) => {
        if (error) return res.status(400).json({ success: false, message:  'Username already exists.' });
        res.json({ success: true, message: 'Account created successfully' });
      })
    }
  }
  api.login=(User)=>(req,res)=>{
    console.log(req.body);
  }
  module.exports = api;