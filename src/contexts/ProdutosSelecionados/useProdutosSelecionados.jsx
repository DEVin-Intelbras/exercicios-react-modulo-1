import { useContext } from 'react';
import { ProdutosSelecionadosContext } from './ProdutosSelecionadosContext';

export const useProdutosSelecionados = () => {
  const context = useContext(ProdutosSelecionadosContext);

  return context;
};
