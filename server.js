'use strict';

require('zone.js/dist/zone-node'); // handle angular change detection on server properly
require('reflect-metadata'); // handle angular decorators for metadata

const path = require('path');

const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader'); // handles angular modules
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle'); // created after compilation

function angularRouter(req, res) {
    res.render(path.resolve(__dirname, 'src/index'), {req, res});
}

const app = express();

app.engine('html', ngUniversal.ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));

app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'dist/server'));

app.get('/', angularRouter);

app.use(express.static(path.resolve(__dirname, 'dist/server')));

app.get('*', angularRouter);

app.listen(4200, () => {
    console.log('Server listening on port 4200');
});