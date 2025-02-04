import React, { useState } from 'react';
import { Github, Linkedin, Mail, Code2, Database, Notebook as Robot, ChevronLeft, ChevronRight, Shield } from 'lucide-react';

function App() {
  const [currentExperience, setCurrentExperience] = useState(0);
  
  const experiences = [
    {
      title: "Desenvolvedor de Sistemas",
      description: "Atualmente trabalho com desenvolvimento e automação de sistemas, aplicando conhecimentos em desenvolvimento de software e processos automatizados. Especializado em bibliotecas Python como Selenium, PyAutoGUI e Pandas para automação e análise de dados."
    },
    {
      title: "Diretor de Gente e Gestão",
      description: "2 anos de experiência em uma renomada empresa júnior de telecomunicações, demonstrando forte capacidade de liderança e excelência em resolução de problemas."
    }
  ];

  const nextExperience = () => {
    setCurrentExperience((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentExperience((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header Section - Centered */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#c4b67c] to-[#e5d5a3] text-transparent bg-clip-text px-4">
            Vinicius dos Santos
          </h1>
          <p className="text-lg sm:text-xl text-[#8b8b8b] mb-6">Analista de Sistemas</p>
          <div className="flex gap-4 sm:gap-6 justify-center">
            <a 
              href="https://github.com/Vinniciussantos03" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#c4b67c] hover:text-[#e5d5a3] transition-colors p-2"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/viníciussantosprogramador/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#c4b67c] hover:text-[#e5d5a3] transition-colors p-2"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:vinivsr03@gmail.com" 
              className="text-[#c4b67c] hover:text-[#e5d5a3] transition-colors p-2"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Experience Section - Carousel */}
        <div className="mb-8 sm:mb-12">
          <div className="bg-[#242424] p-4 sm:p-6 md:p-8 rounded-lg border border-[#333333]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#c4b67c] mb-4 sm:mb-6 text-center">Experiências</h2>
            <div className="relative">
              <div className="flex items-center">
                <button 
                  onClick={prevExperience}
                  className="absolute left-0 text-[#c4b67c] hover:text-[#e5d5a3] transition-colors z-10 p-2"
                  aria-label="Previous experience"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="w-full px-8 sm:px-12">
                  <div className="text-center">
                    <h3 className="text-base sm:text-lg font-semibold text-[#e5d5a3] mb-3 sm:mb-4">
                      {experiences[currentExperience].title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#8b8b8b] max-w-2xl mx-auto">
                      {experiences[currentExperience].description}
                    </p>
                  </div>
                </div>
                <button 
                  onClick={nextExperience}
                  className="absolute right-0 text-[#c4b67c] hover:text-[#e5d5a3] transition-colors z-10 p-2"
                  aria-label="Next experience"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex justify-center gap-2 mt-4 sm:mt-6">
                {experiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentExperience(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentExperience ? 'bg-[#c4b67c]' : 'bg-[#333333]'
                    }`}
                    aria-label={`Go to experience ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* About and Skills Section - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {/* About Section */}
          <div className="bg-[#242424] p-4 sm:p-6 rounded-lg border border-[#333333]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#c4b67c] mb-3 sm:mb-4">Sobre</h2>
            <p className="text-sm sm:text-base text-[#8b8b8b] leading-relaxed">
              Profissional em formação na área de Análise e Desenvolvimento de Sistemas, 
              comprometido com o aprimoramento contínuo em HTML, CSS, JavaScript e SQL. 
              Busco constantemente expandir conhecimentos em design e gestão, dedicando-me 
              integralmente à programação e ao desenvolvimento profissional.
            </p>
          </div>

          {/* Skills Section */}
          <div className="bg-[#242424] p-4 sm:p-6 rounded-lg border border-[#333333]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#c4b67c] mb-3 sm:mb-4">Habilidades</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4b67c] flex-shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base text-[#e5d5a3] font-semibold">Desenvolvimento</h3>
                  <p className="text-xs sm:text-sm text-[#8b8b8b]">Python, Java, HTML, CSS</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Database className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4b67c] flex-shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base text-[#e5d5a3] font-semibold">Banco de Dados</h3>
                  <p className="text-xs sm:text-sm text-[#8b8b8b]">SQL, Análise de Dados, Pandas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Robot className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4b67c] flex-shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base text-[#e5d5a3] font-semibold">Automação</h3>
                  <p className="text-xs sm:text-sm text-[#8b8b8b]">RPA, PyAutoGUI, Selenium</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#c4b67c] flex-shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base text-[#e5d5a3] font-semibold">Extra</h3>
                  <p className="text-xs sm:text-sm text-[#8b8b8b]">DevOps, Hacker Ético</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-[#c4b67c] mb-4 sm:mb-6 text-center">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-8">
            <div className="group relative overflow-hidden rounded-lg border border-[#333333]">
              <img
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
                alt="Projeto 1"
                className="w-full h-48 sm:h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#e5d5a3] mb-2">Automação RPA</h3>
                  <p className="text-sm sm:text-base text-[#8b8b8b]">Python, Automação de Processos</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border border-[#333333]">
              <img
                src="https://images.unsplash.com/photo-1623282033815-40b05d96c903"
                alt="Projeto 2"
                className="w-full h-48 sm:h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#1a1a1a]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-center p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-[#e5d5a3] mb-2">Sistema de Análise</h3>
                  <p className="text-sm sm:text-base text-[#8b8b8b]">Java, SQL, Análise de Dados</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-[#242424] p-4 sm:p-6 rounded-lg border border-[#333333]">
              <h3 className="text-base sm:text-lg font-semibold text-[#e5d5a3] mb-2 sm:mb-3">Automação RPA</h3>
              <p className="text-sm sm:text-base text-[#8b8b8b]">
                Bot gerador, que consiste em puxar dados, informações, tabelas, filtra-las e mandar todas as informações por e-mail, telegram, seja elas em escopo de e-mail, em arquivo completo xlsx, escalavel e adaptável para sua realidade.
              </p>
            </div>
            <div className="bg-[#242424] p-4 sm:p-6 rounded-lg border border-[#333333]">
              <h3 className="text-base sm:text-lg font-semibold text-[#e5d5a3] mb-2 sm:mb-3">Sistema de Análise</h3>
              <p className="text-sm sm:text-base text-[#8b8b8b]">
                Criação de um sistema completo de análise de dados utilizando Java e SQL, permitindo
                visualização e interpretação eficiente de grandes conjuntos de dados empresariais, adaptavel para empresa que será feita.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 sm:mt-12 text-center text-xs sm:text-sm text-[#8b8b8b]">
          <p>© 2024 Vinicius dos Santos. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;