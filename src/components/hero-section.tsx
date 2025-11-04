export function HeroSection() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-tight text-pretty">
            Notícias que Importam
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Acompanhe as histórias mais relevantes do dia. Análise profunda, apuração rigorosa e conteúdo de qualidade.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <input
              type="email"
              placeholder="Seu email para receber notícias"
              className="px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
              Inscrever
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
