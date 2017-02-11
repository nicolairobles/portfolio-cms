var keystone = require('keystone');

/**
 * PostCategory Model
 * ==================
 */

var PostCategory = new keystone.List('PostCategory', {
	autokey: { from: 'name', path: 'key', unique: true },
	defaultSort: 'importanceRank'

});

PostCategory.add({
	name: { type: String, required: true },
	importanceRank: { type: Number, unique:true }
});

PostCategory.relationship({ ref: 'Post', path: 'categories' });

PostCategory.defaultColumns = 'name, importanceRank';

PostCategory.register();
