# React Redux SVG

A quick POC of using React, Redux, React-Redux, and SVG for a retro-style multi-screen 2D platform game.

Written in TypeScript, bundled with Webpack. Targets ES6.

[View online](http://booleanoperations.com/ReactReduxSVG)

### State management:

A snapshot of the application state looks like this:

```javascript
{
  "screenState":{
    "name":"Ballroom West",
    "terrainObjects":[
      {"topLeft":[0,0],"bottomRight":[1024,-32],"shape":1,"material":1,"style":1},
      {"topLeft":[0,-736],"bottomRight":[1024,-768],"shape":1,"material":1,"style":1},
      {"topLeft":[0,32],"bottomRight":[32,-736],"shape":1,"material":1,"style":1},
      {"topLeft":[768,-608],"bottomRight":[1024,-640],"shape":1,"material":1,"style":1},
      {"topLeft":[512,-672],"bottomRight":[768,-704],"shape":1,"material":1,"style":1}
    ]
  },
  "playerState":{
    "inputDirection":2,
    "displayDirection":2,
    "position":[269.380032581,-607.9005276160003],
    "force":[3.6760800000000016,0],
    "screen":[0,0]
  },
  "lastTickTime":3601.795
}
```

screenState represents the layout of the current screen. The reducer derives it from a pre-built 2D array of all screens.

playerState represents the position, force etc of the player as well as her current screen.

The resolver for playerState acts like a rudimentary physics engine. A requestAnimationFrame loop is set up in the index component which issues an action of type TICK with no data. The app reducer derives a time step delta by comparing the current time with the lastTickTime saved in the app state. This is used in resolving playerState to work out the new player position, force etc.

React-Redux is used to wire state changes to React props, by way of container components.

The React components render SVG. The SVG is itself scalable with the browser window, fitting proportionally.

### To build:
```
npm install
npm run release
```