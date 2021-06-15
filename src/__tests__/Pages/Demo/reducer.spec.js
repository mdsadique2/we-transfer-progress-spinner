import DemoReducer,
{ UPLOAD_SPEED, TOTAL_RECIPIENTS, TOTAL_FILES, FILE_SIZE, SIZE_TRANSFERRED,
TOTAL_FILE_SIZE, TOTAL_TIME_REQUIRED, FILES_TRANSFERRED_COUNT, PROGRESS} from "Pages/Demo/reducer";
import actions from "Pages/Demo/actionCreators";
import utils from 'Utilities/Utils';

it('should set initial state', () => {
    const action = actions.initializeUpload();
    const initialState = undefined;
    const nextState = DemoReducer(initialState, action);

    expect(nextState.uploadSpeed).toBe(UPLOAD_SPEED);
    expect(nextState.totalRecipients).toBe(TOTAL_RECIPIENTS);
    expect(nextState.totalFiles).toBe(TOTAL_FILES);
    expect(nextState.fileSize).toBe(FILE_SIZE);
    expect(nextState.totalFileSize).toBe(TOTAL_FILE_SIZE);
    expect(nextState.totalTimeRequired).toBe(TOTAL_TIME_REQUIRED);
    expect(nextState.filesTransferredCount).toBe(FILES_TRANSFERRED_COUNT);
    expect(nextState.sizeTransferred).toBe(SIZE_TRANSFERRED);
    expect(nextState.progress).toBe(PROGRESS);
});


it('should re-set initial state on cancel action', () => {
    const action = actions.cancelUpload();
    const initialState = undefined;
    const nextState = DemoReducer(initialState, action);

    expect(nextState.uploadSpeed).toBe(UPLOAD_SPEED);
    expect(nextState.totalRecipients).toBe(TOTAL_RECIPIENTS);
    expect(nextState.totalFiles).toBe(TOTAL_FILES);
    expect(nextState.fileSize).toBe(FILE_SIZE);
    expect(nextState.totalFileSize).toBe(TOTAL_FILE_SIZE);
    expect(nextState.totalTimeRequired).toBe(TOTAL_TIME_REQUIRED);
    expect(nextState.filesTransferredCount).toBe(FILES_TRANSFERRED_COUNT);
    expect(nextState.sizeTransferred).toBe(SIZE_TRANSFERRED);
    expect(nextState.progress).toBe(PROGRESS);
});


it('should update next state on start action', () => {
    const action = actions.startUpload();
    const initialState = {
        uploadSpeed: UPLOAD_SPEED,
        totalRecipients: TOTAL_RECIPIENTS,
        totalFiles: TOTAL_FILES,
        fileSize: FILE_SIZE,
        totalFileSize: TOTAL_FILE_SIZE,
        totalTimeRequired: TOTAL_TIME_REQUIRED,
        filesTransferredCount: FILES_TRANSFERRED_COUNT,
        sizeTransferred: SIZE_TRANSFERRED,
        progress: PROGRESS
    };
    const nextState = DemoReducer(initialState, action);

    expect(nextState.uploadSpeed).toBe(UPLOAD_SPEED);
    expect(nextState.totalRecipients).toBe(TOTAL_RECIPIENTS);
    expect(nextState.totalFiles).toBe(TOTAL_FILES);
    expect(nextState.fileSize).toBe(FILE_SIZE);
    expect(nextState.totalFileSize).toBe(TOTAL_FILE_SIZE);
    expect(nextState.totalTimeRequired).toBe(initialState.totalTimeRequired - UPLOAD_SPEED);
    expect(nextState.filesTransferredCount).toBe(FILES_TRANSFERRED_COUNT + 1);
    expect(nextState.sizeTransferred).toBe((SIZE_TRANSFERRED + 1)*FILE_SIZE);
    expect(nextState.progress).toBe(utils.calculatePercent((FILES_TRANSFERRED_COUNT + 1) * FILE_SIZE, TOTAL_FILE_SIZE));
});
