const filmes = [
  {
    id: 1,
    titulo: 'Dilema das Redes',
    descricao: 'Um documentário sobre tecnologia',
    duracao: 120
  },
  {
    id: 2,
    titulo: 'A Menina que Roubava Livros',
    descricao:
      'Uma história contada pela dona morte, sobre a época da Guerra Guerra mundial. Ela se passa na Alemanha e gira em torno de Liesel.',
    duracao: '2h 15'
  },
  {
    id: 3,
    titulo: 'Tron - O legado',
    descricao:
      'Sam, filho do famoso programador de jogos de computador Kevin Flynn, é assombrado há muito tempo pelo misterioso desaparecimento do pai. Um sinal estranho leva Sam ao fliperama de Flynn, onde é puxado para dentro de um mundo cibernético, o mesmo em que seu pai está preso há 20 anos. Sem receio, o guerreiro Quorra, Kevin e Sam procuram escapar de um universo que, embora magnífico, é muito mais avançado e perigoso do que Kevin tinha imaginado.',
    duracao: '2h 7m'
  },
  {
    id: 4,
    titulo: 'Enrolados',
    descricao:
      'O bandido mais procurado do reino, Flynn Rider, se esconde em uma torre e imediatamente se torna prisioneiro de Rapunzel, residente de longa data do local. Dona de cabelos dourados mágicos com 21 metros de comprimento, ela está trancada há anos e quer, desesperadamente, a liberdade. A adolescente determinada faz um acordo com o rapaz, e, juntos, partem para uma aventura emocionante.',
    duracao: 100
  }
]

const [{ id, titulo, descricao, duracao }] = filmes
console.log(titulo, descricao, duracao)
console.log(
  ` O número  ${id} é: ${titulo} Descriçã: ${descricao} Duração ${duracao}`
)

filmes.map(filme => console.log(filme.titulo))
filmes.map(filme => console.log(filme.id + ' ' + titulo))
