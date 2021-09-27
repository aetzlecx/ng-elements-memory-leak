import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

const loopCount = 1000;

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));

const button = document.querySelector('button');
button.addEventListener('click', () => {
    for (let i = 0; i < loopCount; i++) {
        const element = document.createElement('wc-test');
        document.body.appendChild(element);
        element.remove();
    }
});
