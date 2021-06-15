import actionDispatchers from "Pages/Demo/actionDispatchers";
import actions from "Pages/Demo/actionCreators";
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore();
const dispatch = actionDispatchers(store.dispatch);

it('should dispatch the start action', () => {
    dispatch.startUpload();
    expect(store.getActions()[0].type).toBe(actions.startUpload().type);
});

it('should dispatch the cancel action', () => {
    dispatch.cancelUpload();
    expect(store.getActions()[1].type).toBe(actions.cancelUpload().type);
});

it('should dispatch the initialize action', () => {
    dispatch.initializeUpload();
    expect(store.getActions()[2].type).toBe(actions.initializeUpload().type);
});