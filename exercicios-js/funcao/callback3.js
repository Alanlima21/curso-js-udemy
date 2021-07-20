function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = 'Alan';
    callback(name);
  }
  
  processUserInput(greeting);

  //função passada a outra função como argumento