import { loadManifest } from '@angular-architects/module-federation';
import { loadRemoteEntry } from '@angular-architects/module-federation';
import('./bootstrap')
	.catch(err => console.error(err));
	loadManifest('assets/mf.manifest.json') .catch((err) => console.error('Error loading remote entries', err)) .then(() => import('./bootstrap')) .catch((err) => console.error(err));