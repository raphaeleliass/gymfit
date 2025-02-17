import { Container } from "../ui/Container";

const stats = [
  { value: "15+", label: "Anos de Experiência", icon: "🏆" },
  { value: "1000+", label: "Alunos Transformados", icon: "💪" },
  { value: "50+", label: "Profissionais Dedicados", icon: "⭐" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-900 to-black/95 text-white"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="relative">
              <h2 className="text-5xl font-extrabold font-poppins mb-4">
                Sobre Nós
                <span className="absolute -top-4 -left-4 text-7xl text-primary/10">
                  15
                </span>
              </h2>
              <div className="h-1 w-20 bg-primary mb-6" />
              <p className="text-xl text-gray-300 leading-relaxed">
                Há mais de 15 anos ajudando pessoas a alcançarem seus objetivos
                de saúde e bem-estar. Nossa academia oferece um ambiente
                acolhedor e equipamentos de última geração para sua evolução.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center font-poppins transform hover:scale-105 transition-transform duration-300"
                >
                  <span className="text-5xl block mb-2">{stat.icon}</span>
                  <span className="block text-2xl font-bold text-primary mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-900 to-gray-700 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative">
              <img
                className="rounded-2xl shadow-2xl object-cover object-center w-full"
                src="https://i.pinimg.com/736x/94/cc/ff/94ccffa238734bf3965c6bcbaee39c37.jpg"
                alt="Interior da academia"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent rounded-lg" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-lg font-semibold">
                  "Transforme seu suor em força, sua dedicação em resultados"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <div className="text-primary text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold font-poppins mb-2">
              Foco no Resultado
            </h3>
            <p className="text-gray-400">
              Programas personalizados para alcançar seus objetivos de forma
              eficiente
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <div className="text-primary text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold font-poppins mb-2">
              Tecnologia Avançada
            </h3>
            <p className="text-gray-400">
              Equipamentos modernos e monitoramento digital do seu progresso
            </p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors duration-300">
            <div className="text-primary text-3xl mb-4">💪</div>
            <h3 className="text-xl font-bold font-poppins mb-2">
              Suporte Contínuo
            </h3>
            <p className="text-gray-400">
              Equipe especializada pronta para te ajudar em cada etapa
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
