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
