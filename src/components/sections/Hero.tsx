import { Button } from "../ui/Button";
import { Container } from "../ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-black to-gray-900">
      <div className="absolute inset-0 bg-black/50">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-no-repeat bg-center bg-cover after:bg-black after:inset-0 after:absolute after:opacity-70" />
      </div>

      <Container className="relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8">
            <h1 className="text-6xl font-permanent-marker font-extrabold font-permanent-marker leading-tight">
              Transforme seu corpo,{" "}
              <span className="text-primary ">transforme sua vida</span>
            </h1>
            <p className="text-xl opacity-90">
              Aqui você encontra os melhores treinos, equipamentos modernos e
              uma equipe de profissionais prontos para te ajudar
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="sm" className="group">
                Comece hoje mesmo
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
              <Button variant="outline" size="sm">
                Conheça os planos
              </Button>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <span className="block text-4xl font-bold">500+</span>
                <span className="text-sm opacity-75">Alunos Ativos</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">50+</span>
                <span className="text-sm opacity-75">Aulas Semanais</span>
              </div>
              <div>
                <span className="block text-4xl font-bold">15+</span>
                <span className="text-sm opacity-75">Instrutores</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
