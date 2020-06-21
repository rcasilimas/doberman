var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TestimonialSlider = function (_React$Component) {
  _inherits(TestimonialSlider, _React$Component);

  function TestimonialSlider(props) {
    _classCallCheck(this, TestimonialSlider);

    var _this = _possibleConstructorReturn(this, (TestimonialSlider.__proto__ || Object.getPrototypeOf(TestimonialSlider)).call(this, props));

    _this.state = { activeIndex: 0 };
    return _this;
  }

  _createClass(TestimonialSlider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var testimonials = ["TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL  TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL", "TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL  TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL", "TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL  TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL"];
      var testimonialPerson = ["Robert Patton", "George Washington", "Winston Churchill"];
      var testimonialDog = ['./img/doberman1.jpg', './img/doberman2.jpg', './img/doberman3.jpg'];
      var displayedTextCenter = void 0;
      var displayedTextLeft = void 0;
      var displayedTextRight = void 0;
      var displayedPersonCenter = void 0;
      var displayedPersonLeft = void 0;
      var displayedPersonRight = void 0;
      var displayedDogCenter = void 0;
      var displayedDogLeft = void 0;
      var displayedDogRight = void 0;

      if (this.state.activeIndex == 0) {
        displayedTextLeft = testimonials[0];
        displayedTextCenter = testimonials[1];
        displayedTextRight = testimonials[2];
        displayedPersonLeft = testimonialPerson[0];
        displayedPersonCenter = testimonialPerson[1];
        displayedPersonRight = testimonialPerson[2];
        displayedDogLeft = testimonialDog[0];
        displayedDogCenter = testimonialDog[1];
        displayedDogRight = testimonialDog[2];
      } else if (this.state.activeIndex == 1) {
        displayedTextLeft = testimonials[1];
        displayedTextCenter = testimonials[2];
        displayedTextRight = testimonials[0];
        displayedPersonLeft = testimonialPerson[1];
        displayedPersonCenter = testimonialPerson[2];
        displayedPersonRight = testimonialPerson[0];
        displayedDogLeft = testimonialDog[1];
        displayedDogCenter = testimonialDog[2];
        displayedDogRight = testimonialDog[0];
      } else if (this.state.activeIndex == 2) {
        displayedTextLeft = testimonials[2];
        displayedTextCenter = testimonials[0];
        displayedTextRight = testimonials[1];
        displayedPersonLeft = testimonialPerson[2];
        displayedPersonCenter = testimonialPerson[0];
        displayedPersonRight = testimonialPerson[1];
        displayedDogLeft = testimonialDog[2];
        displayedDogCenter = testimonialDog[0];
        displayedDogRight = testimonialDog[1];
      }

      return React.createElement(
        "div",
        { style: { height: "400px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" } },
        React.createElement(
          "div",
          null,
          React.createElement("img", { onClick: function onClick() {
              if (_this2.state.activeIndex == 0) {
                _this2.setState({ activeIndex: 2 });
              } else {
                _this2.setState({ activeIndex: _this2.state.activeIndex - 1 });
              }
            }, style: { cursor: "pointer" }, src: "./img/leftArrow.svg" })
        ),
        React.createElement(
          "div",
          { style: { height: "390px", borderRadius: "10px", padding: "10px", backgroundColor: "whitesmoke", opacity: "0.5", boxShadow: "3px 3px 3px 3px #ccc", width: "26%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } },
          React.createElement(
            "h4",
            { style: { marginBottom: "10px" } },
            "\"",
            displayedTextLeft,
            "\""
          ),
          React.createElement(
            "h4",
            null,
            "-",
            displayedPersonLeft
          ),
          React.createElement("img", { style: { height: "120px", width: "220px", marginTop: "15px" }, src: displayedDogLeft })
        ),
        React.createElement(
          "div",
          { style: { height: "390px", borderRadius: "10px", padding: "10px", backgroundColor: "whitesmoke", opacity: "0.9", boxShadow: "3px 3px 3px 3px #ccc", width: "26%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } },
          React.createElement(
            "h4",
            { style: { marginBottom: "10px" } },
            "\"",
            displayedTextCenter,
            "\""
          ),
          React.createElement(
            "h4",
            null,
            "-",
            displayedPersonCenter
          ),
          React.createElement("img", { style: { height: "120px", width: "220px", marginTop: "15px" }, src: displayedDogCenter })
        ),
        React.createElement(
          "div",
          { style: { height: "390px", borderRadius: "10px", padding: "10px", backgroundColor: "whitesmoke", opacity: "0.5", boxShadow: "3px 3px 3px 3px #ccc", width: "26%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" } },
          React.createElement(
            "h4",
            { style: { marginBottom: "10px" } },
            "\"",
            displayedTextRight,
            "\""
          ),
          React.createElement(
            "h4",
            null,
            "-",
            displayedPersonRight
          ),
          React.createElement("img", { style: { height: "120px", width: "220px", marginTop: "15px" }, src: displayedDogRight })
        ),
        React.createElement(
          "div",
          { onClick: function onClick() {
              if (_this2.state.activeIndex == 2) {
                _this2.setState({ activeIndex: 0 });
              } else {
                _this2.setState({ activeIndex: _this2.state.activeIndex + 1 });
              }
            } },
          React.createElement("img", { style: { cursor: "pointer" }, src: "./img/rightArrow.svg" })
        )
      );
    }
  }]);

  return TestimonialSlider;
}(React.Component);

var domContainer = document.querySelector('#testimonial-slider');
ReactDOM.render(React.createElement(TestimonialSlider, null), domContainer);

/* <div style={{padding: "20px", backgroundColor: "whitesmoke", opacity: "0.9", boxShadow: "5px 5px 5px 5px #ccc", width: "62%", textAlign: "center"}}>
          <h3 style={{marginBottom: "10px"}}>"{displayedText}"</h3>
          <h4>-{displayedPerson}</h4>
        </div> */