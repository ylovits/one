
/**
 * Storing DOM elements
 */
const dateInputs = document.getElementById("dateInputs");
const start = document.getElementById("start");
const end = document.getElementById("end");
const button = document.getElementById("button");
const result = document.getElementById("result");
const daysBetween = document.getElementById("daysBetween");

/**
 * Show/hide result UI element
 */
const showResult = (bool) => {
    bool ? result.classList.remove('hide') : result.classList.add('hide');
}

/**
 * Handle form submission
 */
const handleSubmit = (event) => {
    event.preventDefault();
    daysInBetween();
}

/**
 * Returns the number of days between the selected dates or zero if the dates have no days between them 
 */
const renderDaysInBetween = () => {
    return (Math.max((end.valueAsNumber - start.valueAsNumber) / (1000 * 60 * 60 * 24)) - 1) >= 0
    ? Math.max((end.valueAsNumber - start.valueAsNumber) / (1000 * 60 * 60 * 24)) - 1
    : 0
}

/**
 * Sets the calculated days in the HTML and calls the function that shows the UI element
 */
const daysInBetween = () => {
    daysBetween.innerHTML = `${
        renderDaysInBetween()
    }`;
    showResult(true);
}

/**
 * Handles changes on the start date input
 */
const handleChangeStart = (e) => {
    validateInputs();
    end.min = e.currentTarget.value
}

/**
 * Handles changes on the end date input
 */
const handleChangeEnd = (e) => {
    validateInputs();
    start.max = e.currentTarget.value
}

/**
 * TypeChecks the values and enables the submission button
 */
const validateInputs = () => {
    showResult(false);
    const startValue = start.valueAsNumber;
    const endValue = end.valueAsNumber;
    if (typeof startValue === 'number' && typeof endValue === 'number') {
        if (startValue < endValue) {
            button.disabled = false;
        }
    } else {
        console.error("Please input two valid dates");
    }
}

/**
 * Event listener for the form submission
 */
dateInputs.addEventListener('submit', handleSubmit);