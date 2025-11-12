/* eslint-disable */
import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import testingLibrary from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

test('myFirstTest', async () => {
  const initHtml = fs.readFileSync('index.html').toString();
  document.body.innerHTML = initHtml;

  const heading = document.querySelector('h1');
  console.log(document.querySelector('body'));
  expect(heading.textContent).toEqual('Hello world!');
});
