//get triangle area

document.getElementById('triangle-btn-calculate').addEventListener('click', function () {

    
    const base = getInputValue('base-field');
    
    const height = getInputValue('height-field');
    const baseAndHeight = 0.5 * base * height;
   setTextFieldValue('triangle-area',baseAndHeight);
    

});

////rectangle area

document.getElementById('rectangle-btn-calculate').addEventListener('click', function () {
   
    const width =getInputValue('width-field') ;

    const length = getInputValue('length-field')

    const widthAndLength = width * length;
    setTextFieldValue('rectangle-area',widthAndLength);
});

//parallelogram area

document.getElementById('parallelogram-btn-calculate').addEventListener('click',function(){
    const base2 = getInputValue('base2-field');

    const height2 = getInputValue('height2-field');

    const base2AndHeight2 = base2 * height2;
    setTextFieldValue('parallelogram-area',base2AndHeight2)
    
});


//rhombus area
document.getElementById('rhombus-btn-calculate').addEventListener('click',function(){
    const direction1 = getInputValue('direction1-field');

    const direction2 = getInputValue('direction2-field');

    const rhombus = 0.5 * direction1 * direction2;

    setTextFieldValue('rhombus-area',rhombus);
});

//pentagon area

document.getElementById('pentagon-btn-calculate').addEventListener('click',function(){
    const perimeter = getInputValue('perimeter-field');
    const apothem = getInputValue('apothem-field');

    const pentagon = perimeter * apothem;
     setTextFieldValue('pentagon-area',pentagon);
})

//eclipse area

document.getElementById('ellipse-btn-calculate').addEventListener('click',function(){
    const xAxis = getInputValue('x-field');
    const yAxis = getInputValue('y-field');

    const eclipse = 3.14 * xAxis * yAxis;
    const eclipseToFixed = eclipse.toFixed(2);
    setTextFieldValue('ellipse-area',eclipseToFixed);
});
