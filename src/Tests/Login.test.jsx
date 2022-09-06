import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

/* globals describe, expect, it */
describe('Verificando tela de login, se os elementos estão na tela', () => {
  it('Verificndo se tem o input email na tela de login', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const inputEmail = screen.getByTestId('email');
    expect(inputEmail).toBeInTheDocument();
  });
  it('Verificando se tem o input password na tela de login', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const password = screen.getByTestId('password');
    expect(password).toBeInTheDocument();
  });
  it('Verificando se tem dois "Button" na tela de login', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });
});

describe('Verificando comportamentos na tela de "login"', () => {
  it(`Verificando se quando digitado o email e senha 
  realmente aparece o que foi escrito`, () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const inputEmail = screen.getByTestId('email');
    const inputPassword = screen.getByTestId('password');

    userEvent.type(inputEmail, 'gustavo@gmail.com');
    userEvent.type(inputPassword, '3432fdsgsd');

    expect(inputEmail).toHaveValue('gustavo@gmail.com');
    expect(inputPassword).toHaveValue('3432fdsgsd');
  });
  it('Verificando se quando clica em "Entrar" é redirecionado para /main', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    const inputEmail = screen.getByTestId('email');
    const inputPassword = screen.getByTestId('password');
    const btnEntrar = screen.getByTestId('btn-entrar');

    userEvent.type(inputEmail, 'gustavo@gmail.com');
    userEvent.type(inputPassword, '3432fdsgsd');
    userEvent.click(btnEntrar);

    const inputSearch = screen.getByTestId('search');
    expect(inputSearch).toBeInTheDocument();
  });
});
