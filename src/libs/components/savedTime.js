import React from 'react';
import { default as Timer } from './timer';
import PropTypes from 'prop-types';

class SavedTime extends React.Component {
  constructor(props) {
    super(props);
    this.delRecord = this.delRecord.bind(this);
  }

  delRecord() {
    this.props.deleteLI(this.props.timeRecord.date); // calls a chain of methods all the way up to App
    // in order to delete this specific instance of <SavedTime> from App.state
  }

  render() {
    return (
      <>
        {
          <Timer
            timeElapsed={this.props.timeRecord.time}
            dateStamp={this.props.timeRecord.date}
          />
        }
        <button className={'bad-button'} onClick={this.delRecord}>&nbsp;X&nbsp;</button>
      </>
    );
  }
}

SavedTime.propTypes = {
  timeRecord: PropTypes.object.isRequired,
  deleteLI: PropTypes.func.isRequired,
};
export default SavedTime;
