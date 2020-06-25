class TestimonialSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  render() {

  const testimonials = [
    "TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL  TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL",
    "TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL  TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL",
    "TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL  TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL TESTIMONIAL ABOUT DOBERMAN BREEDERS TESTIMONIAL",
  ]
  const testimonialPerson = [
    "Robert Patton",
    "George Washington",
    "Winston Churchill"
  ]
  const testimonialDog = [
    './img/doberman1.jpg',
    './img/doberman2.jpg',
    './img/doberman3.jpg'
  ]
  let displayedTextCenter;
  let displayedTextLeft;
  let displayedTextRight;
  let displayedPersonCenter;
  let displayedPersonLeft;
  let displayedPersonRight;
  let displayedDogCenter;
  let displayedDogLeft;
  let displayedDogRight;

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


    return (
      <div style={{height: "400px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
        <div>
          <img onClick={() => {
            if (this.state.activeIndex == 0) {
              this.setState({activeIndex: 2})
            } else {
              this.setState({ activeIndex: this.state.activeIndex - 1})
            }
          }} style={{cursor: "pointer"}} src='./img/leftArrow.svg' />
        </div>
        <div style={{height: "390px", borderRadius: "10px", padding: "10px", backgroundColor: "whitesmoke", opacity: "0.5", boxShadow: "3px 3px 3px 3px #ccc", width: "26%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <p style={{marginBottom: "10px", fontStyle: "italic"}}><strong>"</strong> {displayedTextLeft} <strong>"</strong></p>
          <h4>- {displayedPersonLeft}</h4>
          <img style={{height: "120px", width: "220px", marginTop: "15px"}} src={displayedDogLeft} />
        </div>
        <div style={{height: "390px", borderRadius: "10px", padding: "10px", backgroundColor: "whitesmoke", opacity: "0.9", boxShadow: "3px 3px 3px 3px #ccc", width: "26%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <img style={{height: "120px", width: "220px", marginBottom: "15px"}} src={displayedDogCenter} />
          <p style={{marginBottom: "10px", fontStyle: "italic"}}><strong>"</strong> {displayedTextCenter} <strong>"</strong></p>
          <h4>- {displayedPersonCenter}</h4>
        </div>
        <div style={{height: "390px", borderRadius: "10px", padding: "10px", backgroundColor: "whitesmoke", opacity: "0.5", boxShadow: "3px 3px 3px 3px #ccc", width: "26%", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <p style={{marginBottom: "10px", fontStyle: "italic"}}><strong>"</strong> {displayedTextRight} <strong>"</strong></p>
          <h4>- {displayedPersonRight}</h4>
          <img style={{height: "120px", width: "220px", marginTop: "15px"}} src={displayedDogRight} />
        </div>
        <div onClick={() => {
          if (this.state.activeIndex == 2) {
            this.setState({activeIndex: 0})
          } else {
            this.setState({ activeIndex: this.state.activeIndex + 1})
          }
        }}>
          <img style={{cursor: "pointer"}} src='./img/rightArrow.svg' />
        </div>
      </div>
    );
  }
  }

let domContainer = document.querySelector('#testimonial-slider');
ReactDOM.render(<TestimonialSlider />, domContainer);

/* <div style={{padding: "20px", backgroundColor: "whitesmoke", opacity: "0.9", boxShadow: "5px 5px 5px 5px #ccc", width: "62%", textAlign: "center"}}>
          <h3 style={{marginBottom: "10px"}}>"{displayedText}"</h3>
          <h4>-{displayedPerson}</h4>
        </div> */