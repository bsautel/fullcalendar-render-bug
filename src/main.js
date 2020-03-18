import {Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/bootstrap/main.css';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {icon} from "@fortawesome/fontawesome-svg-core";

document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');
    const calendarElement = document.createElement('div');
    body.appendChild(calendarElement);

    const calendar = new Calendar(calendarElement, {
        plugins: [dayGridPlugin, bootstrapPlugin],
        themeSystem: 'bootstrap',
        viewSkeletonRender() {
            renderIcon(calendarElement, faChevronLeft);
            renderIcon(calendarElement, faChevronRight);
        }
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
