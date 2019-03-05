//
//  Generated by https://www.npmjs.com/package/amd-bundle
//
(function (factory) {

    if ((typeof define === 'function')  &&  define.amd)
        define('teacher', ["dom-renderer"], factory);
    else if (typeof module === 'object')
        return  module.exports = factory.call(global,require('dom-renderer'));
    else
        return  this['teacher'] = factory.call(self,this['dom-renderer']);

})(function (dom_renderer) {

function merge(base, path) {
  return (base + '/' + path).replace(/\/\//g, '/').replace(/[^/.]+\/\.\.\//g, '').replace(/\.\//g, function (match, index, input) {
    return input[index - 1] === '.' ? match : '';
  });
}

function outPackage(name) {
  return /^[^./]/.test(name);
}

    var require = (typeof module === 'object') ?
        function () {

            return  module.require.apply(module, arguments);
        } : (
            this.require  ||  function (name) {

                if (self[name] != null)  return self[name];

                throw ReferenceError('Can\'t find "' + name + '" module');
            }
        );

    var _include_ = include.bind(null, './');

    function include(base, path) {

        path = outPackage( path )  ?  path  :  ('./' + merge(base, path));

        var module = _module_[path], exports;

        if (! module)  return require(path);

        if (! module.exports) {

            module.exports = { };

            var dependency = module.dependency;

            for (var i = 0;  dependency[i];  i++)
                module.dependency[i] = _include_( dependency[i] );

            exports = module.factory.apply(
                null,  module.dependency.concat(
                    include.bind(null, module.base),  module.exports,  module
                )
            );

            if (exports != null)  module.exports = exports;

            delete module.dependency;  delete module.factory;
        }

        return module.exports;
    }

function _toConsumableArray(arr) {
    return (
        _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread()
    );
}

function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance');
}

function _iterableToArray(iter) {
    if (
        Symbol.iterator in Object(iter) ||
        Object.prototype.toString.call(iter) === '[object Arguments]'
    )
        return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}

function _asyncToGenerator(fn) {
    return function() {
        var self = this,
            args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'next',
                    value
                );
            }
            function _throw(err) {
                asyncGeneratorStep(
                    gen,
                    resolve,
                    reject,
                    _next,
                    _throw,
                    'throw',
                    err
                );
            }
            _next(undefined);
        });
    };
}

var _module_ = {
    './index.json': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            exports.default = void 0;
            var _default = [
                {
                    index: 1,
                    teachers: [
                        {
                            avatar: 'course.png'
                        },
                        {
                            avatar: 'course.png'
                        },
                        {
                            name: '鹿雯立',
                            avatar: '鹿雯立.png',
                            title:
                                '中国幸福教练联盟 发起人<br>美国职业培训认证协会 培训师<br>畅销书作家'
                        }
                    ]
                },
                {
                    teachers: [
                        {
                            avatar: 'course.png'
                        },
                        {
                            name: '冯岩',
                            avatar: '冯岩.png',
                            title:
                                '成都海川百纳商业管理有限公司 联合创始人<br>江湖火锅 创始人'
                        },
                        {
                            name: 'Mercury',
                            avatar: 'Mercury.png',
                            title:
                                'M Studio花与礼物 创始人<br>全球最大媒介集团群邑中国 媒体策划总监<br>群邑亚太区30位30岁以下年轻领导者之一'
                        }
                    ]
                },
                {
                    teachers: [
                        {
                            avatar: 'course.png'
                        },
                        {
                            name: '冯岩',
                            avatar: '冯岩.png',
                            title:
                                '成都海川百纳商业管理有限公司 联合创始人<br>江湖火锅 创始人'
                        },
                        {
                            name: 'Mercury',
                            avatar: 'Mercury.png',
                            title:
                                'M Studio花与礼物 创始人<br>全球最大媒介集团群邑中国 媒体策划总监<br>群邑亚太区30位30岁以下年轻领导者之一'
                        }
                    ]
                }
            ];
            exports.default = _default;
        }
    },
    './index.html': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            exports.default = void 0;
            var _default =
                '<template>\n    <div class="carousel-item ${view.index ? \'active\' : \'\'}">\n        <div class="card-deck" data-view="teachers">\n            <template>\n                <div class="card card-cascade mb-1">\n                    <img src="img/teachers/${view.avatar}" alt="teacher photo" class="img-fluid">\n                    <h4 class="card-title my-4 font-weight-bold " hidden="${!view.name}">${view.name}</h4>\n                    <p class="py-2" hidden="${!view.name}">${view.title}</p>\n                </div>\n            </template>\n        </div>\n    </div>\n</template>\n\n';
            exports.default = _default;
        }
    },
    './index': {
        base: '.',
        dependency: [],
        factory: function factory(require, exports, module) {
            var _domRenderer = _interopRequireWildcard(require('dom-renderer'));

            var _index = _interopRequireDefault(require('./index.html'));

            var _index2 = _interopRequireDefault(require('./index.json'));

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule
                    ? obj
                    : {
                          default: obj
                      };
            }

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};

                    if (obj != null) {
                        for (var key in obj) {
                            if (
                                Object.prototype.hasOwnProperty.call(obj, key)
                            ) {
                                var desc =
                                    Object.defineProperty &&
                                    Object.getOwnPropertyDescriptor
                                        ? Object.getOwnPropertyDescriptor(
                                              obj,
                                              key
                                          )
                                        : {};

                                if (desc.get || desc.set) {
                                    Object.defineProperty(newObj, key, desc);
                                } else {
                                    newObj[key] = obj[key];
                                }
                            }
                        }
                    }

                    newObj.default = obj;
                    return newObj;
                }
            }

            var teacher = new _domRenderer.default(
                    (0, _domRenderer.parseDOM)(
                        _index.default
                    ).firstChild.innerHTML
                ),
                box = document.querySelector('#teacher');
            Promise.all(
                _index2.default.map(
                    /*#__PURE__*/
                    (function() {
                        var _ref = _asyncToGenerator(
                            /*#__PURE__*/
                            regeneratorRuntime.mark(function _callee(data) {
                                var item;
                                return regeneratorRuntime.wrap(
                                    function _callee$(_context) {
                                        while (1) {
                                            switch (
                                                (_context.prev = _context.next)
                                            ) {
                                                case 0:
                                                    item = teacher.clone();
                                                    _context.next = 3;
                                                    return item.render(data);

                                                case 3:
                                                    return _context.abrupt(
                                                        'return',
                                                        item
                                                    );

                                                case 4:
                                                case 'end':
                                                    return _context.stop();
                                            }
                                        }
                                    },
                                    _callee
                                );
                            })
                        );

                        return function(_x) {
                            return _ref.apply(this, arguments);
                        };
                    })()
                )
            ).then(function(list) {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (
                        var _iterator = list[Symbol.iterator](), _step;
                        !(_iteratorNormalCompletion = (_step = _iterator.next())
                            .done);
                        _iteratorNormalCompletion = true
                    ) {
                        var view = _step.value;
                        box.append.apply(
                            box,
                            _toConsumableArray(view.topNodes)
                        );
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (
                            !_iteratorNormalCompletion &&
                            _iterator.return != null
                        ) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            });
        }
    },
    'dom-renderer': {
        exports: dom_renderer
    }
};

    return _include_('./index');
});