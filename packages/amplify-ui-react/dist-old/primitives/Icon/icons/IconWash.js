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
exports.IconWash = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconWash = function (props) {
  var size = props.size,
    _a = props.fill,
    fill = _a === void 0 ? 'currentColor' : _a,
    ariaLabel = props.ariaLabel,
    rest = __rest(props, ['size', 'fill', 'ariaLabel']);
  return jsx_runtime_1.jsx(
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
        children: jsx_runtime_1.jsxs(
          'g',
          {
            children: [
              jsx_runtime_1.jsx(
                'rect',
                { fill: 'none', height: '24', width: '24' },
                void 0
              ),
              jsx_runtime_1.jsx(
                'path',
                {
                  d: 'M18.5,8C19.88,8,21,6.88,21,5.5C21,3.83,18.5,1,18.5,1S16,3.83,16,5.5C16,6.88,17.12,8,18.5,8z M13.5,9 C14.33,9,15,8.33,15,7.5C15,6.66,13.5,5,13.5,5S12,6.66,12,7.5C12,8.33,12.67,9,13.5,9z M9.12,5l-7.18,6.79 C1.34,12.35,1,13.14,1,13.97V20c0,1.66,1.34,3,3,3h6.25H12h5.75c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H12v-1h7.75 c0.69,0,1.25-0.56,1.25-1.25S20.44,17,19.75,17H12v-1h8.75c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H12v-1h6.75 c0.69,0,1.25-0.56,1.25-1.25S19.44,10,18.75,10H8.86c0.64-1.11,1.48-2.58,1.49-2.61c0.09-0.16,0.14-0.33,0.14-0.53 c0-0.26-0.09-0.5-0.26-0.7C10.22,6.12,9.12,5,9.12,5L9.12,5z',
                },
                void 0
              ),
            ],
          },
          void 0
        ),
      }
    ),
    void 0
  );
};
exports.IconWash = IconWash;
//# sourceMappingURL=IconWash.js.map