const {testz} = require('./donné & autre/objet_mess_return');

(async () =>{
    const test = (await testz())[0];
    console.log(test);
})();