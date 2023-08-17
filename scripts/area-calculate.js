//get triangle area

document.getElementById('triangle-btn-calculate').addEventListener('click', function () {


    const base = getInputValue('base-field');

    const height = getInputValue('height-field');
    const baseAndHeight = 0.5 * base * height;

    //validation

    if (isNaN(baseAndHeight)) {
        alert('Please Input Number!')
        return;
    }

    setTextFieldValue('triangle-area', baseAndHeight);


    //add to calculation entry
    addToCalculationEntry('Triangle',baseAndHeight);


});

////rectangle area

document.getElementById('rectangle-btn-calculate').addEventListener('click', function () {

    const width = getInputValue('width-field');

    const length = getInputValue('length-field')

    const widthAndLength = width * length;
    //validation

    if (isNaN(widthAndLength)) {
        alert('Please Input Number!')
        return;
    }
    setTextFieldValue('rectangle-area', widthAndLength);

    //add to calculation entry
    addToCalculationEntry('Rectangle',widthAndLength);
});

//parallelogram area

document.getElementById('parallelogram-btn-calculate').addEventListener('click', function () {
    const base2 = getInputValue('base2-field');

    const height2 = getInputValue('height2-field');

    const base2AndHeight2 = base2 * height2;

    if (isNaN(base2AndHeight2)) {
        alert('Please Input Number!')
        return;
    }

    setTextFieldValue('parallelogram-area', base2AndHeight2);

    //add to calculation entry
    addToCalculationEntry('Parallelogram',base2AndHeight2);

});


//rhombus area
document.getElementById('rhombus-btn-calculate').addEventListener('click', function () {
    const direction1 = getInputValue('direction1-field');

    const direction2 = getInputValue('direction2-field');

    const rhombus = 0.5 * direction1 * direction2;

    if (isNaN(rhombus)) {
        alert('Please Input Number!')
        return;
    }

    setTextFieldValue('rhombus-area', rhombus);

    //add to calculation entry
    addToCalculationEntry('Rhombus',rhombus);
});

//pentagon area

document.getElementById('pentagon-btn-calculate').addEventListener('click', function () {
    const perimeter = getInputValue('perimeter-field');
    const apothem = getInputValue('apothem-field');

    const pentagon = perimeter * apothem;

    if (isNaN(pentagon)) {
        alert('Please Input Number!')
        return;
    }
    setTextFieldValue('pentagon-area', pentagon);

    //add to calculation entry
    addToCalculationEntry('Pentagon',pentagon);
})

//eclipse area

document.getElementById('ellipse-btn-calculate').addEventListener('click', function () {
    const xAxis = getInputValue('x-field');
    const yAxis = getInputValue('y-field');

    const eclipse = 3.14 * xAxis * yAxis;
    const eclipseToFixed = eclipse.toFixed(2);

    if (isNaN(eclipse)) {
        alert('Please Input Number!')
        return;
    }

    setTextFieldValue('ellipse-area', eclipseToFixed);

    //add to calculation entry
    addToCalculationEntry('Eclipse',eclipseToFixed);
});
