function greet(name) {
    return new Promise((resolve) => {
      resolve(`Hello, ${name}!`);
    }).finally(() => console.log("Done."));
  }
  
  greet("Mithun").then((greeting) => {
    console.log(greeting);
  });  