import React from 'react';
import { connect } from 'react-redux';
import { setSortBy } from "../../../../redux/actions/sortActions";
import Sort from "./Sort";

const mapDispatchToProps = dispatch => ({
    setSortBy: payload => dispatch(setSortBy(payload)),
});

export default connect(null, mapDispatchToProps)(Sort);
