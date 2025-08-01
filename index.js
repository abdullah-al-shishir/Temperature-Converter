function converter(){
    const HTML=
    `<div class="temperature-container">
        <h2>Temperature Converter</h2>

        <div class="input-group">
            <span>Temperature: </span>
            <input id="temperatureInput" type="number" placeholder="Enter Temperature">
        </div>

        <div class="temperature-converter">
            <span>From:</span>
            <select name="temperature" id="from-temperature-list">
                <option value="celsius">Celsius</option>
                <option value="fahrenheit">Fahrenheit</option>
                <option value="kelvin">Kelvin</option>
            </select>

            <span>To:</span>
            <select name="temperature" id="to-temperature-list">
                <option value="fahrenheit">Fahrenheit</option>
                <option value="celsius">Celsius</option>
                <option value="kelvin">Kelvin</option>
            </select>
        </div>

        <button id="convert-btn">Convert</button>

        <div class="selecText">
            <p id="selectedText">Enter a value and select units to convert!</p>
        </div>
    </div>`
    document.body.insertAdjacentHTML('beforeend',HTML);
}
converter();


const temperatureInput=document.getElementById('temperatureInput')
const fromUnitSelect = document.getElementById('from-temperature-list');
const toUnitSelect = document.getElementById('to-temperature-list');
const convertButton=document.getElementById('convert-btn');
const resultArea = document.getElementById('selectedText');


function convertTemperature(value,fromUnit,toUnit){
    let celsius;
    switch (fromUnit) {
        case 'celsius':
            celsius=value;               
            break;
        case 'fahrenheit':
            celsius=(value - 32) * 5 / 9;          
            break;
        case 'kelvin':
            celsius=value - 273.15;          
            break;     
        default:
            return null;
    }

    switch (toUnit) {
        case 'celsius':
            return celsius;
        case 'fahrenheit':
            return (celsius * 9 / 5) + 32;    
        case 'kelvin':
            return celsius + 273.15;
        default:
            return null;
    }
}
function getElementById(unit){
    switch (unit){
        case 'celsius':
            return '°C';
        case 'fahrenheit':
            return '°F';
        case 'kelvin':
            return 'k';        
    }
}

function handleConversion(){
    const inputValue=parseFloat(temperatureInput.value);
    const fromUnit=fromUnitSelect.value;
    const toUnit=toUnitSelect.value;

    if(fromUnit===toUnit){
        resultArea.textContent=`Result: ${inputValue} ${getElementById(toUnit)}`;
    }

    convertedValue=convertTemperature(inputValue,fromUnit,toUnit);

    if (convertedValue !== null) {
        resultArea.textContent = `Result: ${convertedValue.toFixed(2)} ${getElementById(toUnit)}`;
    }
        

}
convertButton.addEventListener('click', handleConversion);