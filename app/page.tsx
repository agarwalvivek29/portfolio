import Image from 'next/image'
import { Github, Linkedin, Instagram, MapPin, Code, Server } from 'lucide-react'

export default function Portfolio() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center p-8 bg-black bg-opacity-50 backdrop-blur-sm rounded-xl shadow-lg max-w-md w-full mx-4 transition-all duration-300 hover:bg-opacity-70">
        <div className="mb-6 relative inline-block">
          <div className="absolute inset-0 bg-white rounded-full animate-pulse"></div>
          <Image
            src="/profile.jpg"
            alt="Vivek Agarwal"
            width={150}
            height={150}
            className="rounded-full relative z-10 transition-all duration-300"
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 animate-fade-in-down">Vivek Agarwal</h1>
        <div className="flex items-center justify-center mb-2 animate-fade-in-up">
          <Code className="w-5 h-5 mr-2" />
          <p className="text-lg">Full Stack Engineer @ Soundverse AI</p>
        </div>
        <div className="flex items-center justify-center mb-4 animate-fade-in-up">
          <Server className="w-5 h-5 mr-2" />
          <p className="text-lg whitespace-nowrap">Aspiring Devops Engineer | Blockchain Enthusiast</p>
        </div>
        <div className="flex items-center justify-center mb-4 animate-fade-in-up">
          <MapPin className="w-5 h-5 mr-2" />
          <p className="text-lg">Bangalore</p>
        </div>
        <div className="flex justify-center space-x-6 animate-fade-in">
          <a href="https://github.com/agarwalvivek29" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transform hover:scale-110 transition-transform">
            <Github className="w-8 h-8 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/agarwalvivek29" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transform hover:scale-110 transition-transform">
            <Linkedin className="w-8 h-8 hover:text-gray-300 transition-colors" />
          </a>
          <a href="https://instagram.com/agarwal.vivek_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transform hover:scale-110 transition-transform">
            <Instagram className="w-8 h-8 hover:text-gray-300 transition-colors" />
          </a>
        </div>
      </div>
    </div>
  )
}