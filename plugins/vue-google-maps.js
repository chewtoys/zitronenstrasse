import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    // our key for API set in google. it comes from dot ENV logic
    key: process.env.GOOGLE_MAP_API_KEY,
    version: '3.29',
    // This is required if you use the Autocomplete plugin
    libraries: 'places'
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
