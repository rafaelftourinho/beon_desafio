#!/bin/sh

# Aguarda até que o contêiner do MongoDB esteja disponível
wait-for-it mongodb:27017

# Executa o processo de seed
npm run seed
