#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, User, Appointment, Finance, Task

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        print("Deleting data...")
        User.query.delete()
        Task.query.delete()
        Appointment.query.delete()
        Finance.query.delete()


        print("Creating Users...")
        users = []
        for i in range(5):
            u = User(
                first_name=fake.unique.first_name(),
                last_name=fake.unique.last_name(),
                username=fake.unique.user_name(),
                _password_hash=fake.word(),
                email=fake.email(),
                profile_photo=fake.image_url()
            )
            users.append(u)

        db.session.add_all(users)


        print('Creating appointments...')
        appointments = []
        for i in range(10):
            a = Appointment(
                name=fake.unique.word(),
                due_by=fake.date_time(),
                user_id=randint(1,5)
            )
            appointments.append(a)

        db.session.add_all(appointments)


        print('Creating tasks...')
        tasks = []
        for i in range(10):
            t = Task(
                name=fake.unique.word(),
                due_by=fake.date_time(),
                user_id=randint(1,5)
            )
            tasks.append(t)

        db.session.add_all(tasks)


        print('Creating finances...')
        finances = []
        for i in range(10):
            f = Finance(
                name=fake.unique.word(),
                due_by=fake.date_time(),
                user_id=randint(1,5)
            )
            finances.append(f)
        
        db.session.add_all(finances)

        db.session.commit()
        
        print('Finished seeding!')
