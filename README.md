# Projeto de Testes

Este repositório contém dois diretórios: `Testes de API` e `Testes de UI`.

## Como usar

### Clonar o repositório

```bash
git clone https://github.com/VictorGorgal/S206-Trabalho.git
cd S206-Trabalho
```

### Testes de API

1. Navegue até o diretório de testes de API:
    ```bash
    cd "Testes de API"
    ```

2. Instale o Newman e o htmlextra para executar e gerar os relatórios:
    ```bash
    npm install -g newman newman-reporter-htmlextra
    ```

3. Execute os testes utilizando o arquivo `collection.json` e gere o relatório:
    ```bash
    newman run collection.json -r htmlextra
    ```

4. O relatório HTML será gerado na pasta atual.

### Testes de UI

1. Navegue até o diretório de testes de UI:
    ```bash
    cd "../Testes de UI"
    ```

2. Instale as dependências do projeto, incluindo o mochawesome:
    ```bash
    npm install mochawesome
    ```

3. Execute a suíte de testes e gere o relatório:
    ```bash
    npx cypress run --reporter mochawesome
    ```

4. O relatório estará disponível na pasta de saída configurada (geralmente `cypress/reports`).
