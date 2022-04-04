import React, { Component } from "react";
import { connect } from "react-redux";
import { parseBool } from "../../utils/parseBool";
import BlogContent from "./BlogContent";
import BlogSidebar from "./BlogSidebar";

/**
 * @class BlogContainer
 * contains state for the blog sidebar and blog content components.
 * @author Nazere Wright
 * @props selectedArticleId - The id of the article that has been selected for detail view.
 */
class BlogContainer extends Component {
  render() {
    return (
      <div id="blog-container">
        {!this.props.selectedArticleId && (
          <div className="d-flex justify-content-center text-white mb-1">
            <h1>Articles</h1>
          </div>
        )}
        {!this.props.selectedArticleId && (
          <BlogSidebar
            handleChange={this.handleChange}
            resetFunction={this.resetFilter}
          />
        )}

        <BlogContent
          nameFilter={this.state.articleName.toLowerCase()}
          authorFilter={this.state.author.toLowerCase()}
        />
      </div>
    );
  }

  /**
   * @function handleChange - dynamically changes the property value for any value in the component state of BlogContainer.
   * @param {String} property The desired property to be updated in the state.
   * @param {any} value The new state value
   */
  handleChange(property, value) {
    if (value === "true" || value === "false") {
      value = parseBool(value);
    }
    if (typeof value === "string") {
      value.toLowerCase();
    }
    this.setState({ [property]: value });
  }

  initialState = {
    articleName: "",
    author: "",
    views: false,
    date: false,
  };

  /**
   * @function resetFilter -- Reset all values in the BlogFilter form.
   * @param {*} event the event object fired
   * @returns {void} if no event is found
   */
  resetFilter(event) {
    if (!event) return;
    event.preventDefault();
    const form = event.target;
    // check if this is a form...
    if (!form.reset) return;
    form.reset();
    this.setState(this.initialState);
  }

  constructor(props) {
    super();
    this.state = this.initialState;
    this.handleChange = this.handleChange.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
  }
}

function mapStateToProps(state) {
  const { blog } = state;
  const { selectedArticleId } = blog;
  return { selectedArticleId };
}

export default connect(mapStateToProps)(BlogContainer);
