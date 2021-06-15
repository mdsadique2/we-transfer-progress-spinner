export const DEMO_START = 'DEMO_START';
export const DEMO_CANCEL = 'DEMO_CANCEL';
export const DEMO_INITIALIZE = 'DEMO_INITIALIZE';

const actions = {
    
    startUpload: () => {
        return {
            type: DEMO_START
        }
    },

    cancelUpload: () => {
        return {
            type: DEMO_CANCEL
        }
    },


    initializeUpload: () => {
        return {
            type: DEMO_INITIALIZE
        }
    },
  
    
};

export default actions;