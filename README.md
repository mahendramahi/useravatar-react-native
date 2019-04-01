# React Native UserAvatar


A bare-bones user avatar display with support for falling back to using the user's initials on a colored background as the avatar.
Based on the great library for React: https://github.com/wbinnssmith/react-user-avatar, and ported to React Native.

![](https://imgur.com/OKBK7Nz)

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

## User-defined Image-Component

It is also possible to use another Image-Component than the built-in `<Image>`.

```js
  <UserAvatar size="50" name="John Doe" component={CachedImage} />
```

The fallback avatar's color may be set by passing in the `color` prop, or you can customize the range of colors
used by passing in an array of `colors`. The component uses a simple calculation to consistently use the same
color for the same user's name every time.

## Credits

@wbinnssmith

##License

MIT
