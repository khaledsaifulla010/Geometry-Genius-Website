function addToCalculationEntry (areaType,area){
    console.log(areaType+ ' ' + area);

    const calculationEntry = document.getElementById('calculation-entry');

    const childCount = calculationEntry.childElementCount

    const p = document.createElement('p');
    p.classList.add('my-4');

    // p.innerHTML = areaType+ ' = ' +area;
    //use template string

    p.innerHTML = `${childCount + 1}. ${areaType} = ${area} cm<sup>2</sup> <button class = "btn btn-success btn-sm">Covert</button>`
    calculationEntry.appendChild(p);
}