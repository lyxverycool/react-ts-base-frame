/**
 * @component reducers
 * @description Home Reducer 高阶函数
 * @time 2018/1/9
 * @author ***
 */

import * as Constants from '../constants/actionsTypes';

// 初始化
const asyncReducer = (state = [], action: any) => {
    switch(action.type) {
        case Constants.CHANGE_NAME:
            return action.data;
        default:
            return state;
    }
}

export { asyncReducer };