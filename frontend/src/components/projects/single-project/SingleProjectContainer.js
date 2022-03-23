import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { style } from "./singleProjectStyle";
import { updateProjectRating } from "../../../redux/features/projects/projectSlice";
import SingleProjectClicked from "./SingleProjectClicked";
import SingleProjectLoaded from "./SingleProjectLoaded";
import IconLink from "../../icon-link/IconLink";
import { FaGithub, FaLink } from "react-icons/fa";

class SingleProjectContainer extends Component {
  projectStyle;
  iconSize;

  constructor(props) {
    super();
    this.state = {
      descClicked: false,
      updatedRating: 0,
      projectRated: false,
      showModal: false,
    };
    this.projectStyle = style(this.props.deviceType);
    this.iconSize =
      this.props.deviceType === "mobile" || this.props.deviceType === "tablet"
        ? "4vw"
        : "1.5vw";
    console.log(props);
  }

  handleDescClick() {
    this.setState({ descClicked: !this.state.descClicked });
  }

  handleSubmit(event, values) {
    event.preventDefault();
    console.log(values);
    event.target.disabled = true;
    this.props.updateProjectRating(values);
    alert("Review was successfully submitted. Thank you for your response.");
    event.target.disabled = false;
    if (this.props.closeModalHandler) {
      this.props.closeModalHandler();
    }
  }

  renderContent() {
    if (this.state.descClicked) {
      return <SingleProjectClicked description={this.props.description} />;
    }
    return (
      <SingleProjectLoaded
        showRating={!this.props.showModal}
        onChange={this.props.onChangeRating}
        value={this.state.projectRated ? this.state.updatedRating : undefined}
        ratingLabel={
          this.state.projectRated ? "Rated" : "Care to rate this project?"
        }
        titleStyle={this.projectStyle.title}
        logoStyle={this.projectStyle.logo}
        name={this.props.name}
        image={this.props.image}
        closeModalHandler={this.props.closeRatingModal}
        id={this.props.id}
      />
    );
  }

  renderIcons() {
    return (
      <div>
        <div>
          {this.props.websiteURL ? (
            <IconLink
              icon={
                <FaLink size={this.iconSize} className="github-link-icon" />
              }
              URL={this.props.websiteURL}
            />
          ) : undefined}
        </div>
        <div>
          {this.props.gitHubURL ? (
            <IconLink
              icon={
                <FaGithub size={this.iconSize} className="github-link-icon" />
              }
              URL={this.props.gitHubURL}
            />
          ) : undefined}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="project-card" style={this.projectStyle.container}>
        {this.renderContent()}

        <button className="nw-button mb-4" onClick={this.handleDescClick}>
          {this.state.descClicked ? "Close Description" : "View Description"}
        </button>
        {this.renderIcons()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      updateProjectRating: updateProjectRating,
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return { deviceType: state.control.deviceType };
}

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(SingleProjectContainer);
