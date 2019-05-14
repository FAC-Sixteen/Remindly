const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('app is up and running on port', app.get('port'));
});