export const siteName = "Jasa Listrik Bandung";

export function localBusinessSchema(siteUrl: URL | string) {
	const url = new URL(siteUrl).href;
	return {
		"@context": "https://schema.org",
		"@type": "Electrician",
		"@id": `${url}#bisnis`,
		name: siteName,
		url,
		telephone: "+62-822-1981-4144",
		areaServed: {
			"@type": "City",
			name: "Bandung",
		},
		address: {
			"@type": "PostalAddress",
			streetAddress: "jl.puyuh dalam no.229 RT.03 Rw.11 Kelurahan Sadang Serang Kecamatan Coblong",
			addressLocality: "Bandung",
			addressRegion: "Jawa Barat",
			addressCountry: "ID",
		},
	};
}

export function articleSchema(opts: {
	title: string;
	description: string;
	url: URL;
	image: URL;
	published?: Date;
	modified?: Date;
}) {
	return {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: opts.title,
		description: opts.description,
		image: opts.image.href,
		datePublished: opts.published?.toISOString(),
		dateModified: (opts.modified ?? opts.published)?.toISOString(),
		mainEntityOfPage: opts.url.href,
		author: { "@type": "Organization", name: siteName },
		publisher: { "@type": "Organization", name: siteName },
	};
}