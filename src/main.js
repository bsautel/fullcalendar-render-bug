import {Calendar} from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/bootstrap/main.css';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {icon} from "@fortawesome/fontawesome-svg-core";

document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const calendarElement = document.createElement('div');
    body.appendChild(calendarElement);

    const calendar = new Calendar(calendarElement, {
        plugins: [timeGridPlugin, bootstrapPlugin],
        themeSystem: 'bootstrap',
        viewSkeletonRender() {
            renderIcon(calendarElement, faChevronLeft);
            renderIcon(calendarElement, faChevronRight);
        },
        eventSources: [
            () => {
                return new Promise(resolve => {
                    let event = {start: new Date(), title: 'hello'};
                    setTimeout(() => resolve([event]), 1000);
                })
            }
        ]
    });

    calendar.render();
});

function renderIcon(element, faIcon) {
    const elements = element.querySelectorAll('.fa-' + faIcon.iconName);
    const html = icon(faIcon).html.join('');
    elements.forEach(element => {
        element.outerHTML = html;
    });
}
