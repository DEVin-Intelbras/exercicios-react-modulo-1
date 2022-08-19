import { Footer, Header, Secao, FiltroSecao } from '@components';
import produtos from '@services/produtos.json';
import { useState } from 'react';
import styles from './App.module.css';

function App() {
  const [filtro, setFiltro] = useState(null);

  const secoes = Array.from(new Set(produtos.map((prod) => prod.secao)));

  const obterProdutosSecao = (secao) => {
    return produtos.filter((p) => p.secao === secao);
  };

  const obterSubSecoes = (secao) => {
    const produtosComSubSecoes = obterProdutosSecao(secao).filter((p) => p.subSecao);

    return Array.from(new Set(produtosComSubSecoes.map((p) => p.subSecao)));
  };

  const obterSecoesFiltradas = () => {
    if (filtro) {
      return secoes.filter((s) => s === filtro);
    }
    return secoes;
  };

  const handleSelecionarSecao = (secao) => {
    if (secao === filtro) {
      setFiltro(null);
      return;
    }
    setFiltro(secao);
  };

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <FiltroSecao
          secoes={secoes}
          secaoSelecionada={filtro}
          onSelecionar={handleSelecionarSecao}
        />

        {obterSecoesFiltradas().map((secao) => (
          <Secao
            key={secao}
            nome={secao}
            produtos={obterProdutosSecao(secao)}
            subSecoes={obterSubSecoes(secao)}
          />
        ))}
        {/* <Secao
          nome='Entradas'
          produtos={produtos.entradas}
          subSecoes={Array.from(subSecoesEntradas)}
        /> */}

        {/* <Secao
          nome='Principais'
          produtos={produtos.principais}
          subSecoes={Array.from(subSecoesPrincipais)}
        /> */}

        {/* <Secao nome='Sobremesas' produtos={produtos.sobremesas} /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
