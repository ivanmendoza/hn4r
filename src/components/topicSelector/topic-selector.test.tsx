import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TopicSelector from './topic-selector';
import { DEFAULT_TOPICS } from '../../constants';

it('renders well the default value', () => {
  let defaultOption = DEFAULT_TOPICS[DEFAULT_TOPICS.length - 1];
  const { container } = render(<TopicSelector options={DEFAULT_TOPICS} defaultValue={defaultOption.value} />);
  expect(container.querySelector('.hn-select-box .hn-item-label')?.innerHTML).toEqual(defaultOption.label);
});

it('render well all the options', () => {
  let defaultOption = DEFAULT_TOPICS[0];

  const { container } = render(<TopicSelector options={DEFAULT_TOPICS} defaultValue={defaultOption.value} />);
  const box = container.querySelectorAll('.hn-select-box')[0];
  fireEvent.click(box);
  const renderedOptions = container.querySelectorAll('.hn-select-list .hn-item');
  expect(renderedOptions.length).toEqual(DEFAULT_TOPICS.length);
});

it('value changes properly after selection', () => {
  let defaultOption = DEFAULT_TOPICS[0];
  let lastIndex = DEFAULT_TOPICS.length - 1;
  let lastOption = DEFAULT_TOPICS[lastIndex];

  const { container } = render(<TopicSelector options={DEFAULT_TOPICS} defaultValue={defaultOption.value} />);
  const boxLabel = container.querySelectorAll('.hn-select-box .hn-item-label')[0];
  const box = container.querySelectorAll('.hn-select-box')[0];
  fireEvent.click(box);
  const lastItem = container.querySelectorAll('.hn-select-list .hn-item')[lastIndex];
  fireEvent.click(lastItem);
  expect(boxLabel.innerHTML).toEqual(lastOption.label);
});
