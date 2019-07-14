'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function Screen(props) {
    return React.createElement(
        'div',
        { className: 'screen' },
        React.createElement(
            'p',
            null,
            props.dispValue
        )
    );
};

var Button = function (_React$Component) {
    _inherits(Button, _React$Component);

    function Button(props) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

        _this.onButtonPress = _this.onButtonPress.bind(_this);
        return _this;
    }

    _createClass(Button, [{
        key: 'onButtonPress',
        value: function onButtonPress() {
            this.props.onButtonPress(this.props.value);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { onClick: this.onButtonPress },
                this.props.value
            );
        }
    }]);

    return Button;
}(React.Component);

var Calculator = function (_React$Component2) {
    _inherits(Calculator, _React$Component2);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this2 = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this, props));

        _this2.onButtonPress = _this2.onButtonPress.bind(_this2);
        _this2.clrBtn = _this2.clrBtn.bind(_this2);
        _this2.delBack = _this2.delBack.bind(_this2);
        _this2.calcRes = _this2.calcRes.bind(_this2);
        _this2.state = {
            scrStr: ''
        };
        return _this2;
    }

    _createClass(Calculator, [{
        key: 'onButtonPress',
        value: function onButtonPress(btnVal) {
            this.setState(function (prevState) {
                return {
                    scrStr: prevState.scrStr + btnVal
                };
            });
        }
    }, {
        key: 'clrBtn',
        value: function clrBtn() {
            this.setState(function () {
                return {
                    scrStr: ''
                };
            });
        }
    }, {
        key: 'delBack',
        value: function delBack() {
            this.setState(function (prevState) {
                return {
                    scrStr: prevState.scrStr.substring(0, prevState.scrStr.length - 1)
                };
            });
        }
    }, {
        key: 'calcRes',
        value: function calcRes() {
            this.setState(function (prevState) {
                if (prevState.scrStr) {
                    return {
                        scrStr: String(math.eval(prevState.scrStr))
                    };
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var i = 7;
            return React.createElement(
                'div',
                { className: 'container' },
                React.createElement(Screen, { dispValue: this.state.scrStr }),
                React.createElement(
                    'button',
                    { onClick: this.clrBtn },
                    'C'
                ),
                React.createElement(Button, { value: '%', onButtonPress: this.onButtonPress }),
                React.createElement(
                    'button',
                    { onClick: this.calcRes },
                    '='
                ),
                React.createElement(
                    'button',
                    { onClick: this.delBack },
                    React.createElement('i', { className: 'fas fa-backspace' })
                ),
                React.createElement(Button, { value: 7, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: 8, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: 9, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: '+', onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: 4, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: 5, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: 6, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: '-', onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: 1, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: 2, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: 3, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: '*', onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: 0, onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: '.', onButtonPress: this.onButtonPress }),
                React.createElement(Button, { value: '/', onButtonPress: this.onButtonPress })
            );
        }
    }]);

    return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('calc'));
