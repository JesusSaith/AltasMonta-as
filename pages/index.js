import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('opacity-100');
      }, index * 200);
    });

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#4E3620] text-white shadow-md z-50">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-white">Altas Montañas</h1>
    <ul className="flex space-x-8">
      <li>
        <a
          href="#mision"
          className="text-lg font-semibold hover:text-[#F5F5DC] transition-colors duration-300 flex items-center gap-2"
        >
          <i className="fas fa-bullseye"></i> {/* Icono para Misión */}
          Misión
        </a>
      </li>
      <li>
        <a
          href="#vision"
          className="text-lg font-semibold hover:text-[#F5F5DC] transition-colors duration-300 flex items-center gap-2"
        >
          <i className="fas fa-eye"></i> {/* Icono para Visión */}
          Visión
        </a>
      </li>
      <li>
        <a
          href="#alcance"
          className="text-lg font-semibold hover:text-[#F5F5DC] transition-colors duration-300 flex items-center gap-2"
        >
          <i className="fas fa-globe"></i> {/* Icono para Alcance */}
          Alcance
        </a>
      </li>
      <li>
        <a
          href="#testimonios"
          className="text-lg font-semibold hover:text-[#F5F5DC] transition-colors duration-300 flex items-center gap-2"
        >
          <i className="fas fa-comments"></i> {/* Icono para Testimonios */}
          Testimonios
        </a>
      </li>
    </ul>
  </div>
</nav>


      <main className="pt-20">
        {/* Portada */}
        <section
          className="relative w-full h-80 bg-cover bg-center"
          style={{
            backgroundImage: "url('images/f6181f8e-316d-4f7f-ac29-b19c64cf077f.jpg')",
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative h-full flex justify-center items-center">
            <h1 className="text-4xl font-bold text-white text-center animate__animated animate__fadeInDown">
              Bienvenido a Maderas Altas Montañas
            </h1>
          </div>
        </section>

        {/* Botones de Catálogo y Contáctanos */}
        <section className="py-12 bg-[#8B5E3C] text-center fade-in opacity-0">
          <div className="flex justify-center gap-8">
            <a
              href="/catalogo"
              className="bg-[#6B8E23] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transform transition-transform hover:scale-110"
            >
              Catálogo
            </a>
            <a
              href="/contacto"
              className="bg-[#6B8E23] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transform transition-transform hover:scale-110"
            >
              Contáctanos
            </a>
          </div>
        </section>

        {/* Carrusel de Fotos - Nuestro Trabajo */}
        <section id="carrusel" className="py-12 bg-[#F5F5DC] fade-in opacity-0">
          <h2 className="text-5xl font-extrabold text-[#4E3620] mb-6 text-center animate__animated animate__fadeInUp">
            Nuestro Trabajo
          </h2>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <img
                  src="images/especial1.jpg"
                  alt="Imagen 1"
                  className="w-full h-64 object-cover rounded-lg shadow-lg animate__animated animate__fadeIn"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"> 
                <img
                  src="images/especial2.jpg"
                  alt="Imagen 2"
                  className="w-full h-64 object-cover rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-1s"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" >
                <img
                  src="images/especial3.jpg"
                  alt="Imagen 3"
                  className="w-full h-64 object-cover rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-2s"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" >
                <img
                  src="images/especial4.jpg"
                  alt="Imagen 3"
                  className="w-full h-64 object-cover rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-2s"
                />
              </CarouselItem>


              <CarouselItem className="md:basis-1/2 lg:basis-1/3" >
                <img
                  src="images/especial5.jpg"
                  alt="Imagen 3"
                  className="w-full h-64 object-cover rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-2s"
                />
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3" >
                <img
                  src="images/especial6.jpg"
                  alt="Imagen 3"
                  className="w-full h-64 object-cover rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-2s"
                />
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3" >
                <img
                  src="images/especial7.jpg"
                  alt="Imagen 3"
                  className="w-full h-64 object-cover rounded-lg shadow-lg animate__animated animate__fadeIn animate__delay-2s"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Misión */}
        <section id="mision" className="py-20 bg-[#D2B48C] fade-in opacity-0">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-5xl font-extrabold text-[#4E3620] mb-6">Nuestra Misión</h2>
            <p className="text-lg font-light text-[#4E3620] opacity-90 max-w-3xl mx-auto">
              Nos dedicamos a ofrecer productos de madera de la más alta calidad, con un enfoque en la sostenibilidad y el respeto por el medio ambiente.
              Queremos ser una opción confiable y responsable, ofreciendo a nuestros clientes productos excepcionales y un servicio al cliente inigualable.
            </p>
          </div>
        </section>

        {/* Visión */}
        <section id="vision" className="py-20 bg-[#F5F5DC] fade-in opacity-0">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-5xl font-extrabold text-[#4E3620] mb-6">Nuestra Visión</h2>
            <p className="text-lg font-light text-[#4E3620] opacity-90 max-w-3xl mx-auto">
              Nuestra visión es ser reconocidos como líderes del sector de la madera, manteniendo siempre un compromiso con la innovación y la preservación del medio ambiente.
              Buscamos expandir nuestras operaciones a nivel nacional, siempre impulsando el respeto y cuidado de nuestros recursos naturales.
            </p>
          </div>
        </section>

        {/* Alcance */}
        <section id="alcance" className="py-20 bg-[#6B8E23] fade-in opacity-0">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-5xl font-extrabold text-white mb-6">Nuestro Alcance</h2>
            <p className="text-lg font-light text-white opacity-90 max-w-3xl mx-auto">
            En Madera Altas Montañas, estamos en constante crecimiento, ofreciendo madera de alta calidad para la construcción, la decoración y la fabricación de muebles. Nos destacamos por brindar soluciones personalizadas, adaptadas a las necesidades del mercado local y nacional.
            </p>
          </div>
        </section>

        {/* Testimonios */}
        <section id="testimonios" className="py-20 bg-[#F5F5DC] text-center fade-in opacity-0">
          <h2 className="text-5xl font-extrabold text-[#4E3620] mb-8">Lo que dicen nuestros clientes</h2>
          <div className="carousel">
            <div className="w-80 mx-auto bg-[#D2B48C] text-[#4E3620] p-8 rounded-lg shadow-lg">
              <p className="text-lg italic mb-4">
                "Altas Montañas nos ha proveído con productos de excelente calidad para nuestros proyectos, siempre entregando a tiempo y con la mejor atención."
              </p>
              <p className="font-bold">Carlos Mendoza</p>
              <p className="text-[#4E3620]">Arquitecto</p>
            </div>
          </div>
        </section>
      </main>

      {/* Botón flotante */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#4E3620] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          ↑
        </button>
      )}

      <Footer />
    </div>
  );
}
