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
exports.IconElectricBike = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconElectricBike = function (props) {
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
            'g',
            {
              children: jsx_runtime_1.jsx(
                'rect',
                { fill: 'none', height: '20', width: '20' },
                void 0
              ),
            },
            void 0
          ),
          jsx_runtime_1.jsx(
            'g',
            {
              children: jsx_runtime_1.jsxs(
                'g',
                {
                  children: [
                    jsx_runtime_1.jsx(
                      'path',
                      {
                        d: 'M15.5,7h-0.68l-1.58-4.34C13.1,2.26,12.72,2,12.3,2H10v1h2.3l1.46,4H8.75L8.38,6H10V5H6v1h1.32l1.46,4H7.95 C7.7,8.19,6.13,6.86,4.2,7.01c-1.64,0.13-3.01,1.46-3.18,3.1C0.8,12.25,2.41,14,4.5,14c1.79,0,3.21-1.29,3.45-3h4.1 c0.25,1.81,1.83,3.14,3.75,2.99c1.64-0.13,3.01-1.46,3.18-3.1C19.2,8.75,17.59,7,15.5,7z M6.95,11c-0.23,1.15-1.22,2-2.45,2 C3.1,13,2,11.9,2,10.5S3.1,8,4.5,8c1.23,0,2.23,0.85,2.45,2H4v1H6.95z M12.05,10H9.84L9.11,8h3.92C12.5,8.52,12.16,9.22,12.05,10z M15.5,13c-1.4,0-2.5-1.1-2.5-2.5c0-0.94,0.5-1.73,1.24-2.16l1.03,2.83l0.94-0.34l-1.02-2.8C15.3,8.02,15.4,8,15.5,8 c1.4,0,2.5,1.1,2.5,2.5S16.9,13,15.5,13z',
                      },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'polygon',
                      { points: '9.5,16 7,16 10.5,18 10.5,17 13,17 9.5,15' },
                      void 0
                    ),
                  ],
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
exports.IconElectricBike = IconElectricBike;
//# sourceMappingURL=IconElectricBike.js.map