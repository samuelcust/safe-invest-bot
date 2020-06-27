[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/samuelcust/safe-invest-bot)

# Safe Invest Bot
Um BOT para o Discord que mostra ações com dados estatísticos e ordenado por relevância para análise.

## O que você terá para análise:

- Ações listadas nessa ordem e filtradas pelos índices de Benjamin Graham
  - % de dividendos
  - P/L (Preço sobre o lucro)
  - Liquidez corrent


![Alt text](/docs/screenshots/indicadores.png?raw=true "Amostra de indicadores fundamentalista")

- Fundos imobiliários listados nessa ordem que gera algum dividendo
  - ROI (Retorno mensal sobre o investimento)
  - Variância (Discrepância dos dividentos dos últimos 12 meses e o mês atual)
  - Magic Number (Quantidade de cotas necessárias para reder uma cota por mês)

![Alt text](/docs/screenshots/fundos.png?raw=true "Amostra de fundos imobiliários")


## Dependências
- Git
- Node 10 ou superior
- yarn

## Instalação

Clone esse projeto com o comando abaixo.
```sh
git clone https://github.com/mazinsw/safeinvest.git
```

Entre na pasta e rode o comando abaixo para instalar as dependências.
```sh
yarn
```

## Análise
Primeiro entre na pasta e rode o comando abaixo para atualizar as tabelas de cotações
```sh
yarn sync
```

Para análise de ações com indicadores
```sh
yarn indic
```

Para análise de fundos imobiliários com estatísticas
```sh
yarn funds
```
