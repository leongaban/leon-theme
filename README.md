# @leon/theme

## A simple React style & component library

#### Styles

- Theme
- Button

## Steps to use in React

Import LeonTheme into your index.tsx

```
import { LeonTheme } from "leon-theme";
```

Wrap your App with the component

```
root.render(
  <React.StrictMode>
    <LeonTheme component={App} />
  </React.StrictMode>
);
```

## Commands to build package

`npm run build` > Will generate the `dist/lib/es6` & `types` folder

Module published with `npm publish --access public`
