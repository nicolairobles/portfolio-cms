var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	defaultSort: 'pageNumber'
});

Post.add({
	title: { type: String, required: true },
	pageNumber: { type: Number, unique: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	// image.source_url
	content: {
		pageTitle: { type: String, default: 'Page Title' },
		subTitle: { type: String, default: 'Subtitle' },
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, pageNumber, state|20%, author|20%, publishedDate|20%';
Post.register();
