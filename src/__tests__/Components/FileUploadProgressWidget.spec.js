import React from 'react';
import FileUploadProgressWidget from 'Components/FileUploadProgressWidget';
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() });

let uploadSpeed = 200;
let totalFilesCount = 100;
let filesTransferred = 0;
let fileSize = 50;
let totalRecipientsCount = 5;
let sizeTransferred = 0;
let totalTimeRequired = totalFilesCount * uploadSpeed;
let progress = 0;
let totalFileSize = totalFilesCount * fileSize

it('should render the component', () => {
    const wrapper = mount( <FileUploadProgressWidget 
        totalFileSize = {totalFileSize}
        totalFilesCount = {totalFilesCount}
        totalFilesUploaded = {filesTransferred}
        totalRecipientsCount = {totalRecipientsCount}
        fileUploadProgressSize = {sizeTransferred}
        timeLeft = {totalTimeRequired}
        currentProgressPercent = {progress}/>)

    expect(wrapper.find(FileUploadProgressWidget).length).toBe(1);
});


it('should update changes when start button is clicked', () => {
    const mockStartMethod = jest.fn();
    const mockCancelMethod = jest.fn();
    const wrapper = mount( <FileUploadProgressWidget 
        totalFileSize = {totalFileSize}
        totalFilesCount = {totalFilesCount}
        totalFilesUploaded = {filesTransferred}
        totalRecipientsCount = {totalRecipientsCount}
        fileUploadProgressSize = {sizeTransferred}
        timeLeft = {totalTimeRequired}
        currentProgressPercent = {progress}
        startButtonMethodToCall = {mockStartMethod}
        cancelButtonMethodToCall = {mockCancelMethod}
    />)
    const startButton = wrapper.find("button").at(0);
    expect(wrapper.find(FileUploadProgressWidget).length).toBe(1);
    expect(wrapper.find("button").length).toBe(1);
    expect(startButton.props().className).toContain("start-button");
    startButton.simulate('click');
    
    const cancelbutton = wrapper.find("button").at(0);
    expect(cancelbutton.props().className).toContain("cancel-button");
    cancelbutton.simulate('click');

    expect(mockStartMethod).toBeCalledTimes(1);
    expect(mockCancelMethod).toBeCalledTimes(1);
});