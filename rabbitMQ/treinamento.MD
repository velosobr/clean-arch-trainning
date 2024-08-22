# Treinamento em RabbitMQ
## Módulo 1: Fundamentos de Mensageria
### Introdução à Mensageria

- O que é mensageria e por que utilizá-la?
- Diferenças entre mensageria síncrona e assíncrona.
- Exemplos de casos de uso de mensageria.
### Protocolos e Padrões de Mensageria

- AMQP (Advanced Message Queuing Protocol)
- Outros protocolos (MQTT, STOMP)
## Módulo 2: Conceitos Básicos do RabbitMQ
### Visão Geral do RabbitMQ

- O que é RabbitMQ?
- Arquitetura do RabbitMQ.
- Como instalar e configurar RabbitMQ.

Aqui está o curso em formato Markdown:

---

# **Módulo 1: Fundamentos de Mensageria**

## **Aula 1: Introdução à Mensageria**

### **O que é Mensageria e Por que Utilizá-la?**

Mensageria é uma técnica usada para enviar e receber mensagens entre sistemas ou componentes de software de forma assíncrona. Diferente das chamadas diretas de API ou de função, onde a comunicação é síncrona e requer que ambas as partes estejam disponíveis ao mesmo tempo, a mensageria permite que os sistemas se comuniquem de maneira desacoplada, aumentando a flexibilidade e a escalabilidade das aplicações.

#### **Por que Utilizar Mensageria?**

1. **Desacoplamento**: Permite que diferentes partes de um sistema possam se comunicar sem precisar saber detalhes umas das outras.
2. **Escalabilidade**: Suporta altos volumes de mensagens e pode ser escalado horizontalmente para suportar mais tráfego.
3. **Resiliência**: Mensagens podem ser enfileiradas e processadas mesmo se partes do sistema estiverem temporariamente indisponíveis.

### **Diferenças entre Mensageria Síncrona e Assíncrona**

1. **Mensageria Síncrona**:
   - Requer que ambos os sistemas estejam ativos e disponíveis ao mesmo tempo.
   - Exemplo: Uma chamada de API REST onde o cliente espera uma resposta imediata.
   - **Vantagem**: Simplicidade na comunicação.
   - **Desvantagem**: Pode causar bloqueios se o receptor estiver indisponível.

2. **Mensageria Assíncrona**:
   - Permite que as mensagens sejam enviadas e recebidas independentemente do tempo.
   - Exemplo: Envio de uma mensagem para uma fila, onde será processada posteriormente.
   - **Vantagem**: Maior resiliência e capacidade de lidar com falhas.
   - **Desvantagem**: Pode ser mais complexo gerenciar a entrega e o processamento das mensagens.

### **Exemplos de Casos de Uso de Mensageria**

1. **Processamento de Pedidos**:
   - Um sistema de e-commerce pode usar mensageria para enfileirar pedidos e processá-los de maneira assíncrona, permitindo que o usuário receba uma confirmação imediata enquanto o pedido é processado em segundo plano.

2. **Notificações**:
   - Enviar notificações por email ou SMS em resposta a eventos pode ser feito de forma assíncrona, garantindo que o sistema principal não fique bloqueado enquanto a notificação é enviada.

3. **Processamento de Tarefas em Lote**:
   - Tarefas que requerem grande processamento, como a geração de relatórios, podem ser enviadas para uma fila e processadas conforme os recursos se tornam disponíveis.

---
Ótimo, aqui está a continuação do curso em formato Markdown:

---

## **Aula 2: Protocolos e Padrões de Mensageria**

### **AMQP (Advanced Message Queuing Protocol)**

**AMQP** é um protocolo aberto de nível de aplicação, que define regras para a comunicação de mensagens entre sistemas. É amplamente utilizado em sistemas que necessitam de comunicação robusta e eficiente.

#### **Principais Características do AMQP**:

1. **Interoperabilidade**: AMQP permite que diferentes sistemas, independentemente da linguagem de programação ou da plataforma, possam se comunicar de forma eficaz.
   
2. **Roteamento Flexível**: Com suporte a vários tipos de roteamento, como direto, fanout, topic, etc., o AMQP oferece flexibilidade na entrega de mensagens.
   
3. **Segurança**: Inclui suporte a autenticação e criptografia, garantindo a segurança na comunicação entre sistemas.

4. **Confirmações de Mensagens**: Oferece a capacidade de garantir a entrega de mensagens, com confirmações de envio e recebimento.

#### **Arquitetura AMQP**:

