const models = require('@sampleVueService/app/setup')
module.exports = (app) => {
    // console.log(app);

     const api = app.sampleServiceGit.app.api.auth;
    app.route('/')
       .get((req, res) => res.send('Welcome sample Vue API'));
    app.route('/api/v1/auth')
       .post(api.login(models.User)); 
}