import bindAll from "lodash.bindall";
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
const HashStorageHOC = function (WrappedComponent) {
  class HashStorageComponent extends React.Component {
    constructor(props) {
      super(props);
     
    }
    componentDidMount() {
  
    }
    componentWillUnmount() {
    
    }
    handleHashMessage(event) {
      if (event.origin !== "https://token.mimadao.com") return;
      try {
        var data = JSON.parse(event.data);
        if (data.op === "W") {
          //写操作
          shequremoteStorage.setValue(
            data.key,
            JSON.stringify(data.value),
            () => {}
          );
        } else if (data.op === "D") {
          //删除
          shequremoteStorage.delValue(data.key, () => {});
        } else if (data.op === "X") {
          //清空
          shequremoteStorage.clearValue(() => {});
        } else {
          //默认：读操作
          shequremoteStorage.getValue(data.key, (key, value) => {});
        }
      } catch (e) {
        // event.source.postMessage(event.data, event.origin);
      }
    }
    handleHashChange(e) {
      
    }
    render() {
      const {
        /* eslint-enable no-unused-vars */
        ...componentProps
      } = this.props;
      return <WrappedComponent {...componentProps} />;
    }
  }
  HashStorageComponent.propTypes = {
    OnSetUserLogin: PropTypes.func,
    OnSetUserSession: PropTypes.func,
  };

  const mapStateToProps = (state) => ({});

  const mapDispatchToProps = (dispatch) => ({
    OnSetUserLogin: (isLogin) => {
      dispatch(setUserLogin({isLogin}));
    },
    OnSetUserSession: (session) => {
      dispatch(setUserSession({session}));
    },
  });
  // Allow incoming props to override redux-provided props. Used to mock in tests.
  const mergeProps = (stateProps, dispatchProps, ownProps) =>
    Object.assign({}, stateProps, dispatchProps, ownProps);
  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
  )(HashStorageComponent);
};

export { HashStorageHOC as default };
