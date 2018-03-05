# react-select-animate

A simple react select implementation with cool animation effects.

## Git Repo 

https://github.com/lckmalhotra/react-select-animate/

## Installation

To use react-select-animate is to install it from npm.

```js
npm install react-select-animate --save
```

You can then import react-select-animate and its styles in your application as follows:

```js
import ReactSelectAnimate from 'react-select-animate';
import 'react-select-animate/dist/react-select-animate.css';
```
or you can also import the css file into sass:

```css
@import '~react-select-animate/dist/react-select-animate.css';
```

## Usage

Options should be provided as an `Array` of `Object`s, each with a `value` and `title` property for rendering.

The `value` property of each option should be either a string or a number.

When the value is changed, `onChange(selectedValueOrValues)` will fire, where you will find the value object.

```js
import React from 'react';
import ReactSelectAnimate from 'react-select-animate';

class App extends React.Component {
  state = {
    selectedValue: '',
  }
  handleChange = (selectedValue) => {
    this.setState({ selectedValue });
  }
  render() {
    const { selectedValue } = this.state;

    return (
      <ReactSelectAnimate
        placeholder={'Select'}
        value={selectedValue}
        onChange={this.handleChange}
        options={[
          { value: 'foo', title: 'Foo' },
          { value: 'boo', title: 'Boo' },
        ]}
      />
    );
  }
}
```

# License

MIT Licensed.