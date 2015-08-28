from app import app, forms, models, db
from flask import render_template, request, jsonify, redirect, url_for, session
from flask.ext.login import LoginManager, login_user, current_user, logout_user, login_required

@app.route("/")
def home():
	return "Hello World"