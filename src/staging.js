import App from "./App"

function* newSecond(){
    while (App.state.running){
        yield App.state.time;
        App.setState({
            time: this.state.time + 1
        });
    }
}