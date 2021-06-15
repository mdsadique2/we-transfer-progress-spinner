import globalState from 'Store/globalState';
import utils from 'Utilities/Utils';
import { DEMO_START, DEMO_CANCEL, DEMO_INITIALIZE} from './actionCreators';

export const UPLOAD_SPEED = 200;
export const TOTAL_RECIPIENTS = 5;
export const TOTAL_FILES = 200;
export const FILE_SIZE = 50;
export const TOTAL_FILE_SIZE = TOTAL_FILES * FILE_SIZE;
export const TOTAL_TIME_REQUIRED = TOTAL_FILES * UPLOAD_SPEED;
export const FILES_TRANSFERRED_COUNT = 0; 
export const SIZE_TRANSFERRED = 0; 
export const PROGRESS = 0; 

let iteration = 1;



let updateValues = (state) => {
  let newState = {...state}
  newState.filesTransferredCount = iteration;
  newState.sizeTransferred = iteration * FILE_SIZE;
  newState.totalTimeRequired = newState.totalTimeRequired - UPLOAD_SPEED;
  newState.progress = utils.calculatePercent(iteration * FILE_SIZE, TOTAL_FILE_SIZE);
  iteration = iteration + 1;
  return newState;
}

let initialValues = (state) => {
  iteration = 1;
  return {...state,
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
}

export default function DemoReducer(state = globalState.demoPageState, action) {
  switch (action.type) {
    case DEMO_START:
      return updateValues(state);
    case DEMO_CANCEL:
      return initialValues(state);
    case DEMO_INITIALIZE:
      return initialValues(state);
    default:
      return state;
  }
}
