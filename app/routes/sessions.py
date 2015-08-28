from app import app, forms, models, db
from flask import render_template, request, jsonify, redirect, url_for, session
from flask.ext.login import LoginManager, login_user, current_user, logout_user, login_required
import random

@app.route("/", methods=['GET','POST'])
def home():
	if current_user.is_anonymous():
		r = lambda: random.randint(0,255)
		color = '#%02X%02X%02X' % (r(),r(),r())
		form = forms.sessions.UserRegisterForm()

		if request.method == "GET":
			return render_template("home.html", color = color, form = form)
		else:
			user = models.core.User(fullname = form.fullname.data, email = form.email.data, password = form.password.data)
			db.session.add(user)
			db.session.commit()
			login_user(user)
			return redirect(url_for('dashboard'))
	else:
		return redirect(url_for('dashboard'))

@app.route("/login", methods=['GET','POST'])
def login():
	if current_user.is_anonymous():
		r = lambda: random.randint(0,255)
		color = '#%02X%02X%02X' % (r(),r(),r())
		form = forms.sessions.LoginForm()

		if request.method == "GET":
			return render_template("login.html", color = color, form = form)
		else:
			user = models.core.User.query.filter_by(email = form.email.data).first()
			if user and user.check_password(form.password.data):
				login_user(user)
				return redirect(url_for('dashboard'))
			else:
				error = "Error. Try filling all the details correctly."
				return render_template('login.html', form = form, error = error)
	else:
		return redirect(url_for('dashboard'))

@app.route("/dashboard", methods=['GET','POST'])
def dashboard():
	if current_user.user_status == 1:
		return "Admin Logged in as - %r" % current_user.email
	elif current_user.user_status == 0:
		return "User logged in as - %r" % current_user.email

@app.route('/logout')
@login_required
def logout():
	logout_user()
	return redirect(url_for('home'))