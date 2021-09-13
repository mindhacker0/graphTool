import { 
	ADD_FILE, 
	UPDATE_FILE,
	DELETE_FILE,
} from './constants';

const initialState = {
	fileList:[],//内容为File类型
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
        case ADD_FILE:
        state.fileList.push(payload.file);
        return {
            ...state
        }
        default:
			return state;
    }
}