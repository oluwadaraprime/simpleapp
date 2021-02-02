var models = require('../models/index');

exports.create_post = function (req, res) {
	models.User.create({
		username: req.body.username
	}).then(function () {
		res.redirect('/');
	});
};

exports.delete_user_get = function (req, res) {
	models.User.destroy({
		where: {
			id: req.params.user_id
		}
	}).then(function () {
		res.redirect('/');
	});
};

exports.create_teamokunade_post = function (req, res) {
	models.Teamokunade.create({
		title: req.body.title,
		UserId: req.params.user_id
	}).then(function () {
		res.redirect('/');
	});

};

exports.delete_user_teamokunade_get = function (req, res) {
	models.Teamokunade.destroy({
		where: {
			id: req.params.teamjide_id
		}
	}).then(function () {
		res.redirect('/');
	});
};