- **Producer**: Envia as mensagens.
- **Broker**: Responsável por receber as mensagens do producer e encaminhá-las para as filas corretas.
- **Queue**: Onde as mensagens ficam armazenadas até serem consumidas.
- **Consumer**: Recebe as mensagens da fila para processá-las.

### **Outros Protocolos de Mensageria**

Além do AMQP, existem outros protocolos de mensageria que são utilizados em diferentes cenários. Vamos explorar brevemente dois deles:

#### **1. MQTT (Message Queuing Telemetry Transport)**

**MQTT** é um protocolo leve e simples, projetado para dispositivos que possuem recursos limitados ou que precisam de comunicação em redes instáveis, como IoT (Internet of Things).

- **Uso Típico**: Comunicação entre sensores e servidores em ambientes de IoT.
- **Características**:
  - Baixa sobrecarga de comunicação.
  - Suporta qualidade de serviço (QoS) para entrega de mensagens.
  - Simples de implementar em dispositivos de baixa potência.

#### **2. STOMP (Simple Text Oriented Messaging Protocol)**

**STOMP** é um protocolo simples, orientado a texto, que funciona sobre o TCP. É usado para comunicar com sistemas que podem não suportar AMQP.

- **Uso Típico**: Aplicações web que requerem comunicação com um broker de mensagens.
- **Características**:
  - Protocolo simples e fácil de entender.
  - Compatível com várias linguagens de programação.
  - Menos poderoso que o AMQP, mas suficiente para muitos casos de uso.

---

Perfeito, aqui está o próximo tópico em formato Markdown:

---

## **Aula 3: Conceitos Básicos do RabbitMQ**

### **Visão Geral do RabbitMQ**

O **RabbitMQ** é um broker de mensagens open-source amplamente utilizado para facilitar a comunicação entre sistemas através da mensageria. Ele suporta diversos protocolos, incluindo AMQP, e é conhecido por sua robustez, flexibilidade e fácil configuração.

#### **Principais Características do RabbitMQ**:

1. **Flexibilidade**: Suporta diferentes padrões de roteamento de mensagens, como direct, fanout, topic e headers.
   
2. **Escalabilidade**: Pode ser configurado em cluster, suportando grandes volumes de mensagens e alta disponibilidade.
   
3. **Segurança**: Oferece autenticação, controle de acesso e suporte a SSL/TLS para comunicação segura.

4. **Suporte a Múltiplos Protocolos**: Além do AMQP, o RabbitMQ suporta outros protocolos de mensageria como MQTT e STOMP.

#### **Casos de Uso Típicos do RabbitMQ**:

- **Distribuição de Tarefas**: Enfileiramento de tarefas em um sistema distribuído.
- **Comunicação entre Microsserviços**: Facilita a comunicação assíncrona entre microsserviços.
- **Streaming de Dados**: Processamento de fluxos de dados em tempo real.

### **Instalação e Configuração do RabbitMQ**

#### **Passo a Passo para Instalar o RabbitMQ:**

1. **Instalação do Erlang**:
   - O RabbitMQ é construído sobre a plataforma Erlang, então é necessário instalar o Erlang antes.
   - Em sistemas baseados em Debian:
     ```bash
     sudo apt-get install erlang
     ```

2. **Instalação do RabbitMQ**:
   - Após instalar o Erlang, você pode instalar o RabbitMQ.
   - Em sistemas baseados em Debian:
     ```bash
     sudo apt-get install rabbitmq-server
     ```

3. **Iniciar o RabbitMQ**:
   - Após a instalação, inicie o serviço RabbitMQ:
     ```bash
     sudo systemctl start rabbitmq-server
     ```
   - Verifique o status para garantir que está rodando:
     ```bash
     sudo systemctl status rabbitmq-server
     ```

4. **Acessar a Interface de Administração**:
   - O RabbitMQ possui uma interface de administração que pode ser acessada via web.
   - Habilite o plugin de gerenciamento:
     ```bash
     sudo rabbitmq-plugins enable rabbitmq_management
     ```
   - Acesse a interface em: `http://localhost:15672/`

5. **Configuração Inicial**:
   - Crie um usuário e configure permissões para acessar e gerenciar o RabbitMQ.

### **Conceitos Chave no RabbitMQ**

#### **Mensagens**
- As unidades de dados enviadas entre produtores e consumidores.
- Podem conter qualquer tipo de informação: texto, JSON, binário, etc.

#### **Filas (Queues)**
- Onde as mensagens ficam armazenadas até serem processadas.
- As filas podem ser configuradas para serem persistentes (sobrevivendo a reinicializações) ou temporárias.

