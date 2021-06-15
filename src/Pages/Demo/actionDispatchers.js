import actions from './actionCreators'

const actionDispatchers = (dispatch) => {
    let actionsObj = {
        initializeUpload: () => {
            dispatch(actions.initializeUpload());
        },

        startUpload: () => {
            dispatch(actions.startUpload());
        },

        cancelUpload: () => {
            dispatch(actions.cancelUpload());
        }
    }
    return actionsObj;
}

export default actionDispatchers;