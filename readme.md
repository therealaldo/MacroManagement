# Login Feature

The login feature of a project between [Jacob Nigh](https://github.com/jacobnigh) and myself. We are
using React Native while also incorporating Auth0 for user authentication.

## Installation

### Cloning the repository

Clone the git repository to your machine using ssh.
```
$ git clone git@github.com:therealaldo/MacroManagement.git
```

Navigate to the project and install the npm packages.
```
$ cd MacroManagement
$ npm install
```

### Adding Lock to your project

Install Cocoapods in order to fetch ```Lock``` native libraries dependencies and link them to your
project.
```
$ gem install cocoapods
```

Run the following command to install ```react-native-lock```.
```
$ npm install --save react-native-lock
```

After that, install [rnpm](https://github.com/rnpm/rnpm). You may be prompted to run the command as
root.
```
$ npm install rnpm -g
```

Once installed, link ```react-native-lock``` with your iOS project.
```
$ rnpm link react-native-lock
```

If you get the following warning
```
[!] The `<YourAppName> [Debug]` target overrides the `OTHER_LDFLAGS` build setting defined in `Pods/Target Support Files/Pods/Pods.debug.xcconfig'. This can lead to problems with the CocoaPods installation
    - Use the `$(inherited)` flag, or
    - Remove the build settings from the target.

[!] The `<YourAppName> [Release]` target overrides the `OTHER_LDFLAGS` build setting defined in `Pods/Target Support Files/Pods/Pods.release.xcconfig'. This can lead to problems with the CocoaPods installation
    - Use the `$(inherited)` flag, or
    - Remove the build settings from the target.
```
Open Xcode and click on ```<YourAppName>.xcodeproj``` in the project navigator and go to ```Build Settings```.
Make sure ```All``` is toggled on instead of ```Basic```. Look for ```Other Linker Flags``` and change the current value
to ```$(inherited)``` for **all** configurations.

After that, you are going to need to install ```react-native-config``` to access your environment
variables.
```
$ npm install --save react-native-config
```

Link ```react-native-config``` to your iOS project using ```rnpm```.
```
$ rnpm link react-native-config
```

### Setting up Auth0

Head over to [Auth0](https://auth0.com/) and create your application. Once created, you're going to
need your **ClientID** and **Domain**. You can save those in a .env file and access them using
**react-native-config**.
```javascript
import Auth0Lock from 'react-native-lock';
import Config from 'react-native-config';

let credentials = {
  clientId: Config.CLIENT_ID,
  domain: Config.DOMAIN
};
let lock = new Auth0Lock(credentials);
```

You'll then create your onLogin function.
```javascript
import Auth0Lock from 'react-native-lock';
import Config from 'react-native-config';

let credentials = {
  clientId: Config.CLIENT_ID,
  domain: Config.DOMAIN
};
let lock = new Auth0Lock(credentials);

_onLogin: function() {
  lock.show({
    closable: true,
  }, (err, profile, token) => {
    if (err) {
      console.log(err);
      return;
    }
    this.props.navigator.push({
      name: 'Profile',
      passProps: {
        profile: profile,
        token: token,
      }
    });
  });
```

At this point, you should be ready to run and test your login in the simulator.
```
$ react-native run-ios
```
