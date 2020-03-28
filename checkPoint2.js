let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  function getAge(a) {
    return new Date().getFullYear() - a.bornOn;
  }
  
  pets.forEach(a => {a.age =getAge(a)})

  console.log(pets);

  const  tab = pets.filter(a => {return a.type == "dog"})

  console.log(tab);

  const element = pets.find(a => {return a.name == "Jasper"})

  console.log(element);
  
  console.log(`Jasper is ${element.age} years old`);