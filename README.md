# Description

This repository is intended to provide an example to reproduce an issue within `@angular/elements` project concerning a
memory leak when removing web-components from the DOM.

The project setup is very simple:

* The `app.module` exports a web-component: `wc-test`
    * The web component is very simple -> Just renders text from an HTML template
* The `index.html` contains a button to trigger creations/removals of that web-component.
* In the `main.ts` the button is wired to perform these creations/removals.
    * Each click creates and destroy 1000 web-component instances.

When using a heap analyzing tool (e.g. in Chrome Dev tools Memory Tab) then it can be sean that after a couple of clicks
the heap is increasing and memory is not released anymore.
