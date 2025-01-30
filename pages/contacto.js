// En tu archivo de contacto (Contacto.js)
import { useState } from 'react';
import Link from 'next/link';
import emailjs from 'emailjs-com';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Verificar si los campos están vacíos
    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setError('Por favor, complete todos los campos.');
      return;
    }
  
    // Parámetros que se enviarán al template de EmailJS
    const templateParams = {
      from_name: formData.nombre,   // Enviar el nombre del usuario
      from_email: formData.email,   // Enviar el correo del usuario
      message: formData.mensaje,    // Enviar el mensaje del usuario
    };
  
    // Enviar el formulario a EmailJS
    emailjs
      .send('service_19avfc1', 'template_dz77fff', templateParams, 'WOo5HXLgVLyC7bA1V') // Asegúrate de que estos IDs sean correctos
      .then(
        (result) => {
          console.log(result.text);
          setIsSubmitted(true);
          setError(null); // Limpiar error
        },
        (error) => {
          console.error(error.text);
          setError('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        }
      );
  };
  
  return (
    <div className="container mx-auto px-6 py-12 bg-[#F5F5F5]">
      <h2 className="text-5xl font-extrabold text-[#4E3620] text-center mb-8">
       MADERAS ALTAS MONTAÑAS
      </h2>

      {/* Formulario de contacto */}
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl">
          <div className="mb-6">
            <label htmlFor="nombre" className="block text-[#4E3620] text-lg font-semibold mb-2">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-4 border-2 border-[#4E3620] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#4E3620] text-lg font-semibold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border-2 border-[#4E3620] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="mensaje" className="block text-[#4E3620] text-lg font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-4 border-2 border-[#4E3620] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B8E23] focus:border-[#6B8E23]"
              rows="5"
              required
            ></textarea>
          </div>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <div className="flex justify-center gap-6">
            <button
              type="submit"
              className="bg-[#6B8E23] text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Enviar
            </button>
            <Link href="/">
              <button className="bg-[#4E3620] text-white px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
                Regresar al Inicio
              </button>
            </Link>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <h3 className="text-2xl text-[#4E3620] font-semibold">¡Gracias por contactarnos!</h3>
          <p className="text-lg text-[#4E3620]">Tu mensaje ha sido enviado exitosamente.</p>
          <Link href="/">
            <button className="bg-[#4E3620] text-white px-8 py-4 rounded-full shadow-lg mt-6 hover:scale-105 transition-transform duration-200">
              Regresar al Inicio
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
