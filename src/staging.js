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



//componentWillReceiveProps()

  /*
  componentDidMount(){ // 1st attempt at kicking off the timer loop,
      // intending to re-render timer each time a second passes
      // need to optimize so other components don't re-render unnecessarily
    if (this.state.running && (this.state.time <= this.props.maxTime)){ // maximum time limit to prevent infinite loop
      // maxTime is passed as a prop in index.js
      setInterval(this.setState({   // re-render Timer every time another second has elapsed, until stop button is pressed.
        time: this.state.time + 1
      }), 1000)
    }
  }*/

  waitASec = async function() {
    setTimeout(this.setState({time: this.state.time + 1}), 990);
  }
/*
  handleClockTick(){ // asynchronous??
    do{

      this.waitASec().then(this.render());
      console.log("increment second function should have run");
      // BUG #1 PROBABLY IN WHILE LOOP, EVERYTHING SEEMS TO WORK UNTIL HERE:
    }while ((this.state.running) && (this.state.time <= this.props.maxTime));
      // prevent infinite loop by using the maxTime prop
      // wait 990 milliseconds before incrementing the seconds count
      // 990 is subject to change based on the time complexity/ performance of the app:
      // need to account for the milliseconds it takes to run the program
  }
  */