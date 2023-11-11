const propiedades_alquiler = [
    {
        nombre: 'Arriendo 1',
        src: './assets/img/1.png',
        descripcion: 'Se arrienda casa 1',
        ubicacion: 'Las Condes',
        habitaciones: 3,
        banoos: 2,
        costo: 1000000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Arriendo 2',
        src: './assets/img/2.png',
        descripcion: 'Se arrienda casa 2',
        ubicacion: 'La serena',
        habitaciones: 6,
        banoos: 3,
        costo: 550000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Arriendo 3',
        src: './assets/img/3.png',
        descripcion: 'Se arrienda casa 3',
        ubicacion: 'Puerto Montt',
        habitaciones: 3,
        banoos: 1,
        costo: 800000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Arriendo 4',
        src: './assets/img/4.png',
        descripcion: 'Se arrienda casa 4',
        ubicacion: 'Santiago',
        habitaciones: 4,
        banoos: 2,
        costo: 700000,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Arriendo 5',
        src: './assets/img/1.png',
        descripcion: 'Se arrienda casa 5',
        ubicacion: 'Calama',
        habitaciones: 5,
        banoos: 3,
        costo: 850000,
        smoke: true,
        pets: true
    }

    ]


    const propiedades_venta = [
        {
            nombre: 'Venta casa 1',
            src: './assets/img/6.png',
            descripcion: 'Se vende casa 1',
            ubicacion: 'Las Condes',
            habitaciones: 3,
            banoos: 2,
            costo: 100000000,
            smoke: true,
            pets: false
        },
        {
            nombre: 'Venta casa 2',
            src: './assets/img/7.png',
            descripcion: 'Se vende casa 2',
            ubicacion: 'La serena',
            habitaciones: 6,
            banoos: 4,
            costo: 200000000,
            smoke: false,
            pets: true
        },
        {
            nombre: 'Venta casa 3',
            src: './assets/img/8.png',
            descripcion: 'Se vende casa 3',
            ubicacion: 'Puerto Montt',
            habitaciones: 3,
            banoos: 3,
            costo: 8000000,
            smoke: false,
            pets: true
        },
        {
            nombre: 'Venta casa 4',
            src: './assets/img/9.png',
            descripcion: 'Se vende casa 4',
            ubicacion: 'Santiago',
            habitaciones: 4,
            banoos: 2,
            costo: 7000000,
            smoke: true,
            pets: true
        },
        {
            nombre: 'Venta casa 5',
            src: './assets/img/10.png',
            descripcion: 'Se vende casa 5',
            ubicacion: 'Calama',
            habitaciones: 5,
            banoos: 3,
            costo: 8500000,
            smoke: false,
            pets: false
        }
    
        ]



let ventaCard = '';
let ventaHTML = document.querySelector('#id_venta')
let countVenta = 0;

for (let venta of propiedades_venta){

    let mostrarFumar = '';
    let mostrarMascota = '';

    if (venta.smoke)
        mostrarFumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
    else
        mostrarFumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'

    if (venta.pets)
        mostrarMascota = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    else
        mostrarMascota = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
      
    ventaCard+=`
    <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${venta.src}" class="card-img-top" alt="Imagen del departamento"/>
      <div class="card-body">
        <h5 class="card-title">
          ${venta.nombre}</h5>
        <p class="card-text">
          ${venta.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}</p>
        <p>
          <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${venta.banoos} Baños
        </p>
        <p>
          <i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
          ${mostrarFumar}
          ${mostrarMascota}
        
      </div>
    </div>
  </div>
  `
  countVenta++

  if (countVenta >=3  && codigoPagina == 0)
      break


}
if (ventaHTML)
    ventaHTML.innerHTML = ventaCard;

let arriendoCard = '';
let arriendoHTML = document.querySelector('#id_arriendo')
let countArriendo = 0;
for (let arriendo of propiedades_alquiler){


    let mostrarFumar = '';
    let mostrarMascota = '';

    if (arriendo.smoke)
        mostrarFumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
    else
        mostrarFumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'

    if (arriendo.pets)
        mostrarMascota = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    else
        mostrarMascota = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
      
    arriendoCard+=`
    <div class="col-md-4 mb-4">
    <div class="card">
      <img src="${arriendo.src}" class="card-img-top" alt="Imagen del departamento"/>
      <div class="card-body">
        <h5 class="card-title">
          ${arriendo.nombre}</h5>
        <p class="card-text">
          ${arriendo.descripcion}</p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${arriendo.ubicacion}</p>
        <p>
          <i class="fas fa-bed"></i> ${arriendo.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${arriendo.banoos} Baños
        </p>
        <p>
          <i class="fas fa-dollar-sign"></i> ${arriendo.costo}</p>
          ${mostrarFumar}
          ${mostrarMascota}
        
      </div>
    </div>
  </div>
  `
  countArriendo++

  if (countArriendo >=3 && codigoPagina == 0)
      break

      
}

if (arriendoHTML)
    arriendoHTML.innerHTML = arriendoCard;