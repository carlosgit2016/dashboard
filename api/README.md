# API SPRING BOOT

Criado para alimentar um dashboard que relaciona veículos de transporte, carga, produtos (minério) e clientes.

  - Api Restful
  - Mysql e Hibernate
  - Criação do banco: Migrator
  - Validação com Hibernate, HandlerException e ValidationMessages.properties

# Usar

  - Só executar o Spring Boot, programado para rodar na porta 8090

Veja também, o Client:
  - Neste repositório, na branch frontend, um SPA criado em Angular JS

### Rotas

Todas as rotas abaixo possuem os verbos: GET, PUT e POST configurados

| Recurso | Endereço | Parâmetros |
| ------ | ------ | ------ |
| Cliente | http://localhost:8090/clientes | /ID |
| Minério | http://localhost:8090/minerios | /ID |
| Pedido | http://localhost:8090/pedidos | /ID |
| Veiculo | http://localhost:8090/veiculos | /ID |
| Tipo de veículo | http://localhost:8090/tipo-veiculos | /ID |

### Validação 

Criado usando anotações do Hibernate. Caso algum campo sejá inválido, a api retornará um objeto JSON, contendo 2 propriedades: "msg_dev" e "msg_user" .
```sh
{
    "msg_dev": "Field error in object 'minerio' on field 'nome': rejected value [null]; codes [NotNull.minerio.nome,NotNull.nome,NotNull.java.lang.String,NotNull]; arguments [org.springframework.context.support.DefaultMessageSourceResolvable: codes [minerio.nome,nome]; arguments []; default message [nome]]; default message [O campo {0} é obrigatório]",
    "msg_user": "O campo nome é obrigatório"
}
```

Mostre o "msg_user" para o usuário final

License
----
MIT
