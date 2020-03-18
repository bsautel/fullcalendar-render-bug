This project reproduces a fullcalendar regression introduced in the 4.4.0 version.

Run `npm install`, `npm run-script serve` and open `http://localhost:9000` to start the application.

With version 4.3.1, the left / right arrows contain an icon.
It is a FontAwesome one, manually rendered to SVG. The rendering is triggered by the `viewSkeletonRender` hook.

When upgrading to the 4.4.0 version (see the `4.4` branch), the icons are rendered the first time but disappear after.
