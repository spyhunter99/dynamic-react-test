Ok, kind of a strange setup...

Goal: dynamically (and without prior knowledge) load up a react component
and render it. This effectively enables a dynamic runtime plugin system for react

I tried many differnt configurations and this one is the only one that 
kind of seems to work. Your milage may vary...

Note: Only JSX files are supported via this mechanism

Only two important files...

my-app/public/module.jsx - this is the dynamic module you need to render
my-app/src/App.js - loads up the dynamic jsx file, then uses the react-jsx-parser to render.

References

- https://stackoverflow.com/questions/56867079/dynamically-load-a-react-component-bundle-from-external-source
- https://github.com/TroyAlford/react-jsx-parser
- https://stackoverflow.com/questions/51482929/rendering-external-html-react-components-dynamically-in-react

Notes

https://webpack.js.org/concepts/module-federation/
- webpack module federation, splits up compiled code and enables dyanmic loaded, must everything must in the same source code base...ie can't load dynamic stuff at runtime.