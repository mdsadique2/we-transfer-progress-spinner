import utils from 'Utilities/Utils';

it('should return falsy if number is not invalid', () => {
    let num = 150;
    let output = utils.isNumberInvalid(num);
    expect(output).toBeFalsy();
});

it('should return false if string cannot be changed to an invalid number', () => {
    let num = '150';
    let output = utils.isNumberInvalid(num);
    expect(output).toBeFalsy();
});

it('should return false if string can be changed to an invalid number', () => {
    let num = 'abc';
    let output = utils.isNumberInvalid(num);
    expect(output).toBeTruthy();
});


it('should return convert values in milliseconds to valid minutes and seconds string', () => {
    let minutes = 2;
    let seconds = 30;
    let milliseconds = ((minutes * 60) + seconds) * 1000;
    let output = utils.converMilliSecondsToMinutes(milliseconds);
    expect(output).toBe(`${minutes} minutes ${seconds} secs`);
});

it('should return only seconds value if it is less than a minute', () => {
    let minutes = 0;
    let seconds = 30;
    let milliseconds = ((minutes * 60) + seconds) * 1000;
    let output = utils.converMilliSecondsToMinutes(milliseconds);
    expect(output.trim()).toBe(`${seconds} secs`);
});


it('should return only milliseconds value if it is less 1000 seconds', () => {
    let milliseconds = 800;
    let output = utils.converMilliSecondsToMinutes(milliseconds);
    expect(output.trim()).toBe(`0.8 secs`);
});

it('should return "1 minute" as output', () => {
    let minutes = 1;
    let seconds = 0;
    let milliseconds = ((minutes * 60) + seconds) * 1000;
    let output = utils.converMilliSecondsToMinutes(milliseconds);
    expect(output.trim()).toBe(`${minutes} minute ${seconds} secs`);
});


it('should return empty string for invalid milliseconds value', () => {
    let milliseconds = "abc";
    let output = utils.converMilliSecondsToMinutes(milliseconds);
    expect(output.trim()).toBe('');
});


it('should return empty string for wrong inputs inputs', () => {
    let numerator = "abc";
    let dinominator = "abc";
    let output = utils.calculatePercent(numerator, dinominator);
    expect(output).toBe(null);
});

it('should return empty string for wrong numerator inputs', () => {
    let numerator = "abc";
    let dinominator = 100;
    let output = utils.calculatePercent(numerator, dinominator);
    expect(output).toBe(null);
});

it('should return empty string for wrong dinominator inputs', () => {
    let numerator = "abc";
    let dinominator = 100;
    let output = utils.calculatePercent(numerator, dinominator);
    expect(output).toBe(null);
});

it('should return correct output for correct inputs', () => {
    let numerator = 25;
    let dinominator = 100;
    let percent = (numerator * 100)/dinominator;
    let output = utils.calculatePercent(numerator, dinominator);
    expect(output).toBe(percent);
});


it('should return correct converted string for numeric MB value', () => {
    let mb = 2500;
    let output = utils.convertMbToGb(mb);
    expect(output.trim()).toBe('2.5 GBs');
});

it('should return correct converted MB string for numeric MB value less than 1000', () => {
    let mb = 900;
    let output = utils.convertMbToGb(mb);
    expect(output.trim()).toBe('900 MBs');
});

it('should return empty string for incorrect MB input', () => {
    let mb = `abc`;
    let output = utils.convertMbToGb(mb);
    expect(output.trim()).toBe('');
});

it('should return "1.0 GB" as output', () => {
    let mb = 1000;
    let output = utils.convertMbToGb(mb);
    expect(output.trim()).toBe('1.0 GB');
});