import React, { Component } from "react";
import BodySection from "./BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


export class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection {...this.props} />
      </div>
    );
  }
}
//inline styling
const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: "100px",
  },
});

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default BodySectionWithMarginBottom;
