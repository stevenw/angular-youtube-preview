angular-youtube-preview
=======================

This AngularJS directive retrieves & displays a preview screen shot for http://www.youtube.com videos in lieu of loading the embedded player until the user clicks the preview.

Requirements: AngularJS 1.2+



## Usage:

add the module as a dependency.

```js
angular.module('myApp', ['angularYoutubePreview'])
```

#### install via bower:
```
$ bower install angular-youtube-preview
```


## Configuration

#### required
```
<youtube-preview v="SEyNApYnmgg" width="560" height="315"></youtube-preview>
```

#### optional
```
<youtube-preview v="SEyNApYnmgg" width="560" height="315" frame-key="0" play-icon="img/icon-youtube-play.png"></youtube-preview>
```

