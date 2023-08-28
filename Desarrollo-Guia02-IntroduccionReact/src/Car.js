class Car extends React.Component {
    constructor() {
        super();
        this.state =  {color: 'red'};
    }
    render() {
        return <h2>Hi, I am a{this.state.color} Car!</h2>
    }
}

function Car() {
    return <h2> Hi, I am also a Car!</h2>;
}

ReactDOM.render(<Car color="red" />, document.getElementById('root'));

class Garage extends React.Component {
    render(){
        return (
            <div>
                <h1>Whos lives in my Garage?</h1>
                <Car />
            </div>
        );
    }
}

ReactDOM.render(<Garage />, document.getElementById('root'));