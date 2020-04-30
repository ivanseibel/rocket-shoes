<h1 align="center">
    <img alt="GoStack" src="https://github.com/ivanseibel/assets/blob/master/img/gostack10/bootcamp-header.png?raw=true" width="200px" />
</h1>

<h3 align="center">
  <img src="https://github.com/ivanseibel/assets/blob/master/img/rocketshoes/logo-purple-276x36.png?raw=true" alt="Rocketshoes logo" style="border-radius: 2px;">
  <p>
    Project: Rocketshoes - Mobile
  </p>
</h3>

<p align="center">
  <a href="https://github.com/ivanseibel">
    <img alt="Made by Ivan Seibel" src="https://img.shields.io/badge/Made%20by-Ivan%20Seibel-blue">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/ivanseibel/gostack10-challenge01?color=blue">

  <a href="https://github.com/ivanseibel/gostack10-challenge01/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/ivanseibel/rocketshoes">
  </a>
</p>

<p align="center">
  <a href="#description">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#demo">Description</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
<img src="https://github.com/ivanseibel/assets/blob/master/img/rocketshoes/rocketshoes-mobile-demo.gif?raw=true" alt="Rocketshoes Mobile App Demo"
style="width: 300px;"
>
</p>


# Description

Very simple mobile application written with React Native that simulates a virtual shoe store, more specifically operations related to navigation on the product display screen, adding and removing products from the shopping cart and updating values and quantities.

During the work of building the app was experimented the follow technologies and concepts:

- Use of components to avoid code repetition
- Global shared states with redux
- Use of Saga to simplify async operations
- Debug with Reactotron + Redux + Saga
- Project migration from class model to hooks model
- Advanced styles with [styled-components](https://styled-components.com/)
- HTTP transactions with REST API using [axios](https://github.com/axios/axios)
- Simplify work with redux states using [immer](https://immerjs.github.io/immer/docs/introduction)
- Showing friendly warnings with [react-native-flash-message](https://github.com/lucasferreira/react-native-flash-message)
- Showing friendly material icons with [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- Beautifying code using eslint + prettier

# How to run

First of all, this project can be executed in both android and iOS devices, but it was not optimized for iOS and maybe you will observe some interface erratic behaviors.

Clone this repository:
```
$ git clone https://github.com/ivanseibel/rocketshoes
```

Get inside the new created folder "rocketshoes/mobile"
```
$ cd rocketshoes/mobile
```

Install all components:
```
$ yarn install
```

Run the android app:
```
$ yarn android
```

Run json-server at `../api` to put the api online ([see ../api](https://github.com/ivanseibel/rocketshoes/tree/master/api)). If you use a physical mobile device, it's important that you start api with real local ip.

# License

This project is under MIT license.
