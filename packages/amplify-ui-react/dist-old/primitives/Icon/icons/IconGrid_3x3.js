'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.IconGrid_3x3 = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconGrid_3x3 = function (props) {
  var size = props.size,
    _a = props.fill,
    fill = _a === void 0 ? 'currentColor' : _a,
    ariaLabel = props.ariaLabel,
    rest = __rest(props, ['size', 'fill', 'ariaLabel']);
  return jsx_runtime_1.jsxs(
    'svg',
    __assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        'enable-background': 'new 0 0 24 24',
        'data-size': size,
        'aria-label': ariaLabel,
        fill: fill,
      },
      rest,
      { viewBox: '0 0 24 24', className: 'amplify-icon' },
      {
        children: [
          jsx_runtime_1.jsx(
            'g',
            {
              children: jsx_runtime_1.jsx(
                'path',
                { d: 'M0,0h24v24H0V0z', fill: 'none' },
                void 0
              ),
            },
            void 0
          ),
          jsx_runtime_1.jsx(
            'g',
            {
              children: jsx_runtime_1.jsx(
                'path',
                {
                  d: 'M20,10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4H20z M14,14h-4v-4h4V14z',
                },
                void 0
              ),
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.IconGrid_3x3 = IconGrid_3x3;
//# sourceMappingURL=IconGrid_3x3.js.map