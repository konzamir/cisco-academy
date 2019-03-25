import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCourses } from '../../actions/courses';
import { setIsOnDetailsPage } from '../../actions/posts';
import { setLanguage } from '../../actions/global';

import { Link } from "react-router-dom";

class Courses extends Component {

  static propTypes = {
    courses: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

  constructor(props){
    super(props);
  }

  componentDidMount(){
      this.props.setIsOnDetailsPage(false);
      this.props.setLanguage(this.props.match.params.lang);
      this.props.getCourses();
  }

  render() {
    if (this.props.isLoading){
        return <h1>Loading...</h1>
    }
    if (this.props.courses.length == 0){
        return <h1>No courses yet!</h1>
    }
    return (
      <Fragment>
        <h1>Courses page</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            { this.props.courses.map(course => (
              <tr key={course.id}>
                <td>
                {course.name}
                </td>
                <td dangerouslySetInnerHTML={{__html: course.description}} />
              </tr>
            )) }
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
    courses: state.courses.courses,
    isLoading: state.courses.isLoading
});

export default connect(mapStateToProps, { 
  getCourses, setIsOnDetailsPage, setLanguage
})(Courses);