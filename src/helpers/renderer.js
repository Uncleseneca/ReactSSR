import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from '../client/components/Routes';

const renderer = (path, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
export default renderer;
