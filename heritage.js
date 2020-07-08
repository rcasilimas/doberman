var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeritageSection = function (_React$Component) {
    _inherits(HeritageSection, _React$Component);

    function HeritageSection(props) {
        _classCallCheck(this, HeritageSection);

        var _this = _possibleConstructorReturn(this, (HeritageSection.__proto__ || Object.getPrototypeOf(HeritageSection)).call(this, props));

        _this.state = {
            home: true,
            filtered: false,
            selectedDog: ''
        };
        return _this;
    }

    _createClass(HeritageSection, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var filteredDog = void 0;
            var clickHandler = function clickHandler(event) {
                _this2.setState(Object.assign({}, _this2.state, { home: false, filtered: true, selectedDog: event.target.name }));
            };
            var backHandler = function backHandler() {
                _this2.setState(Object.assign({}, _this2.state, { home: true, filtered: false, selectedDog: '' }));
            };

            if (this.state.selectedDog == 'bubba') {
                filteredDog = {
                    name: "Bubba",
                    DOB: "June 17th, 2015",
                    gender: 'Male',
                    snack: 'Pork Rinds',
                    picture: './img/dobermanheritage1.jpg'
                };
            }
            if (this.state.selectedDog == 'jackie') {
                filteredDog = {
                    name: "Jackie",
                    DOB: "April 2nd, 2014",
                    gender: 'Female',
                    snack: 'Ham',
                    picture: './img/dobermanheritage2.jpg'
                };
            }
            if (this.state.selectedDog == 'wilson') {
                filteredDog = {
                    name: "Wilson",
                    DOB: "December 13th, 2016",
                    gender: 'Male',
                    snack: 'Milk',
                    picture: './img/dobermanheritage3.jpg'
                };
            }

            if (this.state.filtered) {
                return React.createElement(
                    'div',
                    { style: { width: "100%", display: 'inline-flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' } },
                    React.createElement(
                        'div',
                        { onClick: backHandler, style: { width: '100%', display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' } },
                        React.createElement('ion-icon', { style: { cursor: 'pointer', marginRight: '5px' }, size: 'large', name: 'arrow-back-outline' }),
                        React.createElement(
                            'p',
                            null,
                            'Go Back'
                        )
                    ),
                    React.createElement(
                        'div',
                        { style: { width: '100%', display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' } },
                        React.createElement(
                            'div',
                            null,
                            React.createElement('img', { style: { width: '300px', height: '220px', borderRadius: '4px' }, src: filteredDog.picture })
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    'Name: '
                                ),
                                filteredDog.name
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    'Date of Birth: '
                                ),
                                filteredDog.DOB
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    'Gender: '
                                ),
                                filteredDog.gender
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    'Favorite Snack: '
                                ),
                                filteredDog.snack
                            )
                        ),
                        React.createElement(
                            'div',
                            null,
                            React.createElement('img', { style: { width: '400px', height: '300px', borderRadius: '4px' }, src: './img/heritage-certificate.jpg' })
                        )
                    )
                );
            }

            if (this.state.home) {
                return React.createElement(
                    'div',
                    { style: { width: "100%", display: 'inline-flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' } },
                    React.createElement(
                        'div',
                        { onClick: clickHandler, style: { width: '400px', height: '400px', cursor: "pointer" } },
                        React.createElement(
                            'h3',
                            { style: { textAlign: 'center', marginBottom: '30px' } },
                            'My name is Bubba. Click on my picture to learn more about me!'
                        ),
                        React.createElement('img', { name: 'bubba', style: { width: '400px', height: '300px', borderRadius: '4px' }, src: './img/dobermanheritage1.jpg' })
                    ),
                    React.createElement(
                        'div',
                        { onClick: clickHandler, style: { width: '400px', height: '400px', cursor: "pointer" } },
                        React.createElement(
                            'h3',
                            { style: { textAlign: 'center', marginBottom: '30px' } },
                            'My name is Jackie. Click on my picture to learn more about me!'
                        ),
                        React.createElement('img', { name: 'jackie', style: { width: '400px', height: '300px', borderRadius: '4px' }, src: './img/dobermanheritage2.jpg' })
                    ),
                    React.createElement(
                        'div',
                        { onClick: clickHandler, style: { width: '400px', height: '400px', cursor: "pointer" } },
                        React.createElement(
                            'h3',
                            { style: { textAlign: 'center', marginBottom: '30px' } },
                            'My name is Wilson. Click on my picture to learn more about me!'
                        ),
                        React.createElement('img', { name: 'wilson', style: { width: '400px', height: '300px', borderRadius: '4px' }, src: './img/dobermanheritage3.jpg' })
                    )
                );
            }
        }
    }]);

    return HeritageSection;
}(React.Component);

var domContainer = document.querySelector('#heritage-app');
ReactDOM.render(React.createElement(HeritageSection, null), domContainer);