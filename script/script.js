const car = [
    {
      carPhoto: "assets/photo/lamborghini.png",
      carMake: "Lamborghini",
      carModel: "Aventador Roadster",
      carProdYear: 2016,
      carEngine: "Benzyna",
      seatCount: 2,
      horsePower: 750,
      drive: "4x4",
      valueIsRented: true,
      rented: "",
      availableRentDays: [1, 2, 3, 5, 10],
      rentPrice: 2121
    },
    {
      carPhoto: "assets/photo/nissan.png",
      carMake: "Nissan",
      carModel: "GT-R",
      carProdYear: 2014,
      carEngine: "Benzyna",
      seatCount: 2,
      horsePower: 550,
      drive: "4x4",
      valueIsRented: true,
      rented: "",
      availableRentDays: [2, 4, 6, 8, 10],
      rentPrice: 3132
    },
    {
      carPhoto: "assets/photo/bmw.png",
      carMake: "BMW",
      carModel: "M8 Manhart",
      carProdYear: 2020,
      carEngine: "Benzyna",
      seatCount: 5,
      horsePower: 625,
      drive: "4x4",
      valueIsRented: true,
      rented: "",
      availableRentDays: [1, 2, 5, 10, 15],
      rentPrice: 1200
    },
  ];
  
  const main = document.getElementById("container");


  const carItem = car.forEach(item => {
    const createLi = document.createElement("div");
    createLi.className = "box-car";

    const Cars = () => {
      if(item.valueIsRented === true) {
        document.innerHTML = "wyporzyczone"
      }
      else {
        document.innerHTML = "w magazynie"
      }
    };

    const contentLi = document.createElement("div")
    contentLi.className = "content-box-car"  

    contentLi.innerHTML = `
    <img src="${item.carPhoto}" width="400px" height="225px" class="car-photo"/>
    <p class="text">Marka: ${item.carMake}</p>
    <p class="text">Model: ${item.carModel}</p>
    <p class="text">Rok produkcji: ${item.carProdYear}</p>
    <p class="text">Silnik: ${item.carEngine}</p>
    <p class="text">Napęd: ${item.drive}</p>
    <p class="text">Moc silnika: ${item.horsePower} KM</p>
    <p class="text">Liczba miejsc siedzących: ${item.seatCount}</p>
    <p class="text">Cena wyporzyczenia za dzień: ${item.rentPrice}zł</p>
    <p class="text">Auto jest: ${Cars()}</p>
    <button class="button">WYNAJMIJ</button>
  `
  createLi.appendChild(contentLi)
  main.appendChild(createLi)
  })