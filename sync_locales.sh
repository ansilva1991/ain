git diff www/translates/es.js > /tmp/patch_file;
git checkout www/translates/ol.js;
patch -p1 www/translates/ol.js /tmp/patch_file;
git checkout www/translates/sp.js;
patch -p1 www/translates/sp.js /tmp/patch_file;