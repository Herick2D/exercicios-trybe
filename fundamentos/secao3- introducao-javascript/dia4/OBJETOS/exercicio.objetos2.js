let saudacao = ['João', 'Maria', 'Jorge'];
for (let value of saudacao) {
    console.log('Olá, ' + value);
};

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car) {
    console.log(index, car[index]);
  }