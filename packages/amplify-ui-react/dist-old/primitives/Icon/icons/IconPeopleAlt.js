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
exports.IconPeopleAlt = void 0;
var jsx_runtime_1 = require('react/jsx-runtime');
var IconPeopleAlt = function (props) {
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
          jsx_runtime_1.jsxs(
            'g',
            {
              children: [
                jsx_runtime_1.jsx('g', {}, void 0),
                jsx_runtime_1.jsxs(
                  'g',
                  {
                    children: [
                      jsx_runtime_1.jsx(
                        'g',
                        {
                          children: jsx_runtime_1.jsx(
                            'circle',
                            {
                              cx: '8.5',
                              cy: '7.5',
                              'fill-rule': 'evenodd',
                              r: '2.5',
                            },
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
                              d: 'M10.99,9.95C11.16,9.98,11.33,10,11.5,10c1.38,0,2.5-1.12,2.5-2.5 C14,6.12,12.88,5,11.5,5c-0.17,0-0.34,0.02-0.51,0.05C11.61,5.68,12,6.55,12,7.5S11.61,9.32,10.99,9.95z',
                              'fill-rule': 'evenodd',
                            },
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
                              d: 'M8.5,11C6.66,11,3,11.66,3,13.23V15h11v-1.77C14,11.66,10.34,11,8.5,11z',
                              'fill-rule': 'evenodd',
                            },
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
                              d: 'M13.73,11.23c0.75,0.48,1.27,1.12,1.27,2V15h2v-1.77 C17,12.18,15.36,11.54,13.73,11.23z',
                              'fill-rule': 'evenodd',
                            },
                            void 0
                          ),
                        },
                        void 0
                      ),
                    ],
                  },
                  void 0
                ),
              ],
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
};
exports.IconPeopleAlt = IconPeopleAlt;
//# sourceMappingURL=IconPeopleAlt.js.map