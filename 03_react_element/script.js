// first way of creating elements in React (not preferred)
/*
const h2 = React.createElement(
  'h2',
  { className: 'sub-heading', id: 'sub-title' },
  'Hello React'
);

const li1 = React.createElement(
  'li',
  { id: 'first-list-item' },
  'First List Item'
);

const li2 = React.createElement(
  'li',
  { id: 'second-list-item' },
  'Second List Item'
);

const li3 = React.createElement(
  'li',
  { id: 'third-list-item' },
  'Third List Item'
);

const li4 = React.createElement(
  'li',
  { id: 'forth-list-item' },
  'Forth List Item'
);

const ul = React.createElement('ul', { className: 'first-ul' }, [
  li1,
  li2,
  li3,
  li4,
]);

const p1 = React.createElement('p', { className: 'first-para' }, ul);

const container = React.createElement('div', { className: 'container' }, [
  h2,
  ul,
]);

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(container);
*/

// React way of creating elements in React (still not preferred as we write html in js and use Babel to create react elements)

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(
  React.createElement(
    'div',
    { className: 'container' },
    [
      React.createElement(
        'section',
        { key: 1, id: 'list-section' },
        [
          React.createElement(
            'h2',
            { id: 'first-list', key: 'h2a' },
            'First List'
          ),
          React.createElement('ul', { className: 'first-ul', key: 1 }, [
            React.createElement(
              'li',
              { id: 'first-li-ul', className: 'list-items', key: 1 },
              'First List Item'
            ),
            React.createElement(
              'li',
              { id: 'second-li-ul', className: 'list-items', key: 2 },
              'Second List Item'
            ),
            React.createElement(
              'li',
              { id: 'third-li-ul', className: 'list items', key: 3 },
              'Third List Item'
            ),
            React.createElement(
              'li',
              { id: 'forth-li-ul', className: 'list-items', key: 4 },
              'Forth List Item'
            ),
          ]),
        ],
        React.createElement(
          'h2',
          { id: 'second-list', className: 'para' },
          'Second List'
        ),
        React.createElement('ol', { className: 'first-ol' }, [
          React.createElement(
            'li',
            { id: 'first-li-ol', className: 'list-items', key: 1 },
            'First Ordered List Item'
          ),
          React.createElement(
            'li',
            { id: 'second-li-ol', className: 'list-items', key: 2 },
            'Second Ordered List Item'
          ),
          React.createElement(
            'li',
            { id: 'third-li-ol', className: 'list items', key: 3 },
            'Third Ordered List Item'
          ),
          React.createElement(
            'li',
            { id: 'forth-li-ol', className: 'list-items', key: 4 },
            'Forth Ordered List Item'
          ),
        ])
      ),
    ],
    React.createElement('section', { id: 'image-section' }, [
      React.createElement('img', {
        key: 1,
        style: {
          width: 200,
          backgroundColor: 'teal',
          borderRadius: '50%',
          padding: 16,
        },
        className: 'react-logo',
        alt: 'react logo',
        src: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
      }),
      React.createElement(
        'p',
        { className: 'react-logo-short-intro', key: 2 },
        'The library for web and native user interfaces'
      ),
    ]),
    React.createElement('section', { id: 'form-section' }, [
      React.createElement('form', { id: 'form', key: 2 }, [
        React.createElement('div', { id: 'username-container', key: 1 }, [
          React.createElement(
            'label',
            { htmlFor: 'username', key: 1 },
            'Username:'
          ),
          React.createElement('input', {
            type: 'text',
            id: 'username',
            name: 'username',
            key: 2,
            className: 'user-data',
            style: { display: 'block', marginTop: '10px', padding: '5px' },
          }),
        ]),
        React.createElement('div', { id: 'password-container', key: 2 }, [
          React.createElement(
            'label',
            { htmlFor: 'password', key: 1 },
            'Password:'
          ),
          React.createElement('input', {
            type: 'password',
            id: 'password',
            name: 'password',
            key: 2,
            className: 'user-data',
            style: { display: 'block', marginTop: '10px', padding: '5px' },
          }),
        ]),
      ]),
    ])
  )
);
