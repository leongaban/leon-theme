# @leon/theme

## A simple React style & component library

#### Components

- Theme
- Button

## Steps to use in React

#### Import LeonTheme into your index.tsx

```
import { LeonTheme } from "leon-theme";
```

#### Wrap your App with the component

```
root.render(
  <React.StrictMode>
    <LeonTheme component={App} />
  </React.StrictMode>
);
```

#### Set your theme, create and pass in a theme object (required):

```
const theme = {
  borderRadius: "30px",
  color: "yellow",
  backgroundColor: "purple",
};

<LeonTheme component={App} theme={main} />
```

#### Add button in any child component

```
import { Button as LeonButton } from "leon-theme";

<LeonButton label="Leon Theme Works!" />
```

## Commands to build package & publish package

`npm run build` > Will generate the `dist` & `types` folder

Module published with `npm publish --access public`
