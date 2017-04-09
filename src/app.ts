import { Router, RouterConfiguration } from 'aurelia-router';

export class App {
	public router: Router;

	public configureRouter(config: RouterConfiguration, router: Router) {
		config.title = 'Aurelia';
		config.map([
			{ route: ['', 'home'], name: 'home', moduleId: 'pages/home', nav: true, title: 'Home' },
			{ route: 'ycombinator', name: 'Hacker news', moduleId: 'feeds/ycombinator', nav: true, title: 'Hacker news' },
			{ route: 'gizmodo', name: 'gizmodo', moduleId: 'feeds/gizmodo', nav: true, title: 'Gizmodo' },
			{ route: 'xataka', name: 'xataka', moduleId: 'feeds/xataka', nav: true, title: 'Xataka' }
		]);

		this.router = router;
	}
}
