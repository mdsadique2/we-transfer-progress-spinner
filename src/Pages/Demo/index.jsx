import React, { Component } from 'react';
import './style.css';
import './style-mobile.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import actionDispatchers from './actionDispatchers';
import { Trans, withTranslation } from 'react-i18next'
import Card from 'BasicComponents/Card';
import Loader from 'BasicComponents/Loader';
import FileUploadProgressWidget from 'Components/FileUploadProgressWidget'
import utils from 'Utilities/Utils';


export class Demo extends Component {
    static STATE_UPLOAD_SPEED = 200
    constructor(props) {
        super(props);
        this.timer = null;
        this.reduxTimer = null;
        this.totalRecipientsCount = 5;
        this.totalFilesCount = 100;
        this.fileSize = 50;
        this.totalFileSize = this.totalFilesCount * this.fileSize;

        this.state = {
            totalTimeRequired: this.totalFilesCount * Demo.STATE_UPLOAD_SPEED,
            filesTransferred: 0 ,
            sizeTransferred: 0,
            progress: 0,
        }

        this.props.initializeUpload();
    }

    resetState = () => {
        clearInterval(this.timer);
        this.setState({
            filesTransferred: 0,
            sizeTransferred: 0,
            progress: 0,
            totalTimeRequired: this.totalFilesCount * Demo.STATE_UPLOAD_SPEED
        });
    }

    
    startTransfer = () => {
        let i = 0;
        this.timer = setInterval(() => {
            i = i + 1;
            this.setState({
                filesTransferred: i,
                sizeTransferred: i * this.fileSize,
                progress: utils.calculatePercent(i*this.fileSize, this.totalFileSize),
                totalTimeRequired: this.state.totalTimeRequired - Demo.STATE_UPLOAD_SPEED
            }, () => {
                if (this.state.filesTransferred === this.totalFilesCount) {
                    clearInterval(this.timer);
                }
            })
        }, Demo.STATE_UPLOAD_SPEED);
    }


    startReduxTransfer = () => {
        let {totalFiles, uploadSpeed} = this.props.demoStateObj;
        this.reduxTimer = setInterval(() => {
            let {filesTransferredCount} = this.props.demoStateObj;
            if (filesTransferredCount >= totalFiles) {
                clearInterval(this.reduxTimer);
                return;
            }
            this.props.startUpload();
        }, uploadSpeed);
    }

    cancelReduxTransfer = () => {
        clearInterval(this.reduxTimer);
        this.props.cancelUpload();
    }

    render() {
        let { totalRecipients, totalFiles, fileSize, totalFileSize, 
            totalTimeRequired, filesTransferredCount, sizeTransferred, progress } = this.props.demoStateObj;
       
        return (
            <section className="page demo-page">
                <div className="flex widgets-container-row">
                    <div className="column">
                        <ul>
                            <li>
                                <Trans i18nKey="demoPage.usingReactState">
                                    Using React state to show progress
                                </Trans>
                            </li>
                            <li>
                                <Trans i18nKey="demoPage.progressWillSpin">
                                    Progress bar will spin
                                </Trans>
                            </li>
                        </ul>
                        <FileUploadProgressWidget 
                            totalFileSize = {this.totalFileSize}
                            totalFilesCount = {this.totalFilesCount}
                            totalFilesUploaded = {this.state.filesTransferred}
                            totalRecipientsCount = {this.totalRecipientsCount}
                            fileUploadProgressSize = {this.state.sizeTransferred}
                            timeLeft = {this.state.totalTimeRequired}
                            currentProgressPercent = {this.state.progress}
                            startButtonMethodToCall = {this.startTransfer}
                            cancelButtonMethodToCall = {this.resetState}
                        />
                    </div>

                    {
                        (totalFiles !== undefined) && (
                            <div className="column">
                                <ul>
                                    <li>
                                        <Trans i18nKey="demoPage.usingReduxState">
                                            Using redux state to show progress
                                        </Trans>
                                    </li>
                                    <li>
                                        <Trans i18nKey="demoPage.progressWillNotSpin">
                                            Progress bar will not spin
                                        </Trans>
                                    </li>
                                </ul>
                                <FileUploadProgressWidget 
                                    stopSpinner = {true}
                                    totalFileSize = {totalFileSize}
                                    totalFilesCount = {totalFiles}
                                    totalFilesUploaded = {filesTransferredCount}
                                    totalRecipientsCount = {totalRecipients}
                                    fileUploadProgressSize = {sizeTransferred}
                                    timeLeft = {totalTimeRequired}
                                    currentProgressPercent = {progress}
                                    startButtonMethodToCall = {this.startReduxTransfer}
                                    cancelButtonMethodToCall = {this.cancelReduxTransfer}
                                />
                            </div>
                        )
                    }
                   

                    <div className="column">
                        <ul>
                            <li>
                                <Trans i18nKey="demoPage.progressBarToLoader">
                                    Progress-bar loader was changed to a loader component
                                </Trans>
                            </li>
                            <li>
                                <Trans i18nKey="demoPage.progressBarToLoaderApiUse">
                                    Can be used as loading spinner during API calls
                                </Trans>
                            </li>
                        </ul>
                        <Card className="flex flex-center loader-container">
                            <Loader />
                        </Card>
                    </div>
                </div>
                
            </section>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        demoStateObj: state.demoPageState
    }
}
  
const mapDispatchToProps = actionDispatchers;
  
export default withTranslation()(compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Demo));