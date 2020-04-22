// 创建action
//actionCreators是一个函数
import * as constants from './constants';
export const searchFocus = () =>({
    type: constants.SEARCH_FOCUS
});
export const searchBlur = () =>({
    type:constants.SEARCH_BLUR
});

