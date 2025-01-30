import React from 'react';

export default function Modal({ isOpen, closeModal, producto }) {
  if (!isOpen) return null; // Si el modal no está abierto, no se renderiza

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={closeModal}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{producto.nombre}</h2>
        <img src={producto.img} alt={producto.nombre} className="w-full mb-4 rounded" />
        <p><strong>Tipo de madera:</strong> {producto.tipo}</p>
        <p><strong>Descripción:</strong> {producto.descripcion}</p>
        <p><strong>Medidas:</strong> {producto.medidas}</p>
        <p><strong>Precio:</strong> {producto.precio}</p>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-4"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}
