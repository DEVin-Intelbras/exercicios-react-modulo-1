import { ListaCards } from '@components';
import { useProdutosSelecionados } from '@contexts';
import { formataValor } from '@utils';

import styles from './ProdutosSelecionados.module.css';

export const ProdutosSelecionados = () => {
  const { produtosSelecionados, limparProdutos } = useProdutosSelecionados();

  const total = produtosSelecionados.reduce((soma, item) => {
    return soma + item.valor;
  }, 0);

  return (
    <>
      <section className={styles.container}>
        <h1>Produtos Selecionados</h1>
        <h2>{formataValor(total)}</h2>
        <button className={styles.botao} onClick={limparProdutos}>
          Remover produtos
        </button>
      </section>

      {!!produtosSelecionados.length && <ListaCards produtos={produtosSelecionados} />}
    </>
  );
};
