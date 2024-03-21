/*! For license information please see app.b5fa01cca696e52b221c.js.LICENSE.txt */
'use strict';
(self.webpackChunk = self.webpackChunk || []).push([
  [143],
  {
    7932: (t, e, r) => {
      var n = r(7378),
        o = r(7634),
        i = r(6495),
        a = r(896),
        c = (0, r(4366).Z)(),
        u = function (t) {
          var e = t.children;
          return n.createElement(
            i.Z,
            { theme: c },
            n.createElement(a.ZP, null),
            e
          );
        },
        l = r(5783),
        f = r(4935),
        s = r(6403);
      function h(t) {
        return (
          (h =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          h(t)
        );
      }
      function p(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function y(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? p(Object(r), !0).forEach(function (e) {
                var n, o, i;
                (n = t),
                  (o = e),
                  (i = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ('object' !== h(t) || null === t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, 'string');
                        if ('object' !== h(n)) return n;
                        throw new TypeError(
                          '@@toPrimitive must return a primitive value.'
                        );
                      }
                      return String(t);
                    })(t);
                    return 'symbol' === h(e) ? e : String(e);
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : p(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var m,
        v = {
          root: '/',
          characterCollection: '/characters',
          characterDetail: '/characters/:id',
        },
        d = y(
          y({}, v),
          {},
          {
            characterDetail: function (t) {
              return (0, s.Gn)(v.characterDetail, { id: t });
            },
          }
        ),
        g = r(4900);
      (0, g.iv)(
        m ||
          ((b = [
            '\n  display: grid;\n  grid-template-columns: 1fr;\n  align-items: center;\n  margin-top: 2rem;\n\n  @media (min-width: ',
            'px) {\n    justify-items: center;\n  }\n',
          ]),
          w || (w = b.slice(0)),
          (m = Object.freeze(
            Object.defineProperties(b, { raw: { value: Object.freeze(w) } })
          ))),
        c.breakpoints.values.sm
      );
      var b,
        w,
        E,
        O = r(9607),
        j = r(3208),
        x = r(3760),
        L = r(2093),
        S = (0, g.iv)(
          E ||
            (E = (function (t, e) {
              return (
                e || (e = t.slice(0)),
                Object.freeze(
                  Object.defineProperties(t, {
                    raw: { value: Object.freeze(e) },
                  })
                )
              );
            })(['\n  margin: 2rem;\n']))
        ),
        P = function (t) {
          var e = t.children;
          return n.createElement(
            n.Fragment,
            null,
            n.createElement(
              O.Z,
              { position: 'static' },
              n.createElement(
                j.Z,
                { variant: 'dense' },
                n.createElement(
                  x.Z,
                  { color: 'inherit', 'aria-label': 'Menu' },
                  n.createElement(L.Z, null)
                )
              )
            ),
            n.createElement('main', { className: S }, e)
          );
        },
        _ = r(7268);
      function k(t) {
        return (
          (k =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          k(t)
        );
      }
      function N() {
        N = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          c = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, '');
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function f(t, e, r, n) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            c = new T(n || []);
          return o(a, '_invoke', { value: S(t, r, c) }), a;
        }
        function s(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = f;
        var h = 'suspendedStart',
          p = 'suspendedYield',
          y = 'executing',
          m = 'completed',
          v = {};
        function d() {}
        function g() {}
        function b() {}
        var w = {};
        l(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          O = E && E(E(A([])));
        O && O !== r && n.call(O, a) && (w = O);
        var j = (b.prototype = d.prototype = Object.create(w));
        function x(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function L(t, e) {
          function r(o, i, a, c) {
            var u = s(t[o], t, i);
            if ('throw' !== u.type) {
              var l = u.arg,
                f = l.value;
              return f && 'object' == k(f) && n.call(f, '__await')
                ? e.resolve(f.__await).then(
                    function (t) {
                      r('next', t, a, c);
                    },
                    function (t) {
                      r('throw', t, a, c);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return r('throw', t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, '_invoke', {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function S(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === y) throw new Error('Generator is already running');
            if (o === m) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = P(c, n);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (o === h) throw ((o = m), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = y;
              var l = s(e, r, n);
              if ('normal' === l.type) {
                if (((o = n.done ? m : p), l.arg === v)) continue;
                return { value: l.arg, done: n.done };
              }
              'throw' === l.type &&
                ((o = m), (n.method = 'throw'), (n.arg = l.arg));
            }
          };
        }
        function P(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((r.method = 'return'),
                (r.arg = t),
                P(e, r),
                'throw' === r.method)) ||
                ('return' !== n &&
                  ((r.method = 'throw'),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              v
            );
          var i = s(o, e.iterator, r.arg);
          if ('throw' === i.type)
            return (
              (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                (r.delegate = null),
                v)
              : a
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              v);
        }
        function _(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function G(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function T(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(_, this),
            this.reset(!0);
        }
        function A(e) {
          if (e || '' === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(k(e) + ' is not iterable');
        }
        return (
          (g.prototype = b),
          o(j, 'constructor', { value: b, configurable: !0 }),
          o(b, 'constructor', { value: g, configurable: !0 }),
          (g.displayName = l(b, u, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), l(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = L),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(j),
          l(j, u, 'Generator'),
          l(j, a, function () {
            return this;
          }),
          l(j, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = A),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(G),
                !e)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, 'catchLoc'),
                    l = n.call(a, 'finallyLoc');
                  if (u && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), G(r), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    G(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: A(e), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function G(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void r(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      var T = (function () {
          var t,
            e =
              ((t = N().mark(function t() {
                var e, r;
                return N().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (t.prev = 0),
                            (t.next = 3),
                            _.Z.get(
                              ''.concat(
                                'https://rickandmortyapi.com/api',
                                '/character'
                              )
                            )
                          );
                        case 3:
                          return (
                            (e = t.sent),
                            (r = e.data),
                            t.abrupt('return', r.results)
                          );
                        case 8:
                          throw (
                            ((t.prev = 8),
                            (t.t0 = t.catch(0)),
                            new Error('Error al obtener los personajes'))
                          );
                        case 11:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 8]]
                );
              })),
              function () {
                var e = this,
                  r = arguments;
                return new Promise(function (n, o) {
                  var i = t.apply(e, r);
                  function a(t) {
                    G(i, n, o, a, c, 'next', t);
                  }
                  function c(t) {
                    G(i, n, o, a, c, 'throw', t);
                  }
                  a(void 0);
                });
              });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        A = function (t) {
          return {
            id: t.id.toString(),
            name: t.name,
            image: t.image,
            status: t.status,
            species: t.species,
            gender: t.gender,
          };
        };
      function Z(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var F,
        C,
        D = function () {
          var t,
            e,
            r =
              ((t = n.useState([])),
              (e = 2),
              (function (t) {
                if (Array.isArray(t)) return t;
              })(t) ||
                (function (t, e) {
                  var r =
                    null == t
                      ? null
                      : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                        t['@@iterator'];
                  if (null != r) {
                    var n,
                      o,
                      i,
                      a,
                      c = [],
                      u = !0,
                      l = !1;
                    try {
                      if (((i = (r = r.call(t)).next), 0 === e)) {
                        if (Object(r) !== r) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (n = i.call(r)).done) &&
                          (c.push(n.value), c.length !== e);
                          u = !0
                        );
                    } catch (t) {
                      (l = !0), (o = t);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != r.return &&
                          ((a = r.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (l) throw o;
                      }
                    }
                    return c;
                  }
                })(t, e) ||
                (function (t, e) {
                  if (t) {
                    if ('string' == typeof t) return Z(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      'Object' === r &&
                        t.constructor &&
                        (r = t.constructor.name),
                      'Map' === r || 'Set' === r
                        ? Array.from(t)
                        : 'Arguments' === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? Z(t, e)
                        : void 0
                    );
                  }
                })(t, e) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()),
            o = r[0],
            i = r[1];
          return {
            characterCollection: o,
            loadCharacterCollection: function () {
              T().then(function (t) {
                return i(((e = t), (r = A), Array.isArray(e) ? e.map(r) : []));
                var e, r;
              });
            },
          };
        },
        I = r(4141),
        z = r(2919),
        Y = r(472),
        U = r(2237),
        W = r(1800),
        M = r(6655);
      function B(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      var $,
        V,
        q = (0, g.iv)(
          F ||
            (F = B([
              '\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n',
            ]))
        ),
        H =
          ((0, g.iv)(
            C ||
              (C = B([
                '\n  list-style: none;\n  text-decoration: none;\n  color: #000;\n  font-weight: bold;\n',
              ]))
          ),
          function (t) {
            var e = t.character,
              r = t.onDetail;
            return n.createElement(
              I.Z,
              null,
              n.createElement(
                z.Z,
                null,
                n.createElement(
                  'div',
                  { className: q },
                  n.createElement(Y.Z, {
                    image: e.image,
                    title: e.name,
                    style: { height: 0, paddingTop: '80.25%' },
                  })
                ),
                n.createElement('h3', null, ' Name: ', e.name),
                n.createElement('h4', null, ' Status: ', e.status),
                n.createElement('h4', null, ' Gender: ', e.gender),
                n.createElement('h4', null, ' Species: ', e.species)
              ),
              n.createElement(
                U.Z,
                null,
                n.createElement(
                  x.Z,
                  {
                    onClick: function () {
                      return r(e.id);
                    },
                  },
                  n.createElement(W.Z, null)
                ),
                n.createElement(x.Z, null, n.createElement(M.Z, null))
              )
            );
          });
      function J(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      var K = (0, g.iv)(
          $ ||
            ($ = J([
              '\n  & > :nth-child(n + 2) {\n    margin-top: 2rem;\n  }\n',
            ]))
        ),
        Q = (0, g.iv)(
          V ||
            (V = J([
              '\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-row-gap: 2rem;\n  grid-column-gap: 2rem;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n\n  @media (min-width: ',
              'px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media (min-width: ',
              'px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n',
            ])),
          c.breakpoints.values.sm,
          c.breakpoints.values.md
        ),
        R = function (t) {
          var e = t.characterCollection,
            r = t.onDetail;
          return n.createElement(
            'div',
            { className: K },
            n.createElement(
              'ul',
              { className: Q },
              e.map(function (t) {
                return n.createElement(
                  'li',
                  { key: t.id },
                  n.createElement(H, { character: t, onDetail: r })
                );
              })
            )
          );
        },
        X = function () {
          var t = D(),
            e = t.characterCollection,
            r = t.loadCharacterCollection,
            o = (0, f.s0)();
          return (
            n.useEffect(function () {
              r();
            }, []),
            n.createElement(R, {
              characterCollection: e,
              onDetail: function (t) {
                o(d.characterDetail(t));
              },
            })
          );
        },
        tt = function () {
          return n.createElement(P, null, n.createElement(X, null));
        };
      function et(t) {
        return (
          (et =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          et(t)
        );
      }
      function rt() {
        rt = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          c = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, '');
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function f(t, e, r, n) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            c = new N(n || []);
          return o(a, '_invoke', { value: S(t, r, c) }), a;
        }
        function s(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = f;
        var h = 'suspendedStart',
          p = 'suspendedYield',
          y = 'executing',
          m = 'completed',
          v = {};
        function d() {}
        function g() {}
        function b() {}
        var w = {};
        l(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          O = E && E(E(G([])));
        O && O !== r && n.call(O, a) && (w = O);
        var j = (b.prototype = d.prototype = Object.create(w));
        function x(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function L(t, e) {
          function r(o, i, a, c) {
            var u = s(t[o], t, i);
            if ('throw' !== u.type) {
              var l = u.arg,
                f = l.value;
              return f && 'object' == et(f) && n.call(f, '__await')
                ? e.resolve(f.__await).then(
                    function (t) {
                      r('next', t, a, c);
                    },
                    function (t) {
                      r('throw', t, a, c);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return r('throw', t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, '_invoke', {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function S(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === y) throw new Error('Generator is already running');
            if (o === m) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = P(c, n);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (o === h) throw ((o = m), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = y;
              var l = s(e, r, n);
              if ('normal' === l.type) {
                if (((o = n.done ? m : p), l.arg === v)) continue;
                return { value: l.arg, done: n.done };
              }
              'throw' === l.type &&
                ((o = m), (n.method = 'throw'), (n.arg = l.arg));
            }
          };
        }
        function P(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((r.method = 'return'),
                (r.arg = t),
                P(e, r),
                'throw' === r.method)) ||
                ('return' !== n &&
                  ((r.method = 'throw'),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              v
            );
          var i = s(o, e.iterator, r.arg);
          if ('throw' === i.type)
            return (
              (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                (r.delegate = null),
                v)
              : a
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              v);
        }
        function _(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function N(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(_, this),
            this.reset(!0);
        }
        function G(e) {
          if (e || '' === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(et(e) + ' is not iterable');
        }
        return (
          (g.prototype = b),
          o(j, 'constructor', { value: b, configurable: !0 }),
          o(b, 'constructor', { value: g, configurable: !0 }),
          (g.displayName = l(b, u, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), l(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = L),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(j),
          l(j, u, 'Generator'),
          l(j, a, function () {
            return this;
          }),
          l(j, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = G),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, 'catchLoc'),
                    l = n.call(a, 'finallyLoc');
                  if (u && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), k(r), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    k(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: G(e), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function nt(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void r(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      var ot = (function () {
        var t,
          e =
            ((t = rt().mark(function t(e) {
              var r, n;
              return rt().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          _.Z.get(
                            ''
                              .concat(
                                'https://rickandmortyapi.com/api',
                                '/character/'
                              )
                              .concat(e)
                          )
                        );
                      case 3:
                        return (
                          (r = t.sent), (n = r.data), t.abrupt('return', n)
                        );
                      case 8:
                        throw (
                          ((t.prev = 8),
                          (t.t0 = t.catch(0)),
                          new Error('Error al obtener al personaje'))
                        );
                      case 11:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 8]]
              );
            })),
            function () {
              var e = this,
                r = arguments;
              return new Promise(function (n, o) {
                var i = t.apply(e, r);
                function a(t) {
                  nt(i, n, o, a, c, 'next', t);
                }
                function c(t) {
                  nt(i, n, o, a, c, 'throw', t);
                }
                a(void 0);
              });
            });
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      function it(t) {
        return (
          (it =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          it(t)
        );
      }
      function at(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ct(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? at(Object(r), !0).forEach(function (e) {
                var n, o, i;
                (n = t),
                  (o = e),
                  (i = r[e]),
                  (o = (function (t) {
                    var e = (function (t, e) {
                      if ('object' !== it(t) || null === t) return t;
                      var r = t[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(t, 'string');
                        if ('object' !== it(n)) return n;
                        throw new TypeError(
                          '@@toPrimitive must return a primitive value.'
                        );
                      }
                      return String(t);
                    })(t);
                    return 'symbol' === it(e) ? e : String(e);
                  })(o)) in n
                    ? Object.defineProperty(n, o, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (n[o] = i);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : at(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      var ut = function (t) {
          return ct(
            ct({}, t),
            {},
            {
              id: t.id.toString(),
              name: t.name,
              status: t.status,
              species: t.species,
              gender: t.gender,
            }
          );
        },
        lt = r(1744),
        ft = r(2993),
        st = function (t) {
          var e = t.character,
            r = (0, f.s0)();
          return n.createElement(
            n.Fragment,
            null,
            e
              ? n.createElement(
                  lt.Z,
                  { sx: { marginTop: 2, marginBottom: 2 } },
                  n.createElement(
                    I.Z,
                    { sx: { maxWidth: 280 } },
                    n.createElement(Y.Z, {
                      sx: { height: 280 },
                      image: e.image,
                      title: e.name,
                      component: 'img',
                    }),
                    n.createElement(
                      z.Z,
                      null,
                      n.createElement('h3', null, ' Name: ', e.name),
                      n.createElement('h4', null, ' Status: ', e.status),
                      n.createElement('h4', null, ' Género: ', e.gender),
                      n.createElement('h4', null, ' Especie: ', e.species)
                    )
                  )
                )
              : n.createElement('div', null, 'Loading...'),
            n.createElement(
              ft.Z,
              {
                variant: 'contained',
                onClick: function () {
                  r(-1);
                },
              },
              'Volver a la lista de personajes'
            )
          );
        };
      function ht(t) {
        return (
          (ht =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    'function' == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                }),
          ht(t)
        );
      }
      function pt() {
        pt = function () {
          return e;
        };
        var t,
          e = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          o =
            Object.defineProperty ||
            function (t, e, r) {
              t[e] = r.value;
            },
          i = 'function' == typeof Symbol ? Symbol : {},
          a = i.iterator || '@@iterator',
          c = i.asyncIterator || '@@asyncIterator',
          u = i.toStringTag || '@@toStringTag';
        function l(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          l({}, '');
        } catch (t) {
          l = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function f(t, e, r, n) {
          var i = e && e.prototype instanceof d ? e : d,
            a = Object.create(i.prototype),
            c = new N(n || []);
          return o(a, '_invoke', { value: S(t, r, c) }), a;
        }
        function s(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (t) {
            return { type: 'throw', arg: t };
          }
        }
        e.wrap = f;
        var h = 'suspendedStart',
          p = 'suspendedYield',
          y = 'executing',
          m = 'completed',
          v = {};
        function d() {}
        function g() {}
        function b() {}
        var w = {};
        l(w, a, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          O = E && E(E(G([])));
        O && O !== r && n.call(O, a) && (w = O);
        var j = (b.prototype = d.prototype = Object.create(w));
        function x(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            l(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function L(t, e) {
          function r(o, i, a, c) {
            var u = s(t[o], t, i);
            if ('throw' !== u.type) {
              var l = u.arg,
                f = l.value;
              return f && 'object' == ht(f) && n.call(f, '__await')
                ? e.resolve(f.__await).then(
                    function (t) {
                      r('next', t, a, c);
                    },
                    function (t) {
                      r('throw', t, a, c);
                    }
                  )
                : e.resolve(f).then(
                    function (t) {
                      (l.value = t), a(l);
                    },
                    function (t) {
                      return r('throw', t, a, c);
                    }
                  );
            }
            c(u.arg);
          }
          var i;
          o(this, '_invoke', {
            value: function (t, n) {
              function o() {
                return new e(function (e, o) {
                  r(t, n, e, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
          });
        }
        function S(e, r, n) {
          var o = h;
          return function (i, a) {
            if (o === y) throw new Error('Generator is already running');
            if (o === m) {
              if ('throw' === i) throw a;
              return { value: t, done: !0 };
            }
            for (n.method = i, n.arg = a; ; ) {
              var c = n.delegate;
              if (c) {
                var u = P(c, n);
                if (u) {
                  if (u === v) continue;
                  return u;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (o === h) throw ((o = m), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = y;
              var l = s(e, r, n);
              if ('normal' === l.type) {
                if (((o = n.done ? m : p), l.arg === v)) continue;
                return { value: l.arg, done: n.done };
              }
              'throw' === l.type &&
                ((o = m), (n.method = 'throw'), (n.arg = l.arg));
            }
          };
        }
        function P(e, r) {
          var n = r.method,
            o = e.iterator[n];
          if (o === t)
            return (
              (r.delegate = null),
              ('throw' === n &&
                e.iterator.return &&
                ((r.method = 'return'),
                (r.arg = t),
                P(e, r),
                'throw' === r.method)) ||
                ('return' !== n &&
                  ((r.method = 'throw'),
                  (r.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              v
            );
          var i = s(o, e.iterator, r.arg);
          if ('throw' === i.type)
            return (
              (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), v
            );
          var a = i.arg;
          return a
            ? a.done
              ? ((r[e.resultName] = a.value),
                (r.next = e.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
                (r.delegate = null),
                v)
              : a
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              v);
        }
        function _(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function k(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function N(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(_, this),
            this.reset(!0);
        }
        function G(e) {
          if (e || '' === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ('function' == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var o = -1,
                i = function r() {
                  for (; ++o < e.length; )
                    if (n.call(e, o)) return (r.value = e[o]), (r.done = !1), r;
                  return (r.value = t), (r.done = !0), r;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(ht(e) + ' is not iterable');
        }
        return (
          (g.prototype = b),
          o(j, 'constructor', { value: b, configurable: !0 }),
          o(b, 'constructor', { value: g, configurable: !0 }),
          (g.displayName = l(b, u, 'GeneratorFunction')),
          (e.isGeneratorFunction = function (t) {
            var e = 'function' == typeof t && t.constructor;
            return (
              !!e &&
              (e === g || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (e.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, b)
                : ((t.__proto__ = b), l(t, u, 'GeneratorFunction')),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (e.awrap = function (t) {
            return { __await: t };
          }),
          x(L.prototype),
          l(L.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = L),
          (e.async = function (t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new L(f(t, r, n, o), i);
            return e.isGeneratorFunction(r)
              ? a
              : a.next().then(function (t) {
                  return t.done ? t.value : a.next();
                });
          }),
          x(j),
          l(j, u, 'Generator'),
          l(j, a, function () {
            return this;
          }),
          l(j, 'toString', function () {
            return '[object Generator]';
          }),
          (e.keys = function (t) {
            var e = Object(t),
              r = [];
            for (var n in e) r.push(n);
            return (
              r.reverse(),
              function t() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in e) return (t.value = n), (t.done = !1), t;
                }
                return (t.done = !0), t;
              }
            );
          }),
          (e.values = G),
          (N.prototype = {
            constructor: N,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = t),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = t),
                this.tryEntries.forEach(k),
                !e)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = t);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = e),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = t)),
                  !!o
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var a = this.tryEntries[i],
                  c = a.completion;
                if ('root' === a.tryLoc) return o('end');
                if (a.tryLoc <= this.prev) {
                  var u = n.call(a, 'catchLoc'),
                    l = n.call(a, 'finallyLoc');
                  if (u && l) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var i = o;
                  break;
                }
              }
              i &&
                ('break' === t || 'continue' === t) &&
                i.tryLoc <= e &&
                e <= i.finallyLoc &&
                (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = t),
                (a.arg = e),
                i
                  ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
                  : this.complete(a)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                v
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), k(r), v;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    k(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (e, r, n) {
              return (
                (this.delegate = { iterator: G(e), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = t),
                v
              );
            },
          }),
          e
        );
      }
      function yt(t, e, r, n, o, i, a) {
        try {
          var c = t[i](a),
            u = c.value;
        } catch (t) {
          return void r(t);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function mt(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n;
      }
      var vt = function (t) {
          var e,
            r,
            o =
              ((e = n.useState({
                id: '',
                name: '',
                status: '',
                species: '',
                gender: '',
              })),
              (r = 2),
              (function (t) {
                if (Array.isArray(t)) return t;
              })(e) ||
                (function (t, e) {
                  var r =
                    null == t
                      ? null
                      : ('undefined' != typeof Symbol && t[Symbol.iterator]) ||
                        t['@@iterator'];
                  if (null != r) {
                    var n,
                      o,
                      i,
                      a,
                      c = [],
                      u = !0,
                      l = !1;
                    try {
                      if (((i = (r = r.call(t)).next), 0 === e)) {
                        if (Object(r) !== r) return;
                        u = !1;
                      } else
                        for (
                          ;
                          !(u = (n = i.call(r)).done) &&
                          (c.push(n.value), c.length !== e);
                          u = !0
                        );
                    } catch (t) {
                      (l = !0), (o = t);
                    } finally {
                      try {
                        if (
                          !u &&
                          null != r.return &&
                          ((a = r.return()), Object(a) !== a)
                        )
                          return;
                      } finally {
                        if (l) throw o;
                      }
                    }
                    return c;
                  }
                })(e, r) ||
                (function (t, e) {
                  if (t) {
                    if ('string' == typeof t) return mt(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return (
                      'Object' === r &&
                        t.constructor &&
                        (r = t.constructor.name),
                      'Map' === r || 'Set' === r
                        ? Array.from(t)
                        : 'Arguments' === r ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                        ? mt(t, e)
                        : void 0
                    );
                  }
                })(e, r) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()),
            i = o[0],
            a = o[1],
            c = (0, f.UO)().id,
            u = (function () {
              var t,
                e =
                  ((t = pt().mark(function t() {
                    var e;
                    return pt().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.next = 2), ot(c);
                          case 2:
                            (e = t.sent), a(ut(e));
                          case 4:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })),
                  function () {
                    var e = this,
                      r = arguments;
                    return new Promise(function (n, o) {
                      var i = t.apply(e, r);
                      function a(t) {
                        yt(i, n, o, a, c, 'next', t);
                      }
                      function c(t) {
                        yt(i, n, o, a, c, 'throw', t);
                      }
                      a(void 0);
                    });
                  });
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            n.useEffect(function () {
              c && u();
            }, []),
            n.createElement(st, { character: i })
          );
        },
        dt = function () {
          return n.createElement(P, null, n.createElement(vt, null));
        },
        gt = function () {
          return n.createElement(
            l.UT,
            null,
            n.createElement(
              f.Z5,
              null,
              n.createElement(f.AW, {
                path: v.characterCollection,
                element: n.createElement(tt, null),
              }),
              n.createElement(f.AW, {
                path: v.characterDetail,
                element: n.createElement(dt, null),
              }),
              n.createElement(f.AW, {
                path: v.root,
                element: n.createElement(f.Fg, { to: v.characterCollection }),
              })
            )
          );
        },
        bt = function () {
          return n.createElement(gt, null);
        };
      const wt = function () {
        return n.createElement(u, null, n.createElement(bt, null));
      };
      var Et = document.getElementById('root');
      (0, o.s)(Et).render(n.createElement(wt, null));
    },
  },
  (t) => {
    var e = (e) => t((t.s = e));
    t.O(0, [736], () => (e(6248), e(7932))), t.O();
  },
]);
