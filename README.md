# teste-bemobile
Desafio beMobile em ReactNative + Json-Server. 

## Sobre
O objetivo deste projeto é listar as informações (foto, nome, cargo, data de admissão e telefone) de alguns funcionários, que por sua vez vêm de uma API
simulada escrita em json-server. Também deve conter um botão de show/hide para mostrar e ocultar as informações, assim como na imagem a seguir.
O projeto foi desenvolvido em React Native, utilizando a plataforma Expo para auxilio nos testes durante o desenvolvimento.

<img style="width: 300px" src='https://user-images.githubusercontent.com/75266128/195743723-d439d751-67d6-4d16-a8a5-3e669614c77a.jpg'/>

## Pré-Requisitos

Tenha instalado em sua máquina as seguintes ferramentas: Git, Node.js e Yarn.

## Como rodar?

1. Primeiramente, baixe o projeto na sua máquina e instale as dependencias do react native com o comando `yarn` ou `npm install`
2. Para iniciar o projeto sem a ajuda do Expo, siga os passos a seguir:
- Abra o terminal na pasta root do projeto.
- Digite o comando `yarn start` para iniciar o projeto react native.
- Digite o comando `yarn json-server --watch db.json` para iniciar o json-server.
- Digite o comando `yarn android` (para rodar em um emulador/device nativo android) ou `yarn ios` (para rodar em um emulador/device nativo iOS)
3. Para iniciar o projeto com a ajuda do Expo, siga os passos a seguir:
- Abra o terminal na pasta root do projeto.
- Digite o comando `yarn start-expo` para iniciar o projeto react native com o expo.
- Digite o comando `yarn json-server --watch db.json` para iniciar o json-server.
- Baixe o app da expo no seu device e coloque o ip local ou escaneie o qr code gerado no terminal. 
