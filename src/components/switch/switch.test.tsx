import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Switch from '.';

it('renders well with one selected option', () => {
  let options = [
    { label: 'All', href: '/', selected: true },
    { label: 'My faves', href: '/favs' },
  ];
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <Switch options={options} />
    </MemoryRouter>
  );
  expect(screen.getByText(options[0].label)).toBeInTheDocument();
  expect(screen.getByText(options[1].label)).toBeInTheDocument();
});

it('renders well without selected option', () => {
  let options = [
    { label: 'All', href: '/' },
    { label: 'My faves', href: '/favs' },
  ];
  render(
    <MemoryRouter initialEntries={[{ pathname: '/' }]}>
      <Switch options={options} />
    </MemoryRouter>
  );
  expect(screen.getByText(options[0].label)).toBeInTheDocument();
  expect(screen.getByText(options[1].label)).toBeInTheDocument();
});

it('set active class properly', () => {
  let options = [
    { label: 'All', href: '/' },
    { label: 'My faves', href: '/favs', selected: true },
  ];
  render(
    <MemoryRouter initialEntries={[{ pathname: '/favs' }]}>
      <Switch options={options} />
    </MemoryRouter>
  );

  let unselected = options.filter((option) => option.selected !== true)[0];
  let selected = options.filter((option) => option.selected === true)[0];

  expect(screen.getByText(selected.label)).toHaveClass('active');
  expect(screen.getByText(unselected.label)).not.toHaveClass('active');
});
