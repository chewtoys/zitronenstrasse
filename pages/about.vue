<template lang="pug">
  section.section
    .container
      h1
        | About

      p
        span.text-accent
          | Zitronenstrasse
        |
        | is a mapping project to collect and share romantic spots in Berlin.

      p
        | Bars, cafes, restaurants, bistros, parks and some little hidden places around the city.


      //- ============================================================
      h2
        | The Project

      p
        | Berlin is a wonderful city. So vivid, multicultural, full of history and with so many secret spots.

      p
        | However,
        |
        span.text-accent
          | sometimes finding the right place for the right mood is so hard
        | , even harder when you are looking for a romantic place. It has to be nice, but not uptight; it needs good music, but not too loud; cool drinks and a good menu, but nothing too classy; with fancy people, but not too crowded.

      p
        | So here you can find a small selection of romantic spots: some of them are perfect for a brunch or a coffee, some other are for the evening with drinks and music. You can also find bars or outdoors places where drinking a beer while waiting for the sunset.

      P
        | Hopefully you will find here your romantic place.


      //- ============================================================
      h2
        | The Name

      p
        span.text-accent
          | Why Zitronenstrasse?
        |
        | It’s just a name of a street? It’s real one? What does it mean?

      p
        | Well, here is the story.

      p
        | Zitronenstrasse is an
        |
        span.text-accent
          | inside joke between two languages
        |, German and Italian.

      p
        | Italians know well what a
        |
        i
          | limone
        |
        | (literally:
        |
        i
          | lemon
        |) is: it's a slang word for
        |
        i
          | making out (limonare)
        |.

      p
        | Being in Germany we thought about
        |
        i
          | The street of lemons
        |
        | in the local language:
        |
        i
          | Zitronen-strasse
        |, the romantic street for (hopefully) making out.



      //- ============================================================
      h2
        | The Author

      p
        | I'm
        |
        span.text-accent
          | Valerio Sillari
        |. I'm working as Senior Frontend Developer and in the last years I've fallen in love with Berlin.

      p
        | So I decided to create this website to collect all the nice romantic places I've found and play with new frontend languages.

      p
        | I hope you like it, either you are a romantic person or a romantic coder.
</template>

<script>
export default {
  head() {
    // Set Meta Tags for this Page
    return {
      title: 'About | Zitronenstrasse',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `About | Zitronenstrasse | ${this.$config.metaHeadDescription}`,
        },
      ],
    }
  },
}
</script>
