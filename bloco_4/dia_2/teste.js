let array = [];
for (let index = 1; index <=25; index +=1) {
  array.push(index);

  for (let indexDividido = 0; indexDividido < array.length; indexDividido +=1) {
    console.log(array[indexDividido] / 2);
  }
} 