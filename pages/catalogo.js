import { useState } from 'react';
import Link from 'next/link';

export default function Catalogo() {
  const [filtro, setFiltro] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Lista de productos actualizada
  const productos = [
    { id: 1, nombre: 'Cedro rojo, verde en tabla', precio: '$33 pesos el pie', tipo: 'Cedro', descripcion: 'Mínimo de compra 2,000 pies.', medidas: '' },
    { id: 2, nombre: 'Cedro rojo, verde viga o planchón', precio: '$25 pesos el pie', tipo: 'Cedro', descripcion: '', medidas: '' },
    { id: 3, nombre: 'Cedro rojo en tabla, estufado', precio: '$47 pesos el pie', tipo: 'Cedro', descripcion: '', medidas: '' },
    { id: 4, nombre: 'Parota o Huanacaxtle, verde en tabla', precio: '$35 pesos el pie', tipo: 'Parota', descripcion: '', medidas: '' },
    { id: 5, nombre: 'Parota o Huanacaxtle, verde viga o planchón', precio: '$28 pesos el pie', tipo: 'Parota', descripcion: '', medidas: '' },
    { id: 6, nombre: 'Parota o Huanacaxtle en tabla, estufado', precio: '$50 pesos el pie', tipo: 'Parota', descripcion: '', medidas: '' },
    { id: 7, nombre: 'Roble o Rosa Morada en tabla, verde', precio: '$35 pesos el pie', tipo: 'Roble', descripcion: '', medidas: '' },
    { id: 8, nombre: 'Roble o Rosa Morada, viga o planchón', precio: '$28 pesos el pie', tipo: 'Roble', descripcion: '', medidas: '' },
    { id: 9, nombre: 'Roble o Rosa Morada en tabla, estufada', precio: '$50 pesos el pie', tipo: 'Roble', descripcion: '', medidas: '' },
    { id: 10, nombre: 'Teca en tabla, verde', precio: '$43 pesos el pie', tipo: 'Teca', descripcion: '', medidas: '' },
    { id: 11, nombre: 'Teca, viga o planchón', precio: '$33 pesos el pie', tipo: 'Teca', descripcion: '', medidas: '' },
    { id: 12, nombre: 'Teca en tabla, estufada', precio: '$55 pesos el pie', tipo: 'Teca', descripcion: '', medidas: '' },
    { id: 13, nombre: 'Caoba en tabla, verde', precio: '$43 pesos el pie', tipo: 'Caoba', descripcion: '', medidas: '' },
    { id: 14, nombre: 'Caoba, viga o planchón', precio: '$33 pesos el pie', tipo: 'Caoba', descripcion: '', medidas: '' },
    { id: 15, nombre: 'Caoba en tabla, estufada', precio: '$58 pesos el pie', tipo: 'Caoba', descripcion: '', medidas: '' },
    { id: 16, nombre: 'Nogal en tabla, verde', precio: '$45 pesos el pie', tipo: 'Nogal', descripcion: '', medidas: '' },
    { id: 17, nombre: 'Nogal, viga o planchón', precio: '$40 pesos el pie', tipo: 'Nogal', descripcion: '', medidas: '' },
    { id: 18, nombre: 'Nogal en tabla, estufada', precio: '$60 pesos el pie', tipo: 'Nogal', descripcion: '', medidas: '' },
    { id: 19, nombre: 'Tzalam en tabla, verde', precio: '$45 pesos el pie', tipo: 'Tzalam', descripcion: '', medidas: '' },
    { id: 20, nombre: 'Tzalam, viga o planchón', precio: '$40 pesos el pie', tipo: 'Tzalam', descripcion: '', medidas: '' },
    { id: 21, nombre: 'Tzalam en tabla, estufado', precio: '$60 pesos el pie', tipo: 'Tzalam', descripcion: '', medidas: '' },
    { id: 22, nombre: 'Pino, primera calidad', precio: '$33 pesos el pie', tipo: 'Pino', descripcion: 'Medidas comerciales.', medidas: '' },
    { id: 23, nombre: 'Pino, viga o planchón para tarima', precio: '$12 pesos el pie', tipo: 'Pino', descripcion: '', medidas: '' },
    { id: 24, nombre: 'Pino, habilitado para tarima', precio: '$16 pesos el pie', tipo: 'Pino', descripcion: '', medidas: '' },
    { id: 25, nombre: 'Melina, viga o planchón para tarima', precio: '$11 pesos el pie', tipo: 'Melina', descripcion: '', medidas: '' },
    { id: 26, nombre: 'Melina, habilitada para tarima', precio: '$15 pesos el pie', tipo: 'Melina', descripcion: '', medidas: '' },
    { id: 27, nombre: 'Rodajas de parota, estufadas', precio: '$2,200 a $3,000 pesos', tipo: 'Parota', descripcion: '', medidas: '' },
    { id: 28, nombre: 'Planchones de parota para mesas, estufados', precio: '$4,000 a $8,000 pesos', tipo: 'Parota', descripcion: '', medidas: '' },
    { id: 29, nombre: 'Tarimas de exportación, pino y Melina', precio: 'Consultar', tipo: 'Tarimas', descripcion: '', medidas: '' },
    { id: 30, nombre: 'Astilla - Biocombustible', precio: '$1,700 pesos la tonelada', tipo: 'Biocombustible', descripcion: '', medidas: '' },
    { id: 31, nombre: 'Viruta para ganado (caballos, gallos)', precio: 'Consultar', tipo: 'Viruta', descripcion: '', medidas: '' },
    { id: 32, nombre: 'Mesas de parota terminadas', precio: 'Consultar', tipo: 'Parota', descripcion: 'Diferentes diseños y tamaños.', medidas: '' },
    { id: 33, nombre: 'Muebles de parota', precio: 'Consultar', tipo: 'Parota', descripcion: 'Escritorios, sillas y más.', medidas: '' },
    { id: 34, nombre: 'Chapa de Melina', precio: '$4,800 por metro cúbico', tipo: 'Melina', descripcion: '', medidas: '' },
  ];

  
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
    <div className="min-h-screen bg-[#F4F4F0] p-6">
      <h1 className="text-4xl font-extrabold text-center text-[#4E3620] mb-8">
        Altas Montañas Aserradero
      </h1>

      {/* Filtro */}
      <div className="max-w-lg mx-auto mb-8">
        <label htmlFor="filtro" className="block text-[#4E3620] font-bold mb-2">
          Filtrar por tipo de madera
        </label>
        <input
          type="text"
          id="filtro"
          value={filtro}
          onChange={handleFiltroChange}
          placeholder="Escribe 'Pino', 'Cedro', etc."
          className="w-full p-3 border border-[#4E3620] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8E23]"
        />
      </div>

      {/* Lista de productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {productosAMostrar.map((producto) => (
          <div
            key={producto.id}
            className="p-6 bg-white border border-[#4E3620] rounded-lg shadow-lg transition-transform hover:scale-105 cursor-pointer"
            onClick={() => setProductoSeleccionado(producto)}
          >
            <h3 className="text-xl font-semibold text-[#4E3620] mb-2">{producto.nombre}</h3>
            <p className="text-[#4E3620] mb-2">{producto.descripcion}</p>
            <p className="text-lg font-bold text-[#6B8E23]">{producto.precio}</p>
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
            <p className="text-xl font-bold text-[#6B8E23] mb-2">{productoSeleccionado.precio}</p>
            <p className="text-sm text-[#4E3620]">Medidas: {productoSeleccionado.medidas}</p>
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