module.exports = function () {
  var data = {
    usuarios: [
      {
        id:1,
        name: "Luisa",
        lastname: "Reyes",
        number: 460553990,
        email: "luisareyes@gmail.com",
        password: "mapa",
      },
      {
        id:2,
        name: "Juana",
        lastname: "Diaz",
        number: 784553240,
        email: "Juanad@gmail.com",
        password: "lopoli",
      },
      {
        id:3,
        name: "Pedro",
        lastname: "Galvez",
        number: 604553240,
        email: "PedroGal@gmail.com",
        password: "retado",
      },
      {
        id:4,
        name: "Jesus",
        lastname: "Solorzano",
        number: 500556840,
        email: "JesusSolor@gmail.com",
        password: "chocolate",
      },

    ],

    roles: [
      {
        id:800,
        name: "Discapacitado",
        usuarios:{
          id:2
        }
      },
    ]

  }

  return data
}
