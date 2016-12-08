Initially copied from https://github.com/b52/electron-es6-react

# electron-boilerplate

A simple boilerplate app to start development of an electron with commonly used modules

## How?

The main entry point is `boot.js`, which first registers Babel then includes
'main.js'.  This is necessary to allow `main.js` to make use of Babel's features.

The renderer entry point `index.html` does basically the same, but loads the
`index.js` file, which renders the `component/root.jsx` component into the `root` element.

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

