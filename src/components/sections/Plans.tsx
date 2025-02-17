import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

const plans = [
  {
    name: "Plano Básico",
    price: "R$ 89,90",
    features: [
      "Acesso à academia em horário comercial",
      "Área de musculação",
      "Área de cardio",
      "Armário",
    ],
    highlighted: false,
    icon: "🎯",
    color: "from-orange-500/40 to-orange-500/0",
  },
  {
    name: "Plano Completo",
    price: "R$ 129,90",
    features: [
      "Acesso ilimitado",
      "Todas as áreas da academia",
      "Aulas em grupo",
      "Armário",
      "Avaliação física mensal",
    ],
    highlighted: true,
    icon: "⭐",
    color: "from-blue-500/40 to-blue-500/0",
  },
  {
    name: "Plano Premium",
    price: "R$ 199,90",
    features: [
      "Acesso ilimitado",
      "Todas as áreas da academia",
      "Aulas especiais",
      "Acompanhamento personalizado",
      "Armário exclusivo",
      "Avaliação física quinzenal",
    ],
    highlighted: false,
    icon: "👑",
    color: "from-purple-500/40 to-purple-500/0",
  },
];

export function Plans() {
  return (
    <section id="plans" className="py-20 bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <span className="text-primary text-lg font-semibold">
            Nossos Planos
          </span>
          <h2 className="text-4xl font-bold font-poppins text-white mt-2 mb-4">
            Escolha o Plano Ideal para Você
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferecemos diferentes opções para atender suas necessidades. Todos
            os planos incluem acesso à academia e suporte profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Efeito de destaque para o plano mais popular */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl" />

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative group flex flex-col items-center justify-between rounded-2xl p-8 bg-white/5 backdrop-blur-sm
                ${plan.highlighted ? "transform scale-105" : ""}`}
            >
              {/* Efeito de gradiente no hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${plan.color}
                opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Conteúdo do card */}
              <div className="relative z-10 flex flex-col items-center justify-between h-full w-full">
                <span className="text-4xl mb-4 block">{plan.icon}</span>
                <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-primary text-3xl font-bold mb-6">
                  {plan.price}
                  <span className="text-sm text-gray-400">/mês</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 mr-2 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="w-full group"
                >
                  Comece Agora
                  <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Button>
              </div>

              {/* Indicador de plano popular */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">
            Todos os planos incluem acesso ao app de treinos e suporte via chat
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center text-white">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Sem taxa de matrícula
            </div>
            <div className="flex items-center text-white">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Cancelamento flexível
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
