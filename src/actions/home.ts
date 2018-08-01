import * as constants from '../constants/actionsTypes';
import FetchHttp from '../fetch/http';

export const asyncAction = () => {
  return async (dispatch: any, getState: any) => {
    const easyData = await new FetchHttp().get("/service/list", null);
    dispatch({
      type: constants.CHANGE_NAME,
      data: easyData
    });
  }
}
