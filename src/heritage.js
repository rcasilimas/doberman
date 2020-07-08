class HeritageSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            home: true,
            filtered: false,
            selectedDog: ''
        }
    }

    render() {
        let filteredDog;
        const clickHandler = (event) => {
            this.setState({ ...this.state, home: false, filtered: true, selectedDog: event.target.name})
        }
        const backHandler = () => {
            this.setState({ ...this.state, home: true, filtered: false, selectedDog: ''})
        }

        if (this.state.selectedDog == 'bubba') {
            filteredDog = {
                name: "Bubba",
                DOB: "June 17th, 2015",
                gender: 'Male',
                snack: 'Pork Rinds',
                picture: './img/dobermanheritage1.jpg'
            }
        } 
        if (this.state.selectedDog == 'jackie') {
            filteredDog = {
                name: "Jackie",
                DOB: "April 2nd, 2014",
                gender: 'Female',
                snack: 'Ham',
                picture: './img/dobermanheritage2.jpg'
            }
        } 
        if (this.state.selectedDog == 'wilson') {
            filteredDog = {
                name: "Wilson",
                DOB: "December 13th, 2016",
                gender: 'Male',
                snack: 'Milk',
                picture: './img/dobermanheritage3.jpg'
            }
        }


        

        if (this.state.filtered) {
            return (
                <div style={{width: "100%", display: 'inline-flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center'}}>
                    <div onClick={backHandler} style={{width: '100%', display: 'inline-flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                        <ion-icon style={{cursor: 'pointer', marginRight: '5px'}} size='large' name="arrow-back-outline"></ion-icon>
                        <p>Go Back</p>
                    </div>
                    <div style={{width: '100%', display: 'inline-flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                        <div>
                            <img style={{width: '300px', height: '220px', borderRadius: '4px'}} src={filteredDog.picture} />
                        </div>
                        <div>
                            <p><strong>Name: </strong>{filteredDog.name}</p>
                            <p><strong>Date of Birth: </strong>{filteredDog.DOB}</p>
                            <p><strong>Gender: </strong>{filteredDog.gender}</p>
                            <p><strong>Favorite Snack: </strong>{filteredDog.snack}</p>
                        </div>
                        <div>
                            <img style={{width: '400px', height: '300px', borderRadius: '4px'}} src='./img/heritage-certificate.jpg' />
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.home) {
            return (
                <div style={{width: "100%", display: 'inline-flex', flexDirection: 'row', justifyContent: "space-evenly", alignItems: 'center'}}>
                    <div onClick={clickHandler} style={{width: '400px', height: '400px', cursor: "pointer"}}>
                        <h3 style={{textAlign: 'center', marginBottom: '30px'}}>My name is Bubba. Click on my picture to learn more about me!</h3>
                        <img name='bubba' style={{width: '400px', height: '300px', borderRadius: '4px'}} src='./img/dobermanheritage1.jpg' />
                    </div>
                    <div onClick={clickHandler} style={{width: '400px', height: '400px', cursor: "pointer"}}>
                        <h3 style={{textAlign: 'center', marginBottom: '30px'}}>My name is Jackie. Click on my picture to learn more about me!</h3>
                        <img name='jackie' style={{width: '400px', height: '300px', borderRadius: '4px'}} src='./img/dobermanheritage2.jpg' />
                    </div>
                    <div onClick={clickHandler} style={{width: '400px', height: '400px', cursor: "pointer"}}>
                        <h3 style={{textAlign: 'center', marginBottom: '30px'}}>My name is Wilson. Click on my picture to learn more about me!</h3>
                        <img name='wilson' style={{width: '400px', height: '300px', borderRadius: '4px'}} src='./img/dobermanheritage3.jpg' />
                    </div>
                </div>
            )
        }
    }
}


let domContainer = document.querySelector('#heritage-app');
ReactDOM.render(<HeritageSection />, domContainer);
