# Curso de Clean Architecture - Professor Rodrigo Branas

## Conceitos Gerais

### Desenvolvimento Colaborativo
- Vivemos em uma cultura de desenvolvimento colaborativa.
- As demandas nunca vão acalmar, por isso é importante o refactoring contínuo.
- Refactoring é um investimento, torna o software sustentável e competitivo.
- Dia após dia a falta de refactoring consome o tempo da equipe. Por isso o tempo é cada vez mais curto. Demandas urgentes vão aparecer, mas otimizar será sempre necessário.
- Refatore com um propósito: 
  - Evite refatorar apenas por refatorar.
  - Refatore na hora de adicionar uma nova feature.
  - Refatore quando for corrigir um defeito.
  - Refatore quando precisar entender uma parte do código.

### Dívida Técnica
- Muitas empresas precisam contrair algumas dívidas para crescer e escalar. Porém, as dívidas vêm mais tarde e cobram juros.
- "If we wish to count lines of code, we should note regard them as lines produced but as lines spent." - Edsger Dijkstra
- É nossa responsabilidade garantir a **qualidade** do nosso trabalho.
- Código legado é código que as pessoas perderam esperança.
- Código com teste é mais rápido, pode ter certeza.
- Refatorar é **reconhecer** code smells.

## Code Smells e Técnicas de Refactoring

Um smell é um sintoma que ocorre dentro do código fonte e que pode ser um indicador de problemas.

### Nomes Estranhos
- Tem impacto pequeno mas faz uma diferença enorme.

### Números Mágicos

### Comentários
- Nomes declarativos evitam comentários desnecessários.

### Códigos Esquecidos

### Linhas em Branco

### Muitos Ifs ou Ifs Aninhados
- Early return - cláusula guarda.

### Ternário

### Switch Statements
- Chaveamento de estados.

### Métodos Longos
- Se resolve extraindo em outros métodos.
- Deve caber na tela.

### Longa Lista de Parâmetros

## Clean Architecture

- Você não é obrigado, e nem deve, a adotar o mesmo tipo de arquitetura para tudo.
- There is no one size fits all.
- "Beginners may sometimes only use entity objects as data carriers and place all dynamic behaviour in control objects. This should, however, be avoided. Instead, quite a lot of behaviour should be placed in the entity objects."
- "The heart of software is its ability to solve domain-related problems for its user." - Eric Evans
- "Allow an application to equally be driven by users, programs, automated tests or batch scripts, and to be developed and tested in isolation from its eventual run-time devices and databases." - Alistair Cockburn

### Princípios da Clean Architecture
- **Isolar as regras de negócio.**
- **Definir camadas e suas responsabilidades.**
- **Criar um fluxo de controle e dependência ordenado e direcional.**
- **Favorecer a testabilidade.**
- **Ser independente de recursos externos.**
- **Favorecer a evolução tecnológica.**
