import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Main from '../Pages/Main';
import MyContext from '../MyContext/MyContext';

const context = {
  MIN_PASSWORD_LANGTH: 6,
  data: [],
  getFavorites: [],
  pages: 0,
  setItemPerPage: 6,
  setCurrentPage: 6,
};

function renderPage(myContext) {
  render(
    <MemoryRouter>
      <MyContext.Provider value={myContext}>
        <Main />
      </MyContext.Provider>
    </MemoryRouter>,
  );
}

/* globals describe, expect, it */
describe('Verificando tela de Principal, se os elementos estão na tela', () => {
  it('Verificndo se tem o input search na tela.', () => {
    renderPage(context);
    const inputSearch = screen.getByTestId('search');
    expect(inputSearch).toBeInTheDocument();
  });
  it('Verificndo se tem o botão "Pesquisar" esta na tela.', () => {
    renderPage(context);
    const btnPesquisar = screen.getByTestId('btn-pesquisar');
    expect(btnPesquisar).toBeInTheDocument();
  });
});

describe('Verificando comportamento da tela principal', () => {
  it('Verificando se ao clicar no pesquisar aparece o componente "Loading..."', () => {
    renderPage(context);
    const inputSearch = screen.getByTestId('search');
    const btnPesquisar = screen.getByTestId('btn-pesquisar');

    userEvent.type(inputSearch, 'discovery');
    userEvent.click(btnPesquisar);

    const loading = screen.getByRole('heading', {
      level: 2,
      name: /Carregando/i,
    });
    expect(loading).toBeInTheDocument();
  });
});
