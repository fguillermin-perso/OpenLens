const fs = require('fs');

var packagejson = require('./package.json');

packagejson.build.publish = [{
    url: "https://github.com/fguillermin-perso/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packagejson.build.win.artifactName = "OpenLens.Setup.fgu.${version}.${ext}";

fs.writeFileSync('package.json', JSON.stringify(packagejson));
