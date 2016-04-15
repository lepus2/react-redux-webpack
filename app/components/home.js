var React = require('react');
import {Link, State, Navigation} from 'react-router';

import { connect } from 'react-redux';

var Home = React.createClass({

  render() {
    if(this.props.loggedIn) return (
      <div id = 'home'>
        <h3>Welcome {this.props.info.name}!</h3><hr/>
        <p>Gender: {this.props.info.gender}</p>
        <p>Email: {this.props.info.email}</p>
        <p>Hometown: {this.props.info.hometown.name}</p>
        <p>Location: {this.props.info.location.name}</p><hr/>
        <h4>Educations</h4>
        {this.props.info.education.map(
            (edu,idx) =>
            <div key={idx}>
              <p>{edu.type} : {edu.school.name}</p>
              {edu.concentration? <span>Major: </span>:''}
              {edu.concentration? edu.concentration.map(
                  (major,i) =>
                  <span key={i}>{major.name}</span>
                ):''
              }
            </div>
          )
        }
        <hr/>
        <h4>Works</h4>
        {this.props.info.work.map(
            (workdata,idx) =>
            <p key={idx}>{workdata.employer.name}</p>
          )
        }
        <hr/>
        <h2>Likes</h2>
        {this.props.info.likes.data.map(
            (like,idx) =>
            <p key={idx}>{like.name}</p>
          )
        }
        <hr/>
        <h2>Photos</h2>
        {this.props.photos.map(
            (photo,idx) =>
            <img key={idx} src = {photo.images[0].source} height={200} width={300} />
          )
        }

      </div>
    );
    else return (
      <div id = 'home'>
        You need Login.
      </div>
    )
  }
});

const mapStateToProps = (state) => {

  return {
    loggedIn : state.fbReducer.loggedIn,
    info : state.infoReducer.info,
    photos: state.photoReducer.photos || []
  }
}

module.exports = connect(mapStateToProps)(Home);
