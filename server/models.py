from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
import os
from flask import current_app

from config import *


# Models go here!

class User(db.Model, SerializerMixin):
    __tablename__ = "users"

    serialize_rules = ('-updated_at', '-created_at',
                       '-task.user', '-appointment.user', '-finance.user',)

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    username = db.Column(db.String, unique=True)
    _password_hash = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    profile_photo = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    task = db.relationship('Task', back_populates='user')
    appointment = db.relationship('Appointment', back_populates='user')
    finance = db.relationship('Finance', back_populates='user')

    # @validates('email')
    # def validate_email(self, key, address):
    #     if '@' not in address:
    #         raise ValueError("Must enter a valid email")
    #     return address

    # @hybrid_property
    # def password_hash(self):
    #     raise Exception('Password hashes may not be viewed')

    # @password_hash.setter
    # def password_hash(self, password):
    #     password_hash = bcrypt.generate_password_hash(password.encode('utf-8'))
    #     self._password_hash = password_hash.decode('utf-8')

    # def authenticate(self, password):
    #     return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))


class Appointment(db.Model, SerializerMixin):
    __tablename__ = "appointments"

    serialize_rules = ('-updated_at', '-created_at', '-user.appointment',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    due_by = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user = db.relationship('User', back_populates='appointment')


class Task(db.Model, SerializerMixin):
    __tablename__ = "tasks"

    serialize_rules = ('-updated_at', '-created_at', '-user.task',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    due_by = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user = db.relationship('User', back_populates='task')


class Finance(db.Model, SerializerMixin):
    __tablename__ = "finances"

    serialize_rules = ('-updated_at', '-created_at', '-user.finance')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    due_by = db.Column(db.DateTime)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user = db.relationship('User', back_populates='finance')
