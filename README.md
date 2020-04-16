# UserManagement-Javascript-NodeJs
## :memo: Sobre o Projeto:  
Projeto para gerenciamento de usuários, utilizando template do AdminLTE e implementado em **Javascript**, usando uma arquitetura
de **API RESTfull**, com a seguinte estrutura: 
* Um servidor RESTfull(porta 4000) em **NodeJS** fazendo a conexão e consumindo do banco de dados **NeDB**.  
* Um servidor(porta 3000) em **NodeJS** contendo os dados da aplicação e disponibilizando o Html, consultando via **AJAX** as informações,
servidor este que faz o HttpRequest com os pricipais métodos(**GET, POST,PUT, DELETE**) para o servidor RESTfull atráves de **JSON**.

