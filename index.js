const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas:[
        "Uma linguagem de programação para estilização de páginas web.",
        "Uma linguagem de programação para criação de aplicativos mobile.",
        "Uma linguagem de programação para desenvolvimento web e interatividade em páginas HTML.",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas:[
        "vari minhaVariavel = valor;",
        "v minhaVariavel = valor;",
        "let minhaVariavel = valor;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual função é usada para imprimir algo no console em JavaScript?",
      respostas:[
        "console.log()",
        "print()",
        "log.console()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
      respostas:[
        "+",
        "&",
        "|",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas:[
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
      respostas:[
        "5",
        "32",
        "Error",
      ],
      correta: 1
    },
    {
      pergunta: "Como você pode acessar o segundo elemento de um array chamado 'array' em JavaScript?",
      respostas:[
        "array(2)",
        "array[2]",
        "array.second()",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função anônima em JavaScript?",
      respostas:[
        "Uma função sem nome atribuído.",
        "Uma função que não tem corpo.",
        "Uma função que não pode ser chamada.",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
      respostas:[
        "function",
        "declare",
        "def",
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'addEventListener' faz em JavaScript?",
      respostas:[
        "Remove um evento de um elemento.",
        "Adiciona um evento a um elemento.",
        "Atualiza um evento em um elemento.",
      ],
      correta: 1
    },
  ];
  
  //querySelector ira pesquisar pela tag com a id='#quiz' no html
  const quiz = document.querySelector('#quiz')
  //querySelector é um seletor de pesquisa('o que vai pesquisar')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repitação
  //para cada item de pergunta
  for(const item of perguntas){
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
  
   for(let resposta of item.respostas) {
     const dt = quizItem.querySelector('dl dt').cloneNode(true)
     dt.querySelector('span').textContent = resposta 
     dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
     dt.querySelector('input').value = item.respostas.indexOf(resposta)   
     dt.querySelector('input').onchange = (event) => {
       const estaCorreta = event.target.value == item.correta
       
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
     }
     quizItem.querySelector('dl').appendChild(dt)
   }
  
   //o respostas A que usamos para clonar posso pedir para remove-lo 
   quizItem.querySelector('dl dt').remove()
  
  
   //coloca a pergunta na tela
   quiz.appendChild(quizItem)
  }
  