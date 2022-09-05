import React from 'react';
import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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
});
