import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Ycombinator {
	public feeds = [];

	constructor(private http: HttpClient) {
		http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('https://api.rss2json.com/v1/');
		});
	}

	public activate() {
		return this.http.fetch('api.json?rss_url=https%3A%2F%2Fnews.ycombinator.com%2Frss')
			.then(response => response.json())
			.then((data: any) => {
				if (data && data.items && data.items.length) {
					this.feeds = data.items;
				}
			});
	}
}
