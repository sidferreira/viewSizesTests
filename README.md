The goal of this repo is to reproduce an issue happening in another native module.

In this module, I need to add an android native 3rd party library inside a react view.

I can't find out why, but the View/Layout that is in the file `ViewTesterView.java` just doesn't show up.

JS wise, we have ~3 views (backgrounds `RED`, `GREEN`, `BLUE`).

In the JAVA side, the `BLUE` will change the background to `YELLOW` and then add a Layout inside of it.

Now, the layout is always getting the `width: 0, height: 0`, not rendering the 3rd party contents.

The frame has `CYAN` background and should fill the `BLUE/YELLOW` view.

I need a little help finding out why the layout is not calculating the size properly.

### Edit 1

I found this https://github.com/react-native-video/react-native-video/blob/bf11502fdb83751ad826f3e4b448732075292805/android-exoplayer/src/main/java/com/brentvatne/exoplayer/ReactExoplayerView.java#L384 relayout thing, related to https://github.com/facebook/react-native/issues/17968 and they may be related. I tried it but had no success so far.