#### **Exchanges**
- Responsáveis por rotearem as mensagens para as filas corretas com base em regras de roteamento.
- Existem diferentes tipos de exchanges: Direct, Fanout, Topic e Headers.

#### **Durabilidade e Persistência**
- **Durabilidade**: Garante que as definições de filas e exchanges sobrevivam a reinicializações do RabbitMQ.
- **Persistência**: Garante que as mensagens nas filas sobrevivam a reinicializações.

#### **Reconhecimento de Mensagens (ACKs)**
- **Manual Acknowledgment (ACK)**: O consumidor reconhece explicitamente que processou a mensagem, evitando a perda de mensagens em caso de falha.
- **Auto Acknowledgment**: O RabbitMQ assume que a mensagem foi processada assim que foi entregue ao consumidor, o que pode causar perda de mensagens em caso de falha.

---

Aqui está a continuação do curso:

---

## **Aula 4: Exchanges no RabbitMQ**

### **O Que São Exchanges?**

No RabbitMQ, **Exchanges** são componentes essenciais que recebem mensagens de produtores e as encaminham para as filas apropriadas. Eles funcionam como "roteadores" de mensagens, utilizando diferentes estratégias de roteamento com base no tipo de exchange.

### **Tipos de Exchanges**

#### **1. Direct Exchange**

- **Funcionamento**: Roteia mensagens para as filas com base na chave de roteamento (routing key) exata.
- **Exemplo**: Se uma mensagem é enviada com a chave de roteamento `order.created`, ela será entregue apenas às filas que estiverem vinculadas a esta chave específica.
- **Uso Comum**: Cenários onde a correspondência exata da chave de roteamento é necessária, como processamento de pedidos.

```yaml
Direct Exchange:
  - Chave de Roteamento: "order.created"
  - Fila: "order_queue"
```

#### **2. Fanout Exchange**

- **Funcionamento**: Roteia mensagens para todas as filas que estão vinculadas à exchange, independentemente da chave de roteamento.
- **Exemplo**: Se uma mensagem for enviada para uma Fanout Exchange, ela será replicada em todas as filas conectadas.
- **Uso Comum**: Broadcasting de mensagens, como envio de notificações a todos os usuários.

```yaml
Fanout Exchange:
  - Mensagem: "Nova promoção!"
  - Filas: ["user_notifications", "admin_notifications", "sales_notifications"]
```

#### **3. Topic Exchange**

- **Funcionamento**: Roteia mensagens para filas com base em padrões de correspondência nas chaves de roteamento, utilizando wildcards (`*` e `#`).
- **Exemplo**: Uma mensagem enviada com a chave de roteamento `order.created.europe` pode ser roteada para filas que correspondem aos padrões `order.*.europe` ou `order.created.#`.
- **Uso Comum**: Quando há necessidade de roteamento flexível e dinâmico de mensagens.

```yaml
Topic Exchange:
  - Padrão de Roteamento: "order.*.europe"
  - Fila: "europe_orders"
```

#### **4. Headers Exchange**

- **Funcionamento**: Roteia mensagens com base nos headers (cabeçalhos) da mensagem, ao invés da chave de roteamento.
- **Exemplo**: Se uma mensagem tem um header `x-priority: high`, ela pode ser roteada para filas que tratam mensagens de alta prioridade.
- **Uso Comum**: Cenários onde a roteamento precisa ser baseado em múltiplos critérios, não apenas na chave de roteamento.

```yaml
Headers Exchange:
  - Header: "x-priority: high"
  - Fila: "high_priority_queue"
```

### **Criando e Configurando Exchanges no RabbitMQ**

#### **1. Criando uma Direct Exchange**

```bash
rabbitmqadmin declare exchange name=my_direct_exchange type=direct
```

#### **2. Criando uma Fila e Vinculando à Exchange**

```bash
rabbitmqadmin declare queue name=my_order_queue
rabbitmqadmin declare binding source=my_direct_exchange destination=my_order_queue routing_key=order.created
```

#### **3. Publicando uma Mensagem na Direct Exchange**

```bash
rabbitmqadmin publish exchange=my_direct_exchange routing_key=order.created payload="Order #1234 Created"
```

#### **4. Visualizando e Gerenciando Exchanges na Interface Web**

- Acesse a interface web do RabbitMQ em `http://localhost:15672/`.
- Navegue até a aba **Exchanges** para visualizar, criar e configurar exchanges de forma gráfica.

