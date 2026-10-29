import {readdir,mkdir,copyFile,writeFile,rm} from 'node:fs/promises';
import {resolve,join} from 'node:path';
const root=resolve(import.meta.dirname,'..'),dist=join(root,'dist');
// This fixed generated directory is the only removal target. Never publish repository metadata or local credentials.
if(dist!==join(root,'dist'))throw Error('Invalid build target');
await rm(dist,{recursive:true,force:true});await mkdir(dist,{recursive:true});
const allowed=new Set(['index.html','style.css','app.js','projects.js','data.js','github-data.json']);
for(const file of await readdir(root))if(allowed.has(file)||/^preview-[a-z0-9_-]+\.png$/i.test(file))await copyFile(join(root,file),join(dist,file));
await writeFile(join(dist,'_headers'),'/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n');
console.log('Public portfolio assets prepared in dist/');
