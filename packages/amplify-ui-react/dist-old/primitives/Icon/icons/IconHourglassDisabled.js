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
exports.IconHourglassDisabled = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconHourglassDisabled = function (props) {
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
                      'polygon',
                      {
                        points:
                          '7,4 13,4 13,6.59 10.5,9.09 11.21,9.79 14,7 14,7 14,3 6,3 6,4.59 7,5.59',
                      },
                      void 0
                    ),
                    jsx_runtime_1.jsx(
                      'path',
                      {
                        d: 'M2.93,2.93L2.22,3.64l6.57,6.57L6,13h0v4h8v-1.59l2.36,2.36l0.71-0.71L2.93,2.93z M13,16H7l0-2.59l2.5-2.5l3.5,3.5V16z',
                      },
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
exports.IconHourglassDisabled = IconHourglassDisabled;
//# sourceMappingURL=IconHourglassDisabled.js.map