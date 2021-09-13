//主界面入口
import { css } from 'linaria';
import React from 'react';
import MenuBar from '@/views/menuBar';
const wrapStyle = css`width:100%;height:100vh;`;
export default ()=>(<div className={wrapStyle}>
    <MenuBar />
</div>)