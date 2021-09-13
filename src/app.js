import React from 'react';
import { AppContainer } from 'react-hot-loader';
import { compose } from "redux";
import AppStateHoc from "./lib/state_hoc";
import ModalHoc from "./lib/modal_hoc";
import HashStorageHOC from "./lib/hash-storage-hoc";
import Route from "./router";
//逻辑层，添加中间件和高阶组件
export default ()=>{
   const ComposedApp=compose(AppStateHoc,ModalHoc,HashStorageHOC)(Route);
   return <ComposedApp />
}