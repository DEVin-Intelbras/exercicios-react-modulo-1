export const formataValor = (valor) => {
  return `R$ ${valor.toFixed(2).replace('.', `,`)}`;
};
