# React Native UserAvatar


https://www.npmjs.com/package/useravatar-react-native

A bare-bones user avatar display with support for falling back to using the user's initials on a colored background as the avatar.
Based on the great library for React: https://github.com/mahendramahi/useravatar-react-native, and ported to React Native.

<img src="https://github.com/mahendramahi/useravatar-react-native/blob/master/screen/img.png" width="150" >


## Installation

`npm install --save useravatar-react-native` or `yarn add useravatar-react-native`

## Usage

```js
   <UserAvatar
        src={'https://picsum.photos/200'}
        name={'User Name'}
        size={35}
      />

      <UserAvatar
        src={'https://truworth-video-in.s3-ap-south-1.amazonaws.com/foodimage/initial-image.png'}
        name={'User Name'}
        size={35}
      />
```

## Handle onError of image
if You have urls which is give xml or AccessDenied like this:-
<img src="https://truworth-video-in.s3-ap-south-1.amazonaws.com/foodimags/initial-image.png" width="200">
this npm module support it and render initials or user name.

## Credits
@https://github.com/mahendramahi

##License

MIT
