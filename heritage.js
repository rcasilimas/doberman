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
            selectedDog: null,
            selectedDog2: null
        };
        return _this;
    }

    _createClass(HeritageSection, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var clickHandler = function clickHandler(event) {
                console.log(event.target);
                _this2.setState(Object.assign({}, _this2.state, { home: false, selectedDog: {
                        name: event.target.name,
                        dob: event.target.getAttribute('dob'),
                        gender: event.target.getAttribute('gender'),
                        picture: event.target.src
                    } }));
            };
            var backHandler = function backHandler() {
                console.log(_this2.state.selectedDog);
                _this2.setState(Object.assign({}, _this2.state, { home: true, selectedDog: null }));
            };

            var clickHandler2 = function clickHandler2(event) {
                _this2.setState(Object.assign({}, _this2.state, { home: false, selectedDog2: {
                        name: event.target.name,
                        dob: event.target.getAttribute('dob'),
                        gender: event.target.getAttribute('gender'),
                        picture: event.target.src
                    } }));
            };

            var backHandler2 = function backHandler2() {
                _this2.setState(Object.assign({}, _this2.state, { home: false, selectedDog2: null }));
            };

            if (this.state.selectedDog2) {
                return React.createElement(
                    'div',
                    { style: { width: "100%", display: 'inline-flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' } },
                    React.createElement(
                        'div',
                        { onClick: backHandler2, style: { width: '100%', display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center' } },
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
                            React.createElement('img', { style: { width: '300px', height: '220px', borderRadius: '4px' }, src: this.state.selectedDog.picture })
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
                                this.state.selectedDog.name
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    'Date of Birth: '
                                ),
                                this.state.selectedDog.dob
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    'Gender: '
                                ),
                                this.state.selectedDog.gender
                            )
                        )
                    )
                );
            }

            if (this.state.selectedDog) {
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
                            React.createElement('img', { style: { width: '300px', height: '220px', borderRadius: '4px' }, src: this.state.selectedDog.picture })
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
                                this.state.selectedDog.name
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    'Date of Birth: '
                                ),
                                this.state.selectedDog.dob
                            ),
                            React.createElement(
                                'p',
                                null,
                                React.createElement(
                                    'strong',
                                    null,
                                    'Gender: '
                                ),
                                this.state.selectedDog.gender
                            )
                        ),
                        React.createElement(
                            'div',
                            { style: { display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                            React.createElement(
                                'h3',
                                { style: { marginBottom: '20px' } },
                                'Heritage:'
                            ),
                            React.createElement(
                                'div',
                                { style: { display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' } },
                                React.createElement(
                                    'div',
                                    { style: { display: 'inline-flex', marginRight: '20px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                                    React.createElement(
                                        'h4',
                                        { style: { marginBottom: '10px' } },
                                        'Mother'
                                    ),
                                    React.createElement('img', { onClick: clickHandler2, style: { cursor: 'pointer', width: '200px', height: '150px', borderRadius: '4px' }, src: this.state.selectedDog.picture })
                                ),
                                React.createElement(
                                    'div',
                                    { style: { display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } },
                                    React.createElement(
                                        'h4',
                                        null,
                                        'Father'
                                    ),
                                    React.createElement('img', { onClick: clickHandler2, style: { cursor: 'pointer', width: '200px', height: '150px', borderRadius: '4px' }, src: this.state.selectedDog.picture })
                                )
                            )
                        )
                    )
                );
            }

            if (this.state.home) {
                return React.createElement(
                    'div',
                    { style: { width: "100%", display: 'inline-flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center' } },
                    React.createElement(
                        'div',
                        { style: { width: "100%", marginBottom: '40px', display: 'inline-flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' } },
                        React.createElement(
                            'div',
                            { 'class': 'heritage-pic-container' },
                            React.createElement('img', { dob: 'January 19th, 2017', gender: 'Male', onClick: clickHandler, className: 'heritage-pic', name: 'Bubba', src: './img/dobermanheritage1.jpg' }),
                            React.createElement(
                                'p',
                                { 'class': 'heritage-text' },
                                'My name is Bubba. Click on my picture to learn more about me!'
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'heritage-pic-container' },
                            React.createElement('img', { onClick: clickHandler, dob: 'May 8th, 2016', gender: 'Female', 'class': 'heritage-pic', name: 'Jackie', src: './img/dobermanheritage2.jpg' }),
                            React.createElement(
                                'p',
                                { 'class': 'heritage-text' },
                                'My name is Jackie. Click on my picture to learn more about me!'
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'heritage-pic-container' },
                            React.createElement('img', { onClick: clickHandler, dob: 'October 29th, 2015', gender: 'Male', 'class': 'heritage-pic', name: 'Wilson', src: './img/dobermanheritage3.jpg' }),
                            React.createElement(
                                'p',
                                { 'class': 'heritage-text' },
                                'My name is Wilson. Click on my picture to learn more about me!'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { style: { width: "100%", marginBottom: '40px', display: 'inline-flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' } },
                        React.createElement(
                            'div',
                            { 'class': 'heritage-pic-container' },
                            React.createElement('img', { dob: 'January 19th, 2017', gender: 'Male', onClick: clickHandler, className: 'heritage-pic', name: 'Bubba', src: './img/dobermanheritage1.jpg' }),
                            React.createElement(
                                'p',
                                { 'class': 'heritage-text' },
                                'My name is Bubba. Click on my picture to learn more about me!'
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'heritage-pic-container' },
                            React.createElement('img', { onClick: clickHandler, dob: 'May 8th, 2016', gender: 'Female', 'class': 'heritage-pic', name: 'Jackie', src: './img/dobermanheritage2.jpg' }),
                            React.createElement(
                                'p',
                                { 'class': 'heritage-text' },
                                'My name is Jackie. Click on my picture to learn more about me!'
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'heritage-pic-container' },
                            React.createElement('img', { onClick: clickHandler, dob: 'October 29th, 2015', gender: 'Male', 'class': 'heritage-pic', name: 'Wilson', src: './img/dobermanheritage3.jpg' }),
                            React.createElement(
                                'p',
                                { 'class': 'heritage-text' },
                                'My name is Wilson. Click on my picture to learn more about me!'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { style: { width: "100%", marginBottom: '40px', display: 'inline-flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center' } },
                        React.createElement(
                            'div',
                            { 'class': 'heritage-pic-container' },
                            React.createElement('img', { dob: 'January 19th, 2017', gender: 'Male', onClick: clickHandler, className: 'heritage-pic', name: 'Bubba', src: './img/dobermanheritage1.jpg' }),
                            React.createElement(
                                'p',
                                { 'class': 'heritage-text' },
                                'My name is Bubba. Click on my picture to learn more about me!'
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'heritage-pic-container' },
                            React.createElement('img', { onClick: clickHandler, dob: 'May 8th, 2016', gender: 'Female', 'class': 'heritage-pic', name: 'Jackie', src: './img/dobermanheritage2.jpg' }),
                            React.createElement(
                                'p',
                                { 'class': 'heritage-text' },
                                'My name is Jackie. Click on my picture to learn more about me!'
                            )
                        ),
                        React.createElement(
                            'div',
                            { 'class': 'heritage-pic-container' },
                            React.createElement('img', { onClick: clickHandler, dob: 'October 29th, 2015', gender: 'Male', 'class': 'heritage-pic', name: 'Wilson', src: './img/dobermanheritage3.jpg' }),
                            React.createElement(
                                'p',
                                { 'class': 'heritage-text' },
                                'My name is Wilson. Click on my picture to learn more about me!'
                            )
                        )
                    )
                );
            }
        }
    }]);

    return HeritageSection;
}(React.Component);

var domContainer = document.querySelector('#heritage-app');
ReactDOM.render(React.createElement(HeritageSection, null), domContainer);