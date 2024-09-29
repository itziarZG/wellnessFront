'use client'

import { useState, useEffect } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import Link from "next/link"
import { Moon, Sun } from 'lucide-react'
import ReactPlayer from 'react-player/vimeo'

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setDarkMode(mediaQuery.matches)

    const handleChange = (e) => {
      setDarkMode(e.matches)
    }

    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const openVideo = (videoUrl) => {
    setSelectedVideo(videoUrl)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      {/* Header section (unchanged) */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-semibold">
            Feroces Wellness
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#classes" className="text-sm uppercase tracking-wider hover:text-indigo-600 dark:hover:text-indigo-400">
              Clases
            </Link>
            <Link href="#about" className="text-sm uppercase tracking-wider hover:text-indigo-600 dark:hover:text-indigo-400">
              Sobre Mí
            </Link>
            <Link href="#contact" className="text-sm uppercase tracking-wider hover:text-indigo-600 dark:hover:text-indigo-400">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center space-x-4">

            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
          <Button className="md:hidden">Menu</Button>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero section (unchanged) */}
        <section className="relative h-screen flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
            alt="Yoga en la playa"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-light mb-4">Descubre tu paz interior</h1>
            <p className="text-xl md:text-2xl mb-8">Yoga online para todos los niveles</p>
            <Button size="lg" className="bg-indigo-600 text-white hover:bg-indigo-700">
              Comenzar ahora
            </Button>
          </div>
        </section>

        {/* Classes section (updated) */}
        <section id="classes" className="py-20 bg-indigo-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-light text-center mb-12">Nuestras Clases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Yoga para Principiantes", image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3", video: "https://vimeo.com/76979871" },
                { title: "Vinyasa Flow", image: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4a7?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3", video: "https://vimeo.com/76979871" },
                { title: "Meditación Guiada", image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3", video: "https://vimeo.com/76979871" },
              ].map((clase, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={clase.image}
                      alt={clase.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-800" onClick={() => openVideo(clase.video)}>
                        Ver Clase
                      </Button>
                    </div>
                  </div>
                  <h3 className="mt-4 text-xl font-light">{clase.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About section (unchanged) */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3"
                alt="Instructor de Yoga"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-light mb-6">Sobre Mí</h2>
              <p className="text-lg mb-6">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
              </p>
              
              <Button variant="outline">Conoce más</Button>
            </div>
          </div>
        </section>

        {/* Contact section (unchanged) */}
        <section id="contact" className="py-20 bg-indigo-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8">Únete a nuestra comunidad</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Suscríbete para recibir actualizaciones sobre nuevas clases, consejos de yoga y ofertas especiales
              directamente en tu bandeja de entrada.
            </p>
            <form className="max-w-md mx-auto flex">
              <Input type="email" placeholder="Tu correo electrónico" className="flex-grow" />
              <Button type="submit" className="ml-2 bg-indigo-600 text-white hover:bg-indigo-700">
                Suscribirse
              </Button>
            </form>
          </div>
        </section>
      </main>

  {/* Footer (unchanged) */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Tu Nombre Yoga. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              Términos de Servicio
            </Link>
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </footer>

      {/* Video modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-3xl w-full">
            <ReactPlayer url={selectedVideo} width="100%" height="auto" controls />
            <Button onClick={closeVideo} className="mt-4">Cerrar</Button>
          </div>
        </div>
      )}
    </div>
  )
}