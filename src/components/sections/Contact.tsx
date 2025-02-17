import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background com efeito de gradiente */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-gray-900 to-gray-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,75,43,0.1),transparent)]" />
      </div>

      <Container className="relative">
        <div className="text-center mb-16">
          <span className="text-primary text-lg font-semibold">Contato</span>
          <h2 className="text-4xl font-bold font-poppins text-white mt-2 mb-4">
            Comece Sua Jornada
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos aqui para ajudar você a alcançar seus objetivos. Entre em contato e comece sua transformação hoje mesmo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur" />
            <form className="relative bg-white/5 backdrop-blur-sm p-8 rounded-lg space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300
                    placeholder:text-gray-500"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300
                    placeholder:text-gray-500"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white
                    focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300
                    placeholder:text-gray-500"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <Button variant="primary" className="w-full group">
                Enviar mensagem
                <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur" />
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <h3 className="text-xl font-bold font-poppins text-white mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start text-gray-300 hover:text-primary transition-colors">
                    <svg
                      className="w-6 h-6 mr-4 mt-1 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Localização</h4>
                      <p>Av. Principal, 1000 - Centro</p>
                      <p>São Paulo - SP</p>
                    </div>
                  </div>

                  <div className="flex items-start text-gray-300 hover:text-primary transition-colors">
                    <svg
                      className="w-6 h-6 mr-4 mt-1 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                      <p>Segunda - Sexta: 6h às 22h</p>
                      <p>Sábado: 8h às 18h</p>
                      <p>Domingo: 8h às 14h</p>
                    </div>
                  </div>

                  <div className="flex items-start text-gray-300 hover:text-primary transition-colors">
                    <svg
                      className="w-6 h-6 mr-4 mt-1 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div>
                      <h4 className="font-semibold mb-1">Telefone</h4>
                      <p>(11) 99999-9999</p>
                      <p>(11) 3333-3333</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur" />
              <div className="relative bg-white/5 backdrop-blur-sm p-8 rounded-lg h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975829025307!2d-46.6555365!3d-23.5646162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUyLjYiUyA0NsKwMzknMTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1625097689545!5m2!1spt-BR!2sbr"
                  className="w-full h-full rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
