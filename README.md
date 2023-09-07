# [Design System](https://github.com/goodeats/design-system)

## About

Creating a design system to import in other projects

Tools I am using:
- [Rollup](https://rollupjs.org) - for bundling

Tools I want to implement
- Radix
- Tailwind
- Storybook

Create Radix primitives and insert Tailwind CSS into them

## NPM Package

Also trying creating an NPM package from scratch

Following along this [tutorial](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)

### Installation

Developer's Note: My npm creds are on a water-damaged laptop :/ so I will publish at a later date; fortunately we can install locally :D

Steps:
* `cd ./path/to/repo`
* `npm link`
* `cd ../path/to/install/repo` (where you want to use this library)
* `npm link @goodeats/design-system`
  * use the name in this project's `package.json`, subject to change if I have to get a new login
  * you should see the package appear in the `node_modules/` directory

Make sure to re-link if making changes to this repo