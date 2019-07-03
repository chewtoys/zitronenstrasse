// set MODERNIZR logic.
// we load here the nuxt/vue plugin all the Custom Modernizr code we need
// little bit tricky: you have to generate code and copy/paste in plugin

// info here: https://github.com/nuxt/nuxt.js/issues/2525

// here below you just copy and paste the final GENERATED code
// the modernizr-config.json is required as blueprint
// for add new options, you have to re-run a CLI comamnd again
// >>> modernizr -c modernizr-config.json
// DO NOT save the generate file. you just copy the code here below!

/* eslint-disable */
if (process.browser) {
  // COPY GENERATED CODE HERE - start

  /*! modernizr 3.6.0 (Custom Build) | MIT *
   * https://modernizr.com/download/?-setclasses !*/
  !(function(n, e, s) {
    function o(n, e) {
      return typeof n === e
    }
    function a() {
      var n, e, s, a, i, f, r
      for (var c in t)
        if (t.hasOwnProperty(c)) {
          if (
            ((n = []),
            (e = t[c]),
            e.name &&
              (n.push(e.name.toLowerCase()),
              e.options && e.options.aliases && e.options.aliases.length))
          )
            for (s = 0; s < e.options.aliases.length; s++)
              n.push(e.options.aliases[s].toLowerCase())
          for (
            a = o(e.fn, 'function') ? e.fn() : e.fn, i = 0;
            i < n.length;
            i++
          )
            (f = n[i]),
              (r = f.split('.')),
              1 === r.length
                ? (Modernizr[r[0]] = a)
                : (!Modernizr[r[0]] ||
                    Modernizr[r[0]] instanceof Boolean ||
                    (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
                  (Modernizr[r[0]][r[1]] = a)),
              l.push((a ? '' : 'no-') + r.join('-'))
        }
    }
    function i(n) {
      var e = r.className,
        s = Modernizr._config.classPrefix || ''
      if ((c && (e = e.baseVal), Modernizr._config.enableJSClass)) {
        var o = new RegExp('(^|\\s)' + s + 'no-js(\\s|$)')
        e = e.replace(o, '$1' + s + 'js$2')
      }
      Modernizr._config.enableClasses &&
        ((e += ' ' + s + n.join(' ' + s)),
        c ? (r.className.baseVal = e) : (r.className = e))
    }
    var t = [],
      f = {
        _version: '3.6.0',
        _config: {
          classPrefix: '',
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0,
        },
        _q: [],
        on: function(n, e) {
          var s = this
          setTimeout(function() {
            e(s[n])
          }, 0)
        },
        addTest: function(n, e, s) {
          t.push({ name: n, fn: e, options: s })
        },
        addAsyncTest: function(n) {
          t.push({ name: null, fn: n })
        },
      },
      Modernizr = function() {}
    ;(Modernizr.prototype = f), (Modernizr = new Modernizr())
    var l = [],
      r = e.documentElement,
      c = 'svg' === r.nodeName.toLowerCase()
    a(), i(l), delete f.addTest, delete f.addAsyncTest
    for (var u = 0; u < Modernizr._q.length; u++) Modernizr._q[u]()
    n.Modernizr = Modernizr
  })(window, document)

  // COPY GENERATED CODE HERE - end
}
