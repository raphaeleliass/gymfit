import { Container } from '../ui/Container';

const classes = [
  {
    name: 'Musculação',
    description: 'Treinos personalizados para ganho de força e resistência',
    image: '/musculacao.jpg',
    icon: '💪',
    intensity: 'Alta',
    duration: '60min',
  },
  {
    name: 'CrossFit',
    description: 'Treinos intensos e dinâmicos para melhorar condicionamento físico',
    image: '/crossfit.jpg',
    icon: '🏋️‍♂️',
    intensity: 'Muito Alta',
    duration: '45min',
  },
  {
    name: 'Yoga',
    description: 'Aulas para relaxamento, flexibilidade e equilíbrio',
    image: '/yoga.jpg',
    icon: '🧘‍♀️',
    intensity: 'Moderada',
    duration: '50min',
  },
  {
    name: 'Dança',
    description: 'Aulas divertidas para queimar calorias e melhorar a coordenação',
    image: '/danca.jpg',
    icon: '💃',
    intensity: 'Média',
    duration: '55min',
  },
];

export function Classes() {
  return (
    <section id="classes" className="py-20 bg-gradient-to-br from-gray-900/95 to-gray-900">
      <Container>
        <div className="text-center mb-16">
          <span className="text-primary text-lg font-semibold">Nossas Atividades</span>
          <h2 className="text-4xl font-bold font-poppins text-white mt-2 mb-4">
            Aulas Energizantes
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem) => (
            <div
              key={classItem.name}
              className="group relative overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-10" />
              <img
                src={classItem.image}
                alt={classItem.name}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                <span className="text-4xl mb-2">{classItem.icon}</span>
                <h3 className="text-2xl font-bold font-poppins text-white mb-2">
                  {classItem.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {classItem.description}
                </p>
                <div className="flex justify-between text-sm">
                  <span className="text-primary font-semibold">
                    {classItem.duration}
                  </span>
                  <span className="text-accent font-semibold">
                    Intensidade: {classItem.intensity}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white text-lg mb-8">
            Experimente uma aula gratuita e descubra sua atividade favorita!
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold transform hover:scale-105 transition-all duration-300">
            Agende sua Aula Experimental
          </button>
        </div>
      </Container>
    </section>
  );
}
