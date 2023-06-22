#!/usr/bin/env python3

# Standard library imports

from datetime import datetime
# Remote library imports
from flask import request, session
from flask_restful import Resource
from datetime import datetime

# Local imports
from config import *
from models import User, Appointment, Task, Finance

# Views go here!


class Signup(Resource):
    def post(self):
        username = request.get_json()['username']
        password = request.get_json()['password']
        first_name = request.get_json()['first_name']
        last_name = request.get_json()['last_name']
        email = request.get_json()['email']
        # profile_photo = request.get_json()['profile_photo']

        if username and password:
            new_user = User(username=username, first_name=first_name,
                            last_name=last_name, email=email)
            new_user.password_hash = password

            db.session.add(new_user)
            db.session.commit()

            session['user_id'] = new_user.id

            return new_user.to_dict(), 201
        return {}, 422


class Login(Resource):
    def post(self):
        username = request.get_json()['username']
        password = request.get_json()['password']

        user = User.query.filter(
            User.username == username).first()
        # print(request.get_json())

        if user.authenticate(password):
            session['user_id'] = user.id
            return user.to_dict(), 200
        return None, 401


class Logout(Resource):
    def delete(self):
        session['user_id'] = None
        print(session)
        return None, 204


class UserByID(Resource):
    def get(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            return user.to_dict(), 200
        except Exception:
            return {"error": "Unable to find user"}, 404

    def patch(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            if user == None:
                return {'error': 'User not found'}, 404
            else:
                for attr in request.get_json():
                    setattr(user, attr, request.get_json()[attr])
                db.session.add(user)
                db.session.commit()
                return user.to_dict(), 200
        except Exception:
            return {"error": "Unable to update user."}, 404

    def delete(self, id):
        try:
            user = User.query.filter(User.id == id).first()
            db.session.delete(user)
            db.session.commit()
            return {}, 200
        except Exception:
            return {"error": "Unable to find user."}, 404


class TasksPath(Resource):
    def get(self):
        tasks = [task.to_dict() for task in Task.query.all()]
        return tasks, 200

    def post(self):
        try:
            new_task = Task(
                name=request.get_json()['name'],
                due_by=datetime.strptime(
                    request.get_json()['due_by'], "%Y-%m-%d %I:%M:%S"),
                user_id=request.get_json()['user_id']
            )
            db.session.add(new_task)
            db.session.commit()
            return new_task.to_dict(), 201
        except Exception:
            return {"error": "Unable to create new task."}, 400


class TaskByID(Resource):
    def get(self, id):
        try:
            task = Task.query.filter(Task.id == id).first()
            return task.to_dict(), 200
        except Exception:
            return {"error": "Unable to find task"}, 404

    def patch(self, id):
        try:
            task = Task.query.filter(Task.id == id).first()
            if task == None:
                return {'error': 'Task not found'}, 404
            else:
                data = request.get_json()
                for attr, value in data.items():
                    if value:
                        if attr == "due_by":
                            new_date = (datetime.strptime(
                                value, "%Y-%m-%d %I:%M:%S"))
                            setattr(task, attr, new_date)
                        else:
                            setattr(task, attr, value)
                db.session.add(task)
                db.session.commit()
                return task.to_dict(), 200
        except Exception:
            return {"error": "Unable to update task."}, 404

    def delete(self, id):
        try:
            task = Task.query.filter(Task.id == id).first()
            db.session.delete(task)
            db.session.commit()
            return {}, 200
        except Exception:
            return {"error": "Unable to delete task."}, 404


class AppointmentsPath(Resource):
    def get(self):
        appointments = [appt.to_dict() for appt in Appointment.query.all()]
        return appointments, 200

    def post(self):
        try:
            new_appointment = Appointment(
                name=request.get_json()['name'],
                due_by=datetime.strptime(
                    request.get_json()['due_by'], "%Y-%m-%d %I:%M:%S"),
                user_id=request.get_json()['user_id']
            )
            db.session.add(new_appointment)
            db.session.commit()
            return new_appointment.to_dict(), 201
        except Exception:
            return {"error": "Unable to create new appointment."}, 400


class AppointmentByID(Resource):
    def get(self, id):
        try:
            appointment = Appointment.query.filter(
                Appointment.id == id).first()
            return appointment.to_dict(), 200
        except Exception:
            return {"error": "Unable to find appointment"}, 404

    def patch(self, id):
        try:
            appointment = Appointment.query.filter(
                Appointment.id == id).first()
            if appointment == None:
                return {'error': 'Appointment not found'}, 404
            else:
                data = request.get_json()
                for attr, value in data.items():
                    if value:
                        if attr == "due_by":
                            new_date = (datetime.strptime(
                                value, "%Y-%m-%d %I:%M:%S"))
                            setattr(appointment, attr, new_date)
                        else:
                            setattr(appointment, attr, value)
                db.session.add(appointment)
                db.session.commit()
                return appointment.to_dict(), 200
        except Exception:
            return {"error": "Unable to update appointment."}, 404

    def delete(self, id):
        try:
            appointment = Appointment.query.filter(
                Appointment.id == id).first()
            db.session.delete(appointment)
            db.session.commit()
            return {}, 200
        except Exception:
            return {"error": "Unable to delete appointment."}, 404


class FinancesPath(Resource):
    def get(self):
        finances = [finance.to_dict() for finance in Finance.query.all()]
        return finances, 200

    def post(self):
        try:
            new_finance = Finance(
                name=request.get_json()['name'],
                due_by=datetime.strptime(
                    request.get_json()['due_by'], "%Y-%m-%d %I:%M:%S"),
                user_id=request.get_json()['user_id']
            )
            db.session.add(new_finance)
            db.session.commit()
            return new_finance.to_dict(), 201
        except Exception:
            return {"error": "Unable to create new finance."}, 400


class FinanceByID(Resource):
    def get(self, id):
        try:
            finance = Finance.query.filter(Finance.id == id).first()
            return finance.to_dict(), 200
        except Exception:
            return {"error": "Unable to find finance"}, 404

    def patch(self, id):
        try:
            finance = Finance.query.filter(Finance.id == id).first()
            if finance == None:
                return {'error': 'Finance not found'}, 404
            else:
                data = request.get_json()
                for attr, value in data.items():
                    if value:
                        if attr == "due_by":
                            new_date = (datetime.strptime(
                                value, "%Y-%m-%d %I:%M:%S"))
                            setattr(finance, attr, new_date)
                        else:
                            setattr(finance, attr, value)
                db.session.add(finance)
                db.session.commit()
                return finance.to_dict(), 200
        except Exception as e:
            print(e)
            return {"error": "Unable to update finance."}, 404

    def delete(self, id):
        try:
            finance = Finance.query.filter(Finance.id == id).first()
            db.session.delete(finance)
            db.session.commit()
            return {}, 200
        except Exception:
            return {"error": "Unable to delete finance."}, 404


class GetUser(Resource):
    def get(self):
        user_id = session.get('user_id')
        user = User.query.filter(User.id == user_id).first()
        return user.to_dict()


api.add_resource(Logout, '/logout')
api.add_resource(Login, '/login')
api.add_resource(Signup, '/signup')
api.add_resource(GetUser, '/check_session')

api.add_resource(UserByID, '/users/<int:id>')

api.add_resource(TasksPath, '/tasks')
api.add_resource(TaskByID, '/tasks/<int:id>')

api.add_resource(AppointmentsPath, '/appointments')
api.add_resource(AppointmentByID, '/appointments/<int:id>')

api.add_resource(FinancesPath, '/finances')
api.add_resource(FinanceByID, '/finances/<int:id>')

# will get error on first check saying no user logged in b/c of the way this is written
# refresh and error will go away


@app.before_request
def check_session():
    user_id = session.get('user_id')
    free_paths = ['login', 'signup']
    if request.endpoint not in free_paths:
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            if user:
                user.to_dict()
            else:
                return {"message": "User not found"}
        else:
            return {"message": "User not logged in"}, 401


if __name__ == '__main__':
    app.run(port=5555, debug=True)
