document.addEventListener('DOMContentLoaded', function () {
    const dateRangeInput = document.getElementById('date-range');

    // Initialize Flatpickr date range picker
    const datePicker = flatpickr(dateRangeInput, {
        mode: 'range', // Allows selecting a date range
        dateFormat: 'Y-m-d', // Format for selected dates
        onClose: function (selectedDates) {
            // Handle date selection
            if (selectedDates.length === 2) {
                const fromDate = selectedDates[0].toLocaleDateString();
                const toDate = selectedDates[1].toLocaleDateString();
                dateRangeInput.value = `${fromDate} - ${toDate}`;
            } else {
                dateRangeInput.value = '';
            }
        }
    });
});
