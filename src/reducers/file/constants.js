import action from "@/reducers/action-method";

// 常量
export const ADD_FILE =  Symbol('ADD_FILE');
export const UPDATE_FILE =  Symbol('UPDATE_FILE');
export const DELETE_FILE =  Symbol('DELETE_FILE');

//动作
export const addFile =  action(ADD_FILE);
export const updateFile =  action(UPDATE_FILE);
export const deleteFile =  action(DELETE_FILE);