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
exports.IconTravelExplore = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconTravelExplore = function (props) {
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
        'enable-background': 'new 0 0 20 20',
        height: '20',
        viewBox: '0 0 20 20',
        width: '20',
      },
      {
        children: [
          jsx_runtime_1.jsx(
            'rect',
            { fill: 'none', height: '20', width: '20' },
            void 0
          ),
          jsx_runtime_1.jsx(
            'path',
            {
              d: 'M17.85,8.5h-1.54c-0.48-2.03-1.93-3.68-3.82-4.48V4.5C12.5,5.33,11.83,6,11,6H9v1c0,0.55-0.45,1-1,1H7v2h1v2H7L3.64,8.64 C3.55,9.08,3.5,9.53,3.5,10c0,3.58,2.92,6.5,6.5,6.5V18c-4.42,0-8-3.58-8-8s3.58-8,8-8C13.91,2,17.15,4.8,17.85,8.5z M18,16.44 l-1.06,1.06l-2.56-2.56c-0.54,0.35-1.19,0.56-1.88,0.56C10.57,15.5,9,13.93,9,12s1.57-3.5,3.5-3.5S16,10.07,16,12 c0,0.69-0.21,1.34-0.56,1.88L18,16.44z M14.5,12c0-1.1-0.9-2-2-2s-2,0.9-2,2s0.9,2,2,2S14.5,13.1,14.5,12z',
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.IconTravelExplore = IconTravelExplore;
//# sourceMappingURL=IconTravelExplore.js.map