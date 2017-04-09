import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import 'fetch';

@autoinject
export class Xataka {
	public feeds = [];

	constructor(private http: HttpClient) {
		http.configure(config => {
			config
				.useStandardConfiguration()
				.withBaseUrl('https://api.rss2json.com/v1/');
		});
	}

	public activate() {
		return this.http.fetch('api.json?rss_url=http%3A%2F%2Ffeeds.weblogssl.com%2Fxataka2')
			.then(response => response.json())
			.then((data: any) => {
				if (data && data.items && data.items.length) {
					data.items.forEach((feed) => {
						let div = document.createElement('div');
						div.innerHTML = feed.description;
						let image = div.firstChild.nextSibling.firstChild;
						feed.image = image['src'];
					});

					this.feeds = data.items;
				}
			});
	}
}
