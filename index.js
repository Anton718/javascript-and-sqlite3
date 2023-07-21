const cars = [
  "Abarth",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Bugatti",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroën",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Dodge",
  "Donkervoort",
  "DS",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Honda",
  "Hummer",
  "Hyundai",
  "Infiniti",
  "Iveco",
  "Jaguar",
  "Jeep",
  "Kia",
  "KTM",
  "Lada",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "Landwind",
  "Lexus",
  "Lotus",
  "Maserati",
  "Maybach",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MG",
  "Mini",
  "Mitsubishi",
  "Morgan",
  "Nissan",
  "Opel",
  "Peugeot",
  "Porsche",
  "Renault",
  "Rolls-Royce",
  "Rover",
  "Saab",
  "Seat",
  "Skoda",
  "Smart",
  "SsangYong",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo"
]

const carsCapitalized = cars.map((car) => car.toUpperCase())

document.body.style.backgroundColor = '#111';
document.body.style.margin = '10px 60px';

const divHeader  = document.querySelector(".header")
divHeader.style.display = 'flex'
const instaImg = document.createElement('img')
instaImg.src = "images/instagram.png"
instaImg.addEventListener('click', () => window.open('https://www.instagram.com')) 
instaImg.style.width = '30px'
instaImg.style.height = '30px'
const mailImg = document.createElement('img')
mailImg.src = "images/gmail.png"
mailImg.addEventListener('click', () => window.open('https://www.gmail.com'))
mailImg.style.width = '30px'
mailImg.style.height = '30px'
divHeader.style.gap = '30px'
instaImg.style.cursor = 'pointer'
mailImg.style.cursor = 'pointer'
divHeader.append(instaImg)
divHeader.append(mailImg)

const divMain = document.querySelector('.main');
const header = document.createElement('h1');
header.style.cursor = 'pointer'
divMain.append(header);
const options = document.createElement('div')
divMain.append(options)
header.addEventListener('click', () => {divCards.innerHTML = ''; getData()})
divMain.style.margin = 'auto';
header.innerText = 'CARS';
header.style.color = '#fff'
header.style.textAlign = 'center';

const btn_btn = document.createElement('button')
btn_btn.style.width = '200px';
btn_btn.style.height = '25px'
btn_btn.style.fontWeight = '800'
btn_btn.innerText = 'Add car'
btn_btn.style.cursor = 'pointer'
btn_btn.addEventListener('mouseover', () => {btn_btn.style.backgroundColor = '#b3b3cc'})
btn_btn.addEventListener('mouseleave', () => {btn_btn.style.backgroundColor = '#fff'})

var input_carname = document.createElement('input')
var input_carprice = document.createElement('input')
input_carname.style.decoration = 'none'
input_carprice.style.decoration = 'none'
input_carname.style.outline = 'none'
input_carprice.style.outline = 'none'
const div_wrapper = document.createElement('div')
div_wrapper.style.width = '200px'
div_wrapper.style.margin = 'auto'
divMain.append(div_wrapper)
div_wrapper.append(input_carname)
div_wrapper.append(input_carprice)
div_wrapper.append(btn_btn)
div_wrapper.style.display = 'flex'
div_wrapper.style.flexDirection = 'column'
div_wrapper.style.gap = '10px'
const divCards = document.createElement('div')
divCards.style.display = 'flex'
divCards.style.flexWrap = 'wrap'
divCards.style.textAlign = 'center'
divCards.style.gap = '50px'
divCards.style.color = '#fff'
divMain.append(divCards)

function createCards(data) {
  for (i of data) {
    let USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
  });
  const divCard = document.createElement('div')
  divCard.style.width = '200px'
  divCard.style.margin = 'auto'
  const img = document.createElement('img')
  img.style.width = '200px'
  img.style.height = 'auto'
  const carTitle = document.createElement('h2')
  const carPrice = document.createElement('p')
  carPrice.style.fontWeight = '800'
  const btn_info = document.createElement('button')
  btn_info.addEventListener('mouseover', () => {btn_info.style.backgroundColor = '#b3b3cc'})
  btn_info.addEventListener('mouseleave', () => {btn_info.style.backgroundColor = '#fff'})
  btn_info.addEventListener('click', function getCarInfo() {
    divCards.innerHTML = ''
    divCards.append(divCard)
    const btn_back = document.createElement('button')
    btn_back.addEventListener('mouseover', () => {btn_back.style.backgroundColor = '#b3b3cc'})
    btn_back.addEventListener('mouseleave', () => {btn_back.style.backgroundColor = '#fff'})
    btn_back.style.outline = 'none'
    btn_back.style.border = 'none'
    btn_back.innerText = 'Back'
    btn_info.remove()
    const info_paragraph = document.createElement('p')
    info_paragraph.style.textAlign = 'justify'
    info_paragraph.style.fontFamily = 'verdana'
    info_paragraph.innerText = 'Search millions of new and used cars for sale. Save favorites for price drop alerts and tailored recommendations. Find the right vehicle at a highly-rated local dealer.'
    divCard.append(info_paragraph) 
    divCard.append(btn_back)
    btn_back.addEventListener('click', function restoreData() {divCards.innerHTML = ''; getData()})
  })
  btn_info.style.width = '100px'
  btn_info.style.height = '20px'
  btn_info.style.outline = 'none'
  btn_info.style.border = 'none'
  btn_info.style.cursor = 'pointer'
  btn_info.innerText = 'info'
  btn_info.style.marginTop = '10px'
  carTitle.innerText = i.name.toUpperCase()
  carPrice.innerText = USDollar.format(i.price)
  img.src = 'images/car.webp'
  divCard.append(carTitle)
  divCard.append(carPrice)
  divCard.append(img)
  divCard.append(btn_info)
  divCards.append(divCard)
  }
}

async function getData() { 
  try {
  const response =  await fetch('http://localhost:3000')
  const data = await response.json()
  createCards(data)
  } catch {
    const loader = document.createElement('div')
    loader.style.cursor = 'pointer'
    loader.addEventListener('click', () => {divCards.innerHTML = ''; getData()})
    const flasher = document.createElement('h3')
    flasher.innerText = 'Backend database is OFF'
    flasher.style.color = '#fff'
    loader.setAttribute("class", "loader")
    loader.style.margin = '100px auto'
    loader.append(flasher)
    divCards.append(loader)
  }
  }
getData()

btn_btn.addEventListener('click', async () => {
    var name = input_carname.value;
    var price = input_carprice.value;
    if (name === '' || price === '') {
      alert('Fill the form'); return;
    }
    if (isNaN(price)) {
      alert('Price is a number'); return;
    }
    if (!carsCapitalized.includes(name.toUpperCase())) {
      alert('Car maker is not valid'); return;
    }
    await fetch('http://localhost:3000/cars', 
    {method: "POST", 
    mode: "cors", 
    cache: "no-cache", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name: name, price: price})})
    input_carname.value = ''
    input_carprice.value = ''
    divCards.innerHTML = ''
    getData()
})


