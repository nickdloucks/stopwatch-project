import App from "./App"

function* newSecond(){
    if ((App.state.running) && (this.state.time <= this.props.maxTime)){
        yield App.state.time;
        App.setState({
            time: this.state.time + 1
        });
    }
}

//////

function waitASec() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`current time = ${App.state.time}`);
      }, 990);
    });
}
  
async function addNewSec() {
    console.log('calling');
    const result = await waitASec();
    console.log(result);
    result.then(setState({
        time: App.state.time + 1
    }))
}  

asyncCall();