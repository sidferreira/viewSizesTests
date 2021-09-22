The goal of this repo is to reproduce an issue happening in another native module.

In this module, I need to add an android native 3rd party library inside a react view.

I can't find out why, but the View/Layout that is in the file `ViewTesterView.java` just doesn't show up.

JS wise, we have ~3 views (backgrounds `RED`, `GREEN`, `BLUE`).

In the JAVA side, the `BLUE` will change the background to `YELLOW` and then add a Layout inside of it.

Now, the layout is always getting the `width: 0, height: 0`, not rendering the 3rd party contents.

The frame has `CYAN` background and should fill the `BLUE/YELLOW` view.

I need a little help finding out why the layout is not calculating the size properly.
