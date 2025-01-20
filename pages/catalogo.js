import { useState } from 'react';
import Modal from '../components/Modal';

export default function Catalogo() {
  // Definir el estado para abrir/cerrar el modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Lista de productos de ejemplo
  const productos = [
    { 
      id: 1, 
      nombre: 'Madera de Pino', 
      precio: '$100',
      tipo: 'Pino', 
      descripcion: 'Madera de alta calidad, ideal para construcción.',
      medidas: '2m x 10cm x 5cm',
      img: '/pino.jpg' 
    },
    { 
      id: 2, 
      nombre: 'Madera de Cedro', 
      precio: '$150',
      tipo: 'Cedro', 
      descripcion: 'Ideal para muebles y acabados de lujo.',
      medidas: '2m x 12cm x 5cm',
      img: '/cedro.jpg' 
    },
    // Añadir más productos aquí
  ];

  // Función para abrir el modal
  const openModal = (producto) => {
    setProductoSeleccionado(producto);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setProductoSeleccionado(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Catálogo de Productos</h1>
      <div className="grid grid-cols-2 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="cursor-pointer" onClick={() => openModal(producto)}>
            <img src={producto.img} alt={producto.nombre} className="w-full h-60 object-cover rounded" />
            <h3 className="mt-2 text-lg font-semibold">{producto.nombre}</h3>
            <p>{producto.precio}</p>
          </div>
        ))}
      </div>

      {/* Aquí se muestra el modal si está abierto */}
      <Modal 
        isOpen={isModalOpen} 
        closeModal={closeModal} 
        producto={productoSeleccionado} 
      />
    </div>
  );
}
