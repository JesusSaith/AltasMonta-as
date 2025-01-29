import { useState } from 'react';
import Link from 'next/link';

export default function Catalogo() {
  const [filtro, setFiltro] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  // Lista de productos actualizada
  const productos = [
    { id: 1, nombre: 'Cedro rojo, verde en tabla', precio: '$33 pesos el pie', tipo: 'Cedro', descripcion: 'Mínimo de compra 2,000 pies.', medidas: '',imagen: 'images/CEDROROJOENTABLAVERDE.jpg'  },
    { id: 2, nombre: 'Cedro rojo, verde viga o planchón', precio: '$25 pesos el pie', tipo: 'Cedro', descripcion: '', medidas: '' ,imagen: 'images/CEDROROJOVP.jpg' },
    { id: 3, nombre: 'Cedro rojo en tabla, estufado', precio: '$47 pesos el pie', tipo: 'Cedro', descripcion: '', medidas: '' , imagen: 'images/CEDROROJOESTU.jpg'},
    //{ id: 4, nombre: 'Parota o Huanacaxtle, verde en tabla', precio: '$35 pesos el pie', tipo: 'Parota', descripcion: '', medidas: '' },
    { id: 5, nombre: 'Parota o Huanacaxtle, verde viga o planchón', precio: '$28 pesos el pie', tipo: 'Parota', descripcion: '', medidas: '', imagen: 'images/PAROTAVIGAPLANCHON.jpg' },
    { id: 6, nombre: 'Parota o Huanacaxtle en tabla, estufado', precio: '$50 pesos el pie', tipo: 'Parota', descripcion: '', medidas: ''  ,imagen: 'images/PAROTAENTABLAESTUFADA.jpg' },
    { id: 7, nombre: 'Roble o Rosa Morada en tabla, verde', precio: '$35 pesos el pie', tipo: 'Roble', descripcion: '', medidas: '' ,imagen: 'images/7.jpg' },
    { id: 8, nombre: 'Roble o Rosa Morada, viga o planchón', precio: '$28 pesos el pie', tipo: 'Roble', descripcion: '', medidas: '' ,imagen: 'images/8.jpg'},
    { id: 9, nombre: 'Roble o Rosa Morada en tabla, estufada', precio: '$50 pesos el pie', tipo: 'Roble', descripcion: '', medidas: '' ,imagen: 'images/9.jpg'},
    { id: 10, nombre: 'Teca en tabla, verde', precio: '$43 pesos el pie', tipo: 'Teca', descripcion: '', medidas: '' ,imagen: 'images/10.jpg'},
    { id: 11, nombre: 'Teca, viga o planchón', precio: '$33 pesos el pie', tipo: 'Teca', descripcion: '', medidas: '' ,imagen: 'images/11.jpg'},
    { id: 12, nombre: 'Teca en tabla, estufada', precio: '$55 pesos el pie', tipo: 'Teca', descripcion: '', medidas: '' ,imagen: 'images/12.jpg'},
    //{ id: 13, nombre: 'Caoba en tabla, verde', precio: '$43 pesos el pie', tipo: 'Caoba', descripcion: '', medidas: '' },
    //{ id: 14, nombre: 'Caoba, viga o planchón', precio: '$33 pesos el pie', tipo: 'Caoba', descripcion: '', medidas: '' },
    //{ id: 15, nombre: 'Caoba en tabla, estufada', precio: '$58 pesos el pie', tipo: 'Caoba', descripcion: '', medidas: '' },
    //{ id: 16, nombre: 'Nogal en tabla, verde', precio: '$45 pesos el pie', tipo: 'Nogal', descripcion: '', medidas: '' },
    //{ id: 17, nombre: 'Nogal, viga o planchón', precio: '$40 pesos el pie', tipo: 'Nogal', descripcion: '', medidas: '' },
    //{ id: 18, nombre: 'Nogal en tabla, estufada', precio: '$60 pesos el pie', tipo: 'Nogal', descripcion: '', medidas: '' },
    //{ id: 19, nombre: 'Tzalam en tabla, verde', precio: '$45 pesos el pie', tipo: 'Tzalam', descripcion: '', medidas: '' },
    //{ id: 20, nombre: 'Tzalam, viga o planchón', precio: '$40 pesos el pie', tipo: 'Tzalam', descripcion: '', medidas: '' },
    //{ id: 21, nombre: 'Tzalam en tabla, estufado', precio: '$60 pesos el pie', tipo: 'Tzalam', descripcion: '', medidas: '' },
    { id: 22, nombre: 'Pino, primera calidad', precio: '$33 pesos el pie', tipo: 'Pino', descripcion: 'Medidas comerciales.', medidas: '',imagen: 'images/22.jpg' },
    { id: 23, nombre: 'Pino, viga o planchón para tarima', precio: '$12 pesos el pie', tipo: 'Pino', descripcion: '', medidas: '' ,imagen: 'images/23.jpg'},
    { id: 24, nombre: 'Pino, habilitado para tarima', precio: '$16 pesos el pie', tipo: 'Pino', descripcion: '', medidas: '' ,imagen: 'images/24.jpg'},
    { id: 25, nombre: 'Melina, viga o planchón para tarima', precio: '$11 pesos el pie', tipo: 'Melina', descripcion: '', medidas: '' ,imagen: 'images/26.jpg'},
    { id: 26, nombre: 'Melina, habilitada para tarima', precio: '$15 pesos el pie', tipo: 'Melina', descripcion: '', medidas: '' ,imagen: 'images/25.jpg'},
    { id: 27, nombre: 'Rodajas de parota, estufadas', precio: '$2,200 a $3,000 pesos', tipo: 'Parota', descripcion: '', medidas: '' ,imagen: 'images/27.jpg' },
    { id: 28, nombre: 'Planchones de parota para mesas, estufados', precio: '$4,000 a $8,000 pesos', tipo: 'Parota', descripcion: '', medidas: '' ,imagen: 'images/33.jpg'},
    { id: 29, nombre: 'Tarimas de exportación, pino y Melina', precio: 'Consultar', tipo: 'Tarimas', descripcion: '', medidas: '',imagen: 'images/28.jpg' },
    { id: 30, nombre: 'Astilla - Biocombustible', precio: '$1,700 pesos la tonelada', tipo: 'Biocombustible', descripcion: '', medidas: '',imagen: 'images/29.jpg' },
    { id: 31, nombre: 'Viruta para ganado (caballos, gallos)', precio: 'Consultar', tipo: 'Viruta', descripcion: '', medidas: '' ,imagen: 'images/30.jpg'},
    { id: 32, nombre: 'Mesas de parota terminadas', precio: 'Consultar', tipo: 'Parota', descripcion: 'Diferentes diseños y tamaños.', medidas: '' ,imagen: 'images/31.jpg'},
    { id: 33, nombre: 'Muebles de parota', precio: 'Consultar', tipo: 'Parota', descripcion: 'Escritorios, sillas y más.', medidas: '',imagen: 'images/32.jpg' },
    //{ id: 34, nombre: 'Chapa de Melina', precio: '$4,800 por metro cúbico', tipo: 'Melina', descripcion: '', medidas: '' },
  ];

  
  
  // Filtros por tipo de madera
  const tiposDeMadera = [...new Set(productos.map((producto) => producto.tipo))];

  // Filtrar productos según el filtro
  const handleFiltroChange = (e) => {
    const valor = e.target.value;
    setFiltro(valor);

    const filtrados = productos.filter((producto) =>
      producto.tipo.toLowerCase().includes(valor.toLowerCase())
    );

    setProductosFiltrados(filtrados);
  };

  // Productos que se mostrarán (todos o filtrados)
  const productosAMostrar = filtro ? productosFiltrados : productos;

  return (
    <div className="min-h-screen bg-[#F4F4F0] p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold text-center text-[#4E3620] mb-8">
        MADERAS ALTAS MONTAÑAS
      </h1>

      {/* Filtro */}
      <div className="max-w-lg w-full mb-8">
        <label htmlFor="filtro" className="block text-[#4E3620] font-bold mb-2">
          Filtrar por tipo de madera
        </label>
        <select
          id="filtro"
          value={filtro}
          onChange={handleFiltroChange}
          className="w-full p-3 border border-[#4E3620] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
        >
          <option value="">Todos los tipos</option>
          {tiposDeMadera.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {productosAMostrar.map((producto) => (
          <div
            key={producto.id}
            className="p-6 bg-white border border-[#4E3620] rounded-lg shadow-lg transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setProductoSeleccionado(producto)}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold text-[#4E3620] mb-2">{producto.nombre}</h3>
            <p className="text-[#4E3620] mb-2">{producto.descripcion}</p>
            <p className="text-lg font-bold text-[#6B8E23]">{producto.precio ? `${producto.precio} pesos` : 'Consultar'}</p>
            <p className="text-sm text-[#4E3620]">{producto.medidas}</p>
          </div>
        ))}
      </div>

      {/* Modal de producto */}
      {productoSeleccionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-3xl font-bold text-[#4E3620] mb-4">{productoSeleccionado.nombre}</h3>
            <p className="text-[#4E3620] mb-3">{productoSeleccionado.descripcion}</p>
            <p className="text-xl font-bold text-[#6B8E23] mb-2">{productoSeleccionado.precio ? `${productoSeleccionado.precio} pesos` : 'Consultar'}</p>
            <p className="text-sm text-[#4E3620]">Medidas: {productoSeleccionado.medidas}</p>
            <div className="mb-4">
              <img
                src={productoSeleccionado.imagen}
                alt={productoSeleccionado.nombre}
                className="w-full h-72 object-cover mb-4 rounded-md"
              />
            </div>
            <button
              onClick={() => setProductoSeleccionado(null)}
              className="mt-5 bg-[#4E3620] text-white px-6 py-3 rounded-full shadow-md hover:scale-110 transition-transform"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Botón para regresar al inicio */}
      <div className="flex justify-center mt-12">
        <Link href="/">
          <button className="bg-[#4E3620] text-white px-8 py-4 rounded-full shadow-lg hover:scale-110 transition-transform">
            Regresar al Inicio
          </button>
        </Link>
      </div>
    </div>
  );
}