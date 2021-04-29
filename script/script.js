const car = [
    {
      carPhoto: "photo/lamborghini.png",
      carMake: "Lamborghini",
      carModel: "Aventador Roadster",
      carProdYear: 2016,
      carEngine: "Benzyna",
      seatCount: 2,
      horsePower: 750,
      drive: "4x4",
    },
    {
      carPhoto: "photo/nissan.png",
      carMake: "Nissan",
      carModel: "GT-R",
      carProdYear: 2014,
      carEngine: "Benzyna",
      seatCount: 2,
      horsePower: 550,
      drive: "4x4",
    },
    {
      carPhoto: "photo/bmw.png",
      carMake: "BMW",
      carModel: "M8 Manhart",
      carProdYear: 2020,
      carEngine: "Benzyna",
      seatCount: 5,
      horsePower: 625,
      drive: "4x4",
    },
  ];
  
  const main = document.getElementById("rental-car");

  const carItem = car.map(item => {
    const createLi = document.createElement("div");
    createLi.className = "car-list";

    const contentLi = document.createElement("div")
    contentLi.className = "content"

    contentLi.innerHTML = `
    <img src="${item.carPhoto}" width="400px" height="225px" class="car"/>
    <p class="text">Marka: ${item.carMake}</p>
    <p class="text">Model: ${item.carModel}</p>
    <p class="text">Rok produkcji: ${item.carProdYear}</p>
    <p class="text">Silnik: ${item.carEngine}</p>
    <p class="text">Napęd: ${item.drive}</p>
    <p class="text">Moc silnika: ${item.horsePower} KM</p>
    <p class="text">Liczba miejsc siedzących: ${item.seatCount}</p>
    <button class="button">WYNAJMIJ</button>
  `
  createLi.appendChild(contentLi)
  main.appendChild(createLi)
  })

  






