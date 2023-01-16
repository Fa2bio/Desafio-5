<h1>Spring Boot</h1>

> Status: Finalizado ✔️

## Conteúdo

* [Requesitos](#requesitos)
* [Tecnologias Usadas](#tecnologias)
* [Instalação](#instalacao)
* [Executando Aplicação](#executando-aplicacao)
* [Uso Geral](#uso-geral)

## <a name="requesitos"></a>Requesitos

- Java 11
- Spring Boot
- Lombok

## <a name="tecnologias"></a>Tecnologias Usadas

- Java
- Lombok
- Model Mapper
- Spring Boot
- Spring Data JPA
- Spring Hateoas
- Squiggly Filter
- Clean Architecture
- Data Transfer Object (DTO)
- Cross-Origin Resource Sharing (CORS)

## <a name="instalacao"></a>Instalação

- Clone o repositório para o seu dispositivo;
- Importe-o como MAVEN project;
- Por padrão esta aplicação executa sob a porta 5170. Para alterar esta porta, navegue ate .../src/main/resources/application.properties e edite
### Application.properties
```xml
server.port=
```
- Por padrão esta aplicação possui o timezone GMT+3. Para alterar este timezone, navegue ate .../src/main/java/br/com/banco/BancoApplication.java e edite
### BancoApplication.java
```xml
TimeZone.setDefault(TimeZone.getTimeZone("timezone"));
```

## <a name="executando-aplicacao"></a>Executando Aplicação

- Execute a classe BancoApplication.java como springboot app;
- Esta aplicação possui Spring Heateoas. Após executar a api, acesse http://localhost:5170 para ter acesso ao ponto de entrada.

## <a name="uso-geral"></a>Uso Geral

- Esta aplicação foi desenvolvida para permitir uma consulta com o filtro (contaId, dataCriacaoInicio, dataCriacaoFim, nomeOperador) utilizando HTTP GET em http://localhost:5170/transferencias;
- Os campos do filtro não são obrigatórios, se nada for infomado, o HTTP GET irá exibir todo o conteúdo do banco de dados. Se algum campo for informado, o GET retornará as informações conforme os parametros informados neste campo. Se nada for encontrado, será retornado apenas a representação Hateoas.
