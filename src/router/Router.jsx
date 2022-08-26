import { Navigate, Route, Routes } from 'react-router-dom';

import { Produtos, ProdutosSelecionados } from '@pages';

export const Router = () => {
  return (
    <Routes>
      <Route path='/produtos' element={<Produtos />} />
      <Route path='/produtos-selecionados' element={<ProdutosSelecionados />} />
      <Route path='*' element={<Navigate to={'/produtos'} replace={true} />} />
    </Routes>
  );
};
