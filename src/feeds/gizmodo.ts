import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Gizmodo {
	public feeds = [];

	constructor(private http: HttpClient) {
		http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('http://rss2json.com/');
		});
	}

	public activate() {
		return this.http.fetch('api.json?rss_url=http%3A%2F%2Fes.gizmodo.com%2Frss')
			.then(response => response.json())
			.then((data: any) => {
				if (data && data.items && data.items.length) {
					data.items.forEach((feed) => {
						let div = document.createElement('div');
						div.innerHTML = feed.content;
						let image = div.firstChild.nextSibling;
						feed.image = image['src'];
					});

					this.feeds = data.items;
				}
			});
	}
}
