const fs = require('fs');
const { expect } = require('chai');

const leituraEscrita = require('./leituraEscrita');

describe('função que escreverá um conteúdo em um arquivo específico.', () => {
  describe('Se a escrita foi com sucesso', () => {
    it('escrita com sucesso retorno um "ok"', () => {
      const res = leituraEscrita('arq1.txt', 'Enviando teste')
      

      expect(te).to.be.equal('ok');
    });
  });
});