const Products = [
    {
      "id": 1,
      "name": "Toyota Highlander",
      "brand": "Toyota",
      "price": 25000,
      "discounted_price": 23000,
      "type": "SUV",
      "color": "Red",
      "photo": "https://media.istockphoto.com/id/1189903200/photo/red-generic-sedan-car-isolated-on-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=uRu3o_h5FVljLQHS9z0oyz-XjXzzXN_YkyGXwhdMrjs="
    },
    {
      "id": 2,
      "name": "Honda Accord",
      "brand": "Honda",
      "price": 22000,
      "discounted_price": 19000,
      "type": "Sedan",
      "color": "Blue",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIXMkdpU9k22AVUHYvnlUQiyOmEUMn2whdbQ&s"
    },
    {
      "id": 3,
      "name": "Ford F-150",
      "brand": "Ford",
      "price": 30000,
      "discounted_price": 28000,
      "type": "Truck",
      "color": "Black",
      "photo": "https://www.spinny.com/blog/wp-content/uploads/2023/03/Black-Mahindra-XUV-3XO-1160x653.webp"
    },
    {
      "id": 4,
      "name": "Chevrolet Camaro",
      "brand": "Chevrolet",
      "price": 27000,
      "discounted_price": 25000,
      "type": "Coupe",
      "color": "White",
      "photo": "https://imgd.aeplcdn.com/1280x720/cw/ec/21745/Chevrolet-Beat-Right-Front-Three-Quarter-81148.jpg?wm=0&q=80"
    },
    {
      "id": 5,
      "name": "BMW Z4",
      "brand": "BMW",
      "price": 45000,
      "discounted_price": 42000,
      "type": "Convertible",
      "color": "Silver",
      "photo": "https://imgd.aeplcdn.com/640X480/cw/ucp/stockApiImg/BL6BJ85_kc3x1au6_1_43694081.jpg?q=80"
    },
    {
      "id": 6,
      "name": "Mercedes-Benz E-Class",
      "brand": "Mercedes-Benz",
      "price": 55000,
      "discounted_price": null,
      "type": "Sedan",
      "color": "Grey",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrtXVt5sKQT2_e6GgXxx98aZeHHl5H5mUz2w&s"
    },
    {
      "id": 7,
      "name": "Audi Q5",
      "brand": "Audi",
      "price": 40000,
      "discounted_price": 38000,
      "type": "SUV",
      "color": "Green",
      "photo": "https://t3.ftcdn.net/jpg/05/79/95/94/360_F_579959480_8TSfoDoZNodq0qdRkDWPkTTeHVvTzwrK.jpg"
    },
    {
      "id": 8,
      "name": "Tesla Model S",
      "brand": "Tesla",
      "price": 60000,
      "discounted_price": 57000,
      "type": "Sedan",
      "color": "Red",
      "photo": "https://media.istockphoto.com/id/1006541592/photo/3d-illustration-of-generic-red-sports-coupe-car-on-white-background.jpg?s=612x612&w=0&k=20&c=bj11mhk3sCygoJOiRQhUUAlTE1__5GQDluk7O60KrMs="
    },
    {
      "id": 9,
      "name": "Volvo V60",
      "brand": "Volvo",
      "price": 35000,
      "discounted_price": null,
      "type": "Wagon",
      "color": "Blue",
      "photo": "https://media.architecturaldigest.com/photos/5b9691509cd13621bf9b559b/16:9/w_2991,h_1682,c_limit/JPrice_Lamborghini_MCW18-1755.jpg"
    },
    {
      "id": 10,
      "name": "Nissan Rogue",
      "brand": "Nissan",
      "price": 28000,
      "discounted_price": 26000,
      "type": "SUV",
      "color": "Yellow",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtYJXaDrQszMmnCSPcEe_KpR55uXUerUzpBA&s"
    },
    {
      "id": 11,
      "name": "Mazda 3",
      "brand": "Mazda",
      "price": 24000,
      "discounted_price": 22000,
      "type": "Hatchback",
      "color": "Purple",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RiCM0aWGgRV4Vwe3xB4QSFNIoWrXFyXvkg&s"
    },
    {
      "id": 12,
      "name": "Kia Optima",
      "brand": "Kia",
      "price": 20000,
      "discounted_price": null,
      "type": "Sedan",
      "color": "Black",
      "photo": "https://robbreport.com/wp-content/uploads/2016/04/slideshow-lead_15.jpg?w=772"
    },
    {
      "id": 13,
      "name": "Hyundai Tucson",
      "brand": "Hyundai",
      "price": 21000,
      "discounted_price": 19000,
      "type": "SUV",
      "color": "White",
      "photo": "https://etimg.etb2bimg.com/photo/72306162.cms"
    },
    {
      "id": 14,
      "name": "Volkswagen Passat",
      "brand": "Volkswagen",
      "price": 32000,
      "discounted_price": 30000,
      "type": "Sedan",
      "color": "Grey",
      "photo": "https://imgd-ct.aeplcdn.com/1056x660/n/m75ja4a_1513283.jpg?q=80"
    },
    {
      "id": 15,
      "name": "Subaru Outback",
      "brand": "Subaru",
      "price": 27000,
      "discounted_price": 25000,
      "type": "SUV",
      "color": "Blue",
      "photo": "https://d2m3nfprmhqjvd.cloudfront.net/blog/20230107155653/Tata-Safari-Facelift-jpg.webp"
    },
    {
      "id": 16,
      "name": "Jaguar XF",
      "brand": "Jaguar",
      "price": 50000,
      "discounted_price": null,
      "type": "Sedan",
      "color": "Black",
      "photo": "https://media.istockphoto.com/id/485481458/photo/generic-black-car-on-white.jpg?s=612x612&w=0&k=20&c=gFLwkhT2rycIxvQdJ1eYgyr_FhGkmTXJkce4gnZPIJM="
    },
    {
      "id": 17,
      "name": "Lexus RX",
      "brand": "Lexus",
      "price": 53000,
      "discounted_price": 51000,
      "type": "SUV",
      "color": "Red",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Sd2uZwMsDBBVjAfkDaQSX5imDUwmsOrSVQ&s"
    },
    {
      "id": 18,
      "name": "Infiniti Q50",
      "brand": "Infiniti",
      "price": 48000,
      "discounted_price": 46000,
      "type": "Sedan",
      "color": "Silver",
      "photo": "https://cdn.trendhunterstatic.com/thumbs/bmw-ix-flow.jpeg?auto=webp"
    },
    {
      "id": 19,
      "name": "Acura MDX",
      "brand": "Acura",
      "price": 45000,
      "discounted_price": 43000,
      "type": "SUV",
      "color": "White",
      "photo": "https://carwow-uk-wp-3.imgix.net/Volvo-XC40-white-scaled.jpg"
    },
    {
      "id": 20,
      "name": "Cadillac CTS",
      "brand": "Cadillac",
      "price": 55000,
      "discounted_price": null,
      "type": "Sedan",
      "color": "Grey",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-CYEttx2X_SRWNuh1ddHqXaaipGpZzLv7A&s"
    },
    {
      "id": 21,
      "name": "Buick Enclave",
      "brand": "Buick",
      "price": 34000,
      "discounted_price": null,
      "type": "SUV",
      "color": "Blue",
      "photo": "https://img.freepik.com/free-vector/blue-sports-car-isolated-white-vector_53876-67354.jpg"
    },
    {
      "id": 22,
      "name": "Porsche 911",
      "brand": "Porsche",
      "price": 75000,
      "discounted_price": 73000,
      "type": "Coupe",
      "color": "Red",
      "photo": "https://t4.ftcdn.net/jpg/05/82/19/07/360_F_582190763_mDxDmNtsj7Va6hZ6WqpDEWzsYCivnAiI.jpg"
    },
    {
      "id": 23,
      "name": "Land Rover Defender",
      "brand": "Land Rover",
      "price": 80000,
      "discounted_price": 78000,
      "type": "SUV",
      "color": "Green",
      "photo": "https://waterfromrock.org/wp-content/uploads/2017/01/Green-Cars-Nice-18-e1485190095968.jpg"
    },
    {
      "id": 24,
      "name": "Mitsubishi Mirage",
      "brand": "Mitsubishi",
      "price": 23000,
      "discounted_price": null,
      "type": "Hatchback",
      "color": "Yellow",
      "photo": "https://img.freepik.com/free-photo/view-3d-car_23-2150796896.jpg"
    },
    {
      "id": 25,
      "name": "Ferrari 488",
      "brand": "Ferrari",
      "price": 300000,
      "discounted_price": 290000,
      "type": "Coupe",
      "color": "Red",
      "photo": "https://thumbs.dreamstime.com/b/futuristic-red-sports-car-motion-neon-lights-urban-background-futuristic-red-sports-car-motion-neon-lights-324550212.jpg"
    },
    {
      "id": 26,
      "name": "Lamborghini Huracan",
      "brand": "Lamborghini",
      "price": 350000,
      "discounted_price": 340000,
      "type": "Convertible",
      "color": "Black",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrQAva3T-12USHLE2fkKZyzvKa6P_ESdvXQ&s"
    },
    {
      "id": 27,
      "name": "Bentley Continental",
      "brand": "Bentley",
      "price": 250000,
      "discounted_price": 240000,
      "type": "Sedan",
      "color": "Silver",
      "photo": "https://media.istockphoto.com/id/187135269/photo/luxury-silver-sports-car.jpg?s=612x612&w=0&k=20&c=58VU8wbnJaJJPPoYqRzy6GR0L1dxueW5wGU-Rm7ToNE="
    },
    {
      "id": 28,
      "name": "Rolls-Royce Phantom",
      "brand": "Rolls-Royce",
      "price": 400000,
      "discounted_price": 390000,
      "type": "Sedan",
      "color": "White",
      "photo": "https://teja10.kuikr.com/cb1/reviews/honda-city-white_1.jpeg"
    },
    {
      "id": 29,
      "name": "Maserati Ghibli",
      "brand": "Maserati",
      "price": 150000,
      "discounted_price": 140000,
      "type": "Coupe",
      "color": "Blue",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ovL_xitOn4513JreF84wtB-8VKGzAhOj_A&s"
    },
    {
      "id": 30,
      "name": "Alfa Romeo Giulia",
      "brand": "Alfa Romeo",
      "price": 90000,
      "discounted_price": 87000,
      "type": "Sedan",
      "color": "Grey",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEq5UdtNtUBDsRJaNqyJH6k4n0tPpEpCV5WQ&s"
    }
  ]
  export default Products
  