---

Aqui está o próximo tópico:

---

## **Aula 5: Filas no RabbitMQ**

### **O Que São Filas?**

**Filas** são os componentes onde as mensagens são armazenadas até serem consumidas por um consumidor. No RabbitMQ, as filas são fundamentais para desacoplar o produtor (quem envia as mensagens) do consumidor (quem recebe e processa as mensagens), permitindo um processamento assíncrono e escalável.

### **Tipos de Filas**

#### **1. Filas Duráveis**

- **Descrição**: Essas filas sobrevivem a reinicializações do RabbitMQ. As mensagens permanecem na fila mesmo se o servidor RabbitMQ for reiniciado.
- **Uso Comum**: Sistemas onde a integridade das mensagens precisa ser garantida em caso de falhas ou reinicializações.

```yaml
Durable Queue:
  - Nome: "order_queue"
  - Persistência: Sim
```

#### **2. Filas Temporárias (Transient Queues)**

- **Descrição**: São filas não persistentes que são removidas quando o RabbitMQ é reiniciado. Usadas quando não é necessário manter as mensagens por longos períodos.
- **Uso Comum**: Mensagens temporárias ou em casos onde a velocidade é mais importante que a durabilidade.

```yaml
Transient Queue:
  - Nome: "temp_notifications"
  - Persistência: Não
```

#### **3. Filas Exclusivas (Exclusive Queues)**

- **Descrição**: São filas que só podem ser usadas pelo mesmo canal que as declarou. Elas são deletadas automaticamente quando a conexão que as criou é fechada.
- **Uso Comum**: Conexões temporárias e sessões de usuários que não precisam manter a fila depois que a sessão termina.

```yaml
Exclusive Queue:
  - Nome: "session_queue"
  - Acessível apenas pelo canal que a criou
```

#### **4. Filas Auto-Deletáveis**

- **Descrição**: São filas que são automaticamente deletadas quando todos os consumidores desconectam.
- **Uso Comum**: Filas que devem existir apenas enquanto houver consumidores ativos, como em um sistema de chat temporário.

```yaml
Auto-Delete Queue:
  - Nome: "chat_session_queue"
  - Deletada quando todos os consumidores desconectam
```

### **Criando e Configurando Filas no RabbitMQ**

#### **1. Criando uma Fila Durável**

```bash
rabbitmqadmin declare queue name=my_durable_queue durable=true
```

#### **2. Criando uma Fila Temporária**

```bash
rabbitmqadmin declare queue name=temp_queue durable=false
```

#### **3. Criando uma Fila Exclusiva**

```bash
rabbitmqadmin declare queue name=exclusive_queue exclusive=true
```

#### **4. Criando uma Fila Auto-Deletável**

```bash
rabbitmqadmin declare queue name=auto_delete_queue auto_delete=true
```

### **Conceitos Importantes**

#### **1. TTL (Time-To-Live)**

- **Descrição**: Define o tempo de vida de uma mensagem na fila. Após esse tempo, a mensagem é descartada.
- **Exemplo de Configuração**:
  ```bash
  rabbitmqadmin declare queue name=ttl_queue arguments='{"x-message-ttl":60000}'
  ```
  *O exemplo acima define um TTL de 60 segundos (60000 ms) para as mensagens na fila.*

#### **2. Dead Letter Exchange (DLX)**

- **Descrição**: Uma fila pode ser configurada para redirecionar mensagens que expiram ou falham para outra exchange, conhecida como Dead Letter Exchange.
- **Uso Comum**: Roteamento de mensagens não processadas ou rejeitadas para análise ou tratamento posterior.

```yaml
DLX Configuration:
  - Nome: "order_queue"
  - DLX: "dead_letter_exchange"
```

### **Consumindo Mensagens de uma Fila**

#### **1. Consumidor Básico**

```bash
rabbitmqadmin get queue=my_durable_queue ackmode=ack_requeue_true
```

#### **2. Consumidor Avançado com ACK Manual**

```javascript
const channel = await connection.createChannel();
await channel.assertQueue('my_durable_queue', { durable: true });
channel.consume('my_durable_queue', (msg) => {
  if (msg !== null) {
    console.log(msg.content.toString());
    channel.ack(msg); // Manual ACK
  }
});
```

#### **3. Monitorando Filas na Interface Web**

- Acesse a interface web do RabbitMQ em `http://localhost:15672/`.
- Navegue até a aba **Queues** para visualizar o estado das filas, número de mensagens, e realizar configurações adicionais.

---

