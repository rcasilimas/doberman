class HeritageSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            selectedDog: null,
            selectedDog2: null
        }
    }

    render() {
        const clickHandler = (event) => {
            console.log(event.target)
            this.setState({ ...this.state, home: false, selectedDog: {
                name: event.target.name,
                dob: event.target.getAttribute('dob'),
                gender: event.target.getAttribute('gender'),
                picture: event.target.src
            }})
        }
        const backHandler = () => {
            console.log(this.state.selectedDog)
            this.setState({ ...this.state, home: true, selectedDog: null})
        }

        const clickHandler2 = (event) => {
            this.setState({ ...this.state, home: false, selectedDog2: {
                name: event.target.name,
                dob: event.target.getAttribute('dob'),
                gender: event.target.getAttribute('gender'),
                picture: event.target.src
            }})
        }

        const backHandler2 = () => {
            this.setState({ ...this.state, home: false, selectedDog2: null})
        }

        if (this.state.selectedDog2) {
            return (
                <div style={{width: "100%", display: 'inline-flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                    <div onClick={backHandler2} style={{width: '100%', display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <ion-icon style={{cursor: 'pointer', marginRight: '5px'}} size='large' name="arrow-back-outline"></ion-icon>
                        <p>Go Back</p>
                    </div>
                    <div style={{width: '100%', display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <div>
                            <img style={{width: '300px', height: '220px', borderRadius: '4px'}} src={this.state.selectedDog.picture} />
                        </div>
                        <div>
                            <p><strong>Name: </strong>{this.state.selectedDog.name}</p>
                            <p><strong>Date of Birth: </strong>{this.state.selectedDog.dob}</p>
                            <p><strong>Gender: </strong>{this.state.selectedDog.gender}</p>
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.selectedDog) {
            return (
                <div style={{width: "100%", display: 'inline-flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                    <div onClick={backHandler} style={{width: '100%', display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <ion-icon style={{cursor: 'pointer', marginRight: '5px'}} size='large' name="arrow-back-outline"></ion-icon>
                        <p>Go Back</p>
                    </div>
                    <div style={{width: '100%', display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <div>
                            <img style={{width: '300px', height: '220px', borderRadius: '4px'}} src={this.state.selectedDog.picture} />
                        </div>
                        <div>
                            <p><strong>Name: </strong>{this.state.selectedDog.name}</p>
                            <p><strong>Date of Birth: </strong>{this.state.selectedDog.dob}</p>
                            <p><strong>Gender: </strong>{this.state.selectedDog.gender}</p>
                        </div>
                        <div style={{display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <h3 style={{marginBottom: '20px'}}>Heritage:</h3>
                            <div style={{display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
                                <div  style={{display: 'inline-flex', marginRight: '20px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <h4 style={{marginBottom: '10px'}}>Mother</h4>
                                    <img onClick={clickHandler2} style={{cursor: 'pointer', width: '200px', height: '150px', borderRadius: '4px'}} src={this.state.selectedDog.picture} />
                                </div>
                                <div  style={{display: 'inline-flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                    <h4>Father</h4>
                                    <img  onClick={clickHandler2} style={{cursor: 'pointer', width: '200px', height: '150px', borderRadius: '4px'}} src={this.state.selectedDog.picture} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.home) {
            return (
                <div style={{width: "100%", display: 'inline-flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                    <div style={{width: "100%", marginBottom: '40px', display: 'inline-flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center'}}>
                        <div class='heritage-pic-container'  >
                            <img dob='January 19th, 2017' gender='Male' onClick={clickHandler} className='heritage-pic' name='Bubba' src='./img/dobermanheritage1.jpg' />
                            <p class='heritage-text' >My name is Bubba. Click on my picture to learn more about me!</p>
                        </div>
                        <div class='heritage-pic-container'  >
                            <img onClick={clickHandler} dob='May 8th, 2016' gender='Female' class='heritage-pic' name='Jackie' src='./img/dobermanheritage2.jpg' />
                            <p class='heritage-text' >My name is Jackie. Click on my picture to learn more about me!</p>
                        </div>
                        <div class='heritage-pic-container'  >
                            <img onClick={clickHandler} dob='October 29th, 2015' gender='Male' class='heritage-pic' name='Wilson' src='./img/dobermanheritage3.jpg' />
                            <p class='heritage-text'>My name is Wilson. Click on my picture to learn more about me!</p>
                        </div>
                    </div>
                    <div style={{width: "100%", marginBottom: '40px', display: 'inline-flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center'}}>
                        <div class='heritage-pic-container'  >
                            <img dob='January 19th, 2017' gender='Male' onClick={clickHandler} className='heritage-pic' name='Bubba' src='./img/dobermanheritage1.jpg' />
                            <p class='heritage-text' >My name is Bubba. Click on my picture to learn more about me!</p>
                        </div>
                        <div class='heritage-pic-container'  >
                            <img onClick={clickHandler} dob='May 8th, 2016' gender='Female' class='heritage-pic' name='Jackie' src='./img/dobermanheritage2.jpg' />
                            <p class='heritage-text' >My name is Jackie. Click on my picture to learn more about me!</p>
                        </div>
                        <div class='heritage-pic-container'  >
                            <img onClick={clickHandler} dob='October 29th, 2015' gender='Male' class='heritage-pic' name='Wilson' src='./img/dobermanheritage3.jpg' />
                            <p class='heritage-text'>My name is Wilson. Click on my picture to learn more about me!</p>
                        </div>
                    </div>
                    <div style={{width: "100%", marginBottom: '40px', display: 'inline-flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center'}}>
                        <div class='heritage-pic-container'  >
                            <img dob='January 19th, 2017' gender='Male' onClick={clickHandler} className='heritage-pic' name='Bubba' src='./img/dobermanheritage1.jpg' />
                            <p class='heritage-text' >My name is Bubba. Click on my picture to learn more about me!</p>
                        </div>
                        <div class='heritage-pic-container'  >
                            <img onClick={clickHandler} dob='May 8th, 2016' gender='Female' class='heritage-pic' name='Jackie' src='./img/dobermanheritage2.jpg' />
                            <p class='heritage-text' >My name is Jackie. Click on my picture to learn more about me!</p>
                        </div>
                        <div class='heritage-pic-container'  >
                            <img onClick={clickHandler} dob='October 29th, 2015' gender='Male' class='heritage-pic' name='Wilson' src='./img/dobermanheritage3.jpg' />
                            <p class='heritage-text'>My name is Wilson. Click on my picture to learn more about me!</p>
                        </div>
                    </div>
                </div>
            )
        }
    }
}


let domContainer = document.querySelector('#heritage-app');
ReactDOM.render(<HeritageSection />, domContainer);
