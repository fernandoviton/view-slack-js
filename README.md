# view-slack-js

A client app that can read a local exported slack archive

## Usage details

Currently only supports an archive that has been extracted into ~/Documents/SlackExported/

Visualization and features are still very limited

## Future

- Support Search
- Nicer html styling
- Visualization of more of the slack data
- View of attached file support

## Implementation Details?

The main entry point is `bootstrapper.js`, which first registers Babel then includes
'main.js'.  This is necessary to allow `main.js` to make use of Babel's features.

The renderer entry point `index.html` does basically the same, but loads the
`index.js` file, which renders the `component/root.jsx` component into the `root` element.

More details: https://github.com/fernandoviton/view-slack-js/blob/master/docs/state.md

## Installation

```bash
git clone https://github.com/fernandoviton/view-slack-js.git
cd view-slack-js
npm install
npm start
```

## Deployment

```bash
electron-packager . -all
```

## Dep
- Initially copied from https://github.com/b52/electron-es6-react
- [ES6](http://exploringjs.com/)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Electron](http://electron.atom.io/)
- [Babel](http://babeljs.io)
- [Jest](https://facebook.github.io/jest/)
- [Electron-Packager](https://github.com/electron-userland/electron-packager)
- React-select
