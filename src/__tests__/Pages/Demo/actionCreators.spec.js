import actions, {DEMO_START, DEMO_CANCEL, DEMO_INITIALIZE} from "Pages/Demo/actionCreators";

it('should return the start action', () => {
    let action = actions.startUpload();
    expect(action.type).toBe(DEMO_START);
});

it('should return the initialize action', () => {
    let action = actions.initializeUpload();
    expect(action.type).toBe(DEMO_INITIALIZE);
});

it('should return the cancel action', () => {
    let action = actions.cancelUpload();
    expect(action.type).toBe(DEMO_CANCEL);
});