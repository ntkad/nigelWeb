import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, GraduationCap, Calendar, User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm shadow-lg border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">Nigel Takunda Kadonzvo</h1>
            <p className="text-xl text-blue-400 font-medium">Computer Engineering Major</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Photo and Quick Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Photo Card */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 text-center border border-gray-700">
              <div className="w-48 h-48 mx-auto mb-4 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full flex items-center justify-center border-4 border-gray-600 shadow-xl">
                <img
                  src="Nigel.jpg"
                  alt="Nigel Takunda Kadonzvo"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
              <p className="text-sm text-gray-400 italic">Hi there!</p>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-400" />
                Academic Info
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-3 text-gray-500" />
                  <span>Graduate (C2027)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <GraduationCap className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0" />
                  <span>Computer Engineering (Computer Architecture and High-Performance Computing)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - About and Contact */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About Section */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">About Me</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Driven by curiosity and a love for problem-solving, I explore how technology can make life 
                  easier and more meaningful. When I am not immersed in projects, you will find me on the 
                  volleyball court as a setter, spending time with friends, or discovering new ideas that 
                  inspire me.
                </p>
                
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">How to Reach Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Email */}
                <div className="flex items-center group hover:bg-blue-900/30 p-3 rounded-lg transition-colors duration-200">
                  <div className="bg-blue-900/50 p-3 rounded-full mr-4 group-hover:bg-blue-800/60 transition-colors duration-200">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-400">nigel.kadonzvo@gwu.edu</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center group hover:bg-green-900/30 p-3 rounded-lg transition-colors duration-200">
                  <div className="bg-green-900/50 p-3 rounded-full mr-4 group-hover:bg-green-800/60 transition-colors duration-200">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Phone</h4>
                    <p className="text-gray-400">(763) 357 6275</p>
                  </div>
                </div>


                {/* GitHub */}
                <div className="flex items-center group hover:bg-gray-700/50 p-3 rounded-lg transition-colors duration-200">
                  <div className="bg-gray-700/50 p-3 rounded-full mr-4 group-hover:bg-gray-600/60 transition-colors duration-200">
                    <Github className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">GitHub</h4>
                    <p className="text-gray-400">github.com/ntkad</p>
                  </div>
                </div>

              </div>

              {/* LinkedIn Button */}
              <div className="mt-8 pt-6 border-t border-gray-600">
                <a
                  href="https://www.linkedin.com/in/nigel-takunda-kadonzvo/"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-sm text-white mt-16 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-gray-400">
            © 2025 Nigel Takunda Kadonzvo. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;