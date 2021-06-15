import React, {useState, useEffect} from 'react';
import './style.css';

const SVG_SIZE = 150;
const SVG_PADDING = 3; //padding between SVG and spinner-circle

const SPINNER_RADIUS = (SVG_SIZE / 2) - SVG_PADDING;
const SPINNER_X_AXIS = SVG_SIZE / 2;
const SPINNER_Y_AXIS = SVG_SIZE / 2;
const SPINNER_STROKE_WIDTH = 6;


const SPINNER_CIRCUMFERENCE = Math.ceil((Math.PI * 2 * SPINNER_RADIUS));
const PROGRESS_FACTOR = SPINNER_CIRCUMFERENCE / 100;

const TEXT_CONTAINER_SIZE = SVG_SIZE - (2 * SPINNER_STROKE_WIDTH);
const TEXT_CONTAINER_POSITION = SPINNER_STROKE_WIDTH;

const CONTAINER_PADDING = 20;
const CONTAINER_SIZE = SVG_SIZE;


const Radialprogress = (props) => {

    let [progressReached, setProgressReached] = useState(0);
    let [progressPercent, setProgressPercent] = useState(0);


    const validateProgressPercent = () => {
        return progressPercent < 100
    }

    const updateProgressPercent = (progressValue) => {
        if (!validateProgressPercent(progressValue)) {
            return;
        }
        setProgressPercent(progressValue > 100 ? 100 : progressValue)
    }

    const updateProgressReached = (progressValue) => {
        if (!validateProgressPercent(progressValue)) {
           return
        }
        setProgressReached(
            progressValue * PROGRESS_FACTOR
        );
    }

    const spinProgressBar = () => {
        if(props.spinMode === false || progressPercent <= 0) {
            return false;
        }
        return true;
    }

    const showProgressValue = () => {
        if(props.showProgressValue === false) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        updateProgressPercent(props.currentProgress);
        updateProgressReached(props.currentProgress);
    }, [props.currentProgress])
    
    return (
            <section className="radial-progress-container" style={{
                 width: CONTAINER_SIZE + 'px',
                 height: CONTAINER_SIZE + 'px'
            }}>
                <svg width={SVG_SIZE} height={SVG_SIZE} className={spinProgressBar() ? 'spin' : ''}>
                    
                    <circle 
                        className="gutter"
                        fill="none"
                        r={SPINNER_RADIUS}
                        cx={SPINNER_X_AXIS}
                        cy={SPINNER_Y_AXIS}
                        strokeWidth={SPINNER_STROKE_WIDTH}
                    >
                    </circle>

                    <circle 
                        className="progress-bar"
                        fill="none"
                        r={SPINNER_RADIUS}
                        cx={SPINNER_X_AXIS}
                        cy={SPINNER_Y_AXIS}
                        strokeWidth={SPINNER_STROKE_WIDTH}
                        style = {{
                            "strokeDasharray": `${progressReached} ${SPINNER_CIRCUMFERENCE}`,
                            "strokeLinecap": progressPercent > 0 ? 'round' : '',
                        }}
                    >
                    </circle>
                </svg>

                <div className="progress-text-container" style = {{
                    width: TEXT_CONTAINER_SIZE + 'px',
                    height: TEXT_CONTAINER_SIZE + 'px',
                    top: TEXT_CONTAINER_POSITION + 'px',
                    left: TEXT_CONTAINER_POSITION + 'px',
                }}>
                    {
                        showProgressValue() && (
                            <div className="text-wrapper">
                                <span className="value">
                                    {progressPercent.toFixed()}
                                </span>
                                <span className="symbol">
                                    %
                                </span>
                            </div>
                        )
                    }
                </div>
            </section>
    );
}

export default Radialprogress;