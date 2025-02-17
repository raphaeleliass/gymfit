import { Container } from "../ui/Container";

const testimonials = [
  {
    name: "Carlos Souza",
    role: "Aluno há 2 anos",
    image:
      "https://images.pexels.com/photos/19431224/pexels-photo-19431224/free-photo-of-homem-oculos-escuros-oculos-de-sol-rua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Desde que comecei a treinar aqui, minha vida mudou completamente. A equipe é incrível e os resultados são visíveis!",
    achievement: "Perdeu 20kg em 6 meses",
    rating: 5,
  },
  {
    name: "Ana Paula",
    role: "Aluna há 1 ano",
    image:
      "https://images.pexels.com/photos/15491991/pexels-photo-15491991/free-photo-of-mulher-modelo-esporte-pavimento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Ambiente super acolhedor e profissionais muito dedicados. Recomendo para todos que querem mudar de vida.",
    achievement: "Ganhou 5kg de massa muscular",
    rating: 5,
  },
  {
    name: "Roberto Lima",
    role: "Aluno há 3 anos",
    image:
      "https://images.pexels.com/photos/5750836/pexels-photo-5750836.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    text: "A melhor academia que já frequentei. Equipamentos modernos e aulas dinâmicas. Me sinto em casa!",
    achievement: "Melhorou condicionamento físico",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-900/95">
      <Container>
        <div className="text-center mb-16">
          <span className="text-primary text-lg font-semibold">
            Depoimentos
          </span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-4">
            Histórias de Sucesso
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Veja o que nossos alunos têm a dizer sobre sua jornada de
            transformação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/5 p-8 rounded-lg backdrop-blur-sm">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-1">
                      <span className="text-lg">💪</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-gray-300 italic mb-4">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center mt-4 pt-4 border-t border-white/10">
                  <span className="text-accent font-semibold">
                    {testimonial.achievement}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-1 bg-white/5 backdrop-blur-sm rounded-full">
            <button className="px-6 py-2 rounded-full text-white hover:bg-primary transition-colors">
              Ver Mais Histórias
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
