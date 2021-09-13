//TODO：主菜单栏
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Entry from "@/components/menubar";
import {addFile} from "@/reducers/file/constants";
const MenuBar = (props) => (
    <Entry  {...props} />
);

MenuBar.propTypes = {

};

const mapStateToProps = (state) => {
    console.log(state);
    return {
       
    }
};

const mapDispatchToProps = (dispatch) => ({
    addFile:(params)=>dispatch(addFile({params}))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuBar);