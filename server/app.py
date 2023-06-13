#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource
from datetime import datetime

# Local imports
from config import *
from models import User, Appointment, Task, Finance

# Views go here!


# class Hello(Resource):
#     def get(self):
#         return {}, 200


# api.add_resource(Hello, '/hello')


if __name__ == '__main__':
    app.run(port=5555, debug=True)
