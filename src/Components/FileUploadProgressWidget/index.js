import React, {useState, useEffect} from 'react';
import './style.css';
import './style-mobile.css';

import RadialProgress from 'BasicComponents/RadialProgress';
import Card from 'BasicComponents/Card';
import { Trans } from 'react-i18next'

import utils from 'Utilities/Utils.js'


const FileUploadProgressWidget = (props) => {
    const {totalFilesCount, totalRecipientsCount, totalFilesUploaded} = props;
    let {timeLeft, currentProgressPercent} = props;

    const totalFileSize = utils.convertMbToGb(props.totalFileSize);
    const fileUploadProgressSize = utils.convertMbToGb(props.fileUploadProgressSize);

    const [timeLeftState, setTimeLeftState] = useState(utils.converMilliSecondsToMinutes(timeLeft));
    const [currentProgressPercentState, setCurrentProgressPercentState] = useState(0);
    const [buttonToggleState, setButtonToggleState] = useState(true);

    const updateValues = () => {
        if (currentProgressPercent !== currentProgressPercentState) {
            setCurrentProgressPercentState(currentProgressPercent);
        }

        if (timeLeft !== timeLeftState) {
            let conversion = utils.converMilliSecondsToMinutes(timeLeft);
            setTimeLeftState(conversion);
        }

        
    }

    const startButtonMethod = () => {
        props.startButtonMethodToCall();
        setButtonToggleState(!buttonToggleState);
    }

    const cancelButtonMethod = () => {
        props.cancelButtonMethodToCall();
        setButtonToggleState(!buttonToggleState);
    }

    const isSpinAllowed = () => {
        return !(props.stopSpinner === true)
    }

    useEffect(updateValues,[currentProgressPercent, timeLeft])

    return (
        <Card className="flex flex-jc-center flex-dir-column spinner-demo-card">
            <section className="flex flex-center spinner-row">
                <RadialProgress currentProgress={currentProgressPercentState} spinMode={isSpinAllowed()}/>
            </section>

            <section className="flex flex-jc-center flex-dir-column message-row">
                <div className="message-header">
                    <Trans i18nKey="labels.transferring" >
                        Transferring
                    </Trans>...
                </div>
                
                <div className="message-content">
                    <Trans i18nKey="demoPage.sendingText" values={{totalFilesCount, totalRecipientsCount}}>
                        Sending <a href="#">totalFilesCount files to totalRecipientsCount recipients.</a>
                    </Trans>
                    <br/>
                   
                    <Trans i18nKey="demoPage.uploadedCountText" values={{fileUploadProgressSize, totalFileSize}}>
                        fileUploadProgressSize of totalFileSize uploaded
                    </Trans>
                    <br/>
                    <span key={'text-line-3'} className="time-left">
                        <Trans i18nKey="demoPage.timeLeft" values={{timeLeftState}}>
                            timeLeftState remaining
                        </Trans>
                    </span>
                    <br/>
                </div>
            </section>

            <section className={`flex flex-jc-center button-action-row ${timeLeft > 0 ? 'in-progress' : 'completed'}`}>
                {buttonToggleState && (
                    <button key={'button-start'} className="capsule start-button" onClick={startButtonMethod}>
                        <Trans i18nKey="labels.start" >
                            Start
                        </Trans>
                    </button>)
                }

                {!buttonToggleState && (
                    <button className="button-secondary capsule cancel-button" onClick={cancelButtonMethod}>
                        <Trans i18nKey="labels.cancel">
                            Cancel
                        </Trans>
                    </button>)
                }
                
                <div className="flex finished-block">
                    <Trans i18nKey="labels.done">
                        <strong>Done!</strong>
                    </Trans>
                </div>
            </section>
        </Card>
    );
}

export default FileUploadProgressWidget;