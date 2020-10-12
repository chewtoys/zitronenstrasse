# Zitronenstrasse

#### Romantic Spots in Berlin.

[zitronenstrasse.com](https://zitronenstrasse.com/)

## GENERAL INFO

A side project with a list of romantic spots in Berlin.

Based on **Nuxt (VueJS)** and **Google Maps**.

## Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# generate static project
$ yarn deploy
```

For detailed explanation on how Nuxt work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

#### ENV OPTIONS

You need to set some CONFIG VAR options locally and on Deploy Server for custom Plugins as Google Map, Analytics etc ...

You can find which ones in the ENV example file:

```html
# example file for CONFIG KEYS required. Based on dotenv package
./env_variables/env_keys_example
```

For detailed explanation on how dotenv work, checkout the [dotenv docs](https://github.com/motdotla/dotenv).

### ENV keys List required

- TODO: here


## ROAD MAP

- **MAP PAN (movement)**: set it slow and nicer/smoother

- **MAP CUSTOM STYLES**: at map movement it is always flickering cause of image request. is is ok? could we prevent it?

- **FILTERS**: show places sorted by some kind of filter (only bars, only restaurants etc ...). Design + Code need to a concept.

- **SHARE SINGLE PLACES**: suggestion for sharing (on FB, twitter, as link) only a single place on the map. Conceptually possible? we have to check

- **HEADLINE**: on homepage/map set some kind of headline for recognising the website brand

#### ISSUES

- **PERFORMANCES**: check speed insight (June 2019)

#### NICE TO HAVE

- **CONTACT PAGE**: set node mailer and all the logic for form mailer
