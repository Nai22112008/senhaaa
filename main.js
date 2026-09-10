const numeroSenha = document.querySelector ( '.parametro-senha');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '*!%@$'
const botoes = 'document.querySelectorAll' ('.paramtro-senha__botao');
const camposenha  = document.querySelector (' #campo-senha');
const checkbox = document.querySelectorAll ('.checkbox');
const forcaSenha = document.querySelector ('.forca');

botoes [0].onclik = diminuiuTamanho;
botoes [1].onclik = aumentaTamanho;