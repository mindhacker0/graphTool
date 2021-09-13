import React,{useEffect} from "react";
import Menu from "@/components/menu";
import {openFile} from "@/lib/utils";
function menuClick(LV,IND){
    console.log(LV,IND);
}
const Menubar = function({addFile,userMenuPath}){
    const configMenu = [{
        title:"文件",
        icon:"",
        bindEvent:openFile
    }];
    return <div>
        <Menu menuConfig={configMenu} menuPath={userMenuPath} onOpemMenu={menuClick} onClose={()=>{}}/>
    </div>
}

export default Menubar;