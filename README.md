Refactoring

Alteração feita na estrutra interna do sotware para torna-lo mais facil de ser entendido e menos custoso de ser modificado, sem alterar o seu comportamento observavel"- Martin Fowler

Vivemos em uma cultura de desenvolvimento colaborativa.

As demandas nunca vão acalmar, por isso é importante o refactoring continuo.

Refactoring é um investimento, torna o software sustentável e competitivo.

Dia após dia a fata de refactoring consome o tempo da equipe. Por isso o tempo é cada vez mais curto. Demandas urgentes vão aparecer, mas otimizar será sempre necessário.
Refatore com um propósito, evite refatorar apenas por refatorar, refatore na hora de adicionar uma nova feature, refatore quando for corrigir um defeito. Refatore quando precisar entender uma parte do código.

Muitas empresas precisa contrair algumas dividas para crescer e escalar. Porém as dívidas vem mais tarde e cobram juros.

"If we wish to count lines of code, we should note regard them as lines produced but as lines spent." Edsger dijkstra

é nossa responsabilidade garantir a <u>qualidade</u> do nosso trabalho.
Código legado é código que as pessoas perderam esperança.
Código com teste é mais rápido, pode ter certeza.

Refatorar é <u>reconhecer</u> code smells 

## Code Smells e Técnicas de Refactoring
Um smell é um sintoma que ocorre dentro do código fonte e que pode ser um indicador de problemas.
### Nomes estranhos :::
 - tem impacto pequeno mas faz uma diferença enorme.
### Números mágicos
### Comentários
- nomes declarativos evitam comentários desnecessários
### Códigos esquecidos
### Linhas em branco
### Muitos ifs ou ifs aninhados :::
- early return - clausula guarda
### Ternário
### Switch statements 
- chaveamento de estados
### Métodos longos :::
- se resolve extraindo em outros métodos
- caber na tela
### Longa lista de parâmetros

Clean Arch
- Você não é obrigado, e nem deve, a adotar o mesmo tipo de arquitetura para tudo.
- There is no one size fits all
- "Beginners may sometime only use entity object as data carriers and place all dynamic behaviour in control objects. This, should, however be avoided. Instead, quite a lot of behaviour should be placed in the entity objects"
- "The heart of software is its ability to solve domain-related problems for its user" -Eric Evans
- "Allow an application to equally be driven by users, programs, automated test or batch scripts, and to developed and tested in isolation from its evetuan run-time devices and databases" - Alistair Cockburn

ISOLAR AS REGRAS DE NEGÓCIO
DEFINIR CAMADAS E SUAS RESPONSABILIDADES
CRIAR UM FLUXO DE CONTROLE E DEPENDENCIA ORDENADO E DIRECIONAL
FAVORECER A TESTABILIDADE
SÃO INDEPENDENTES DE RECURSOS EXTERNOS
FAVORECCER A EVOLUCAO TECNOLOGICA
