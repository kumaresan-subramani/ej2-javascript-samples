this.default = function () {
    var addClass = ej.base.addClass;
    var datetimepicker = new ej.calendars.DateTimePicker({
        renderDayCell: customDates,
        value: new Date('1/13/2017'),
        cssClass: 'e-customStyle'
    });
    datetimepicker.appendTo('#datetimepicker');

    function customDates(args) {
        var span;
        if (args.date.getDate() === 10) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], ['special', 'e-day', 'birthday']);
            args.element.setAttribute('title', 'Birthday !');
            args.element.appendChild(span);
        }
        if (args.date.getDate() === 15) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], ['special', 'e-day', 'farewell']);
            args.element.setAttribute('title', 'Farewell !');
            args.element.appendChild(span);

        }
        if (args.date.getDate() === 25) {
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], ['special', 'e-day', 'vacation']);
            args.element.setAttribute('title', 'Vacation !');
            args.element.appendChild(span);

        }

    }
};