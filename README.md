Initially copied from https://github.com/b52/electron-es6-react

# electron-boilerplate

A simple boilerplate app to start development of an electron with commonly used modules

## How?

The main entry point is `boostrapper.js`, which registers Babel and loads the
real entry point `main.js`. This is necessary to allow `main.js` to make use of
Babel's features.

The renderer entry point `index.html` does basically the same, but loads the
`scripts/main.js` file, which renders the `views/main.jsx` component into the `body`.

## Installation

```bash
git clone https://github.com/fernandoviton/electron-boilerplate.git
cd electron-boilerplate
npm install
npm start
```

[ES6]: http://exploringjs.com/
[React]: https://facebook.github.io/react/
[Electron]: http://electron.atom.io/
[Babel]: http://babeljs.io

