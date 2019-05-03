### Project Blackhole

Pitch: Sometimes, you just need to vent to get it out, move on, and feel better. Enter black hole. The reverse note taking app where everything you type automatically gets dumped in the trash. Research shows writing things down helps your brain move past the thought and onto bigger and brighter things. Don't let the fear of other people reading what you write stop you from reaping these benefits! Driver cut you off? Frustrated with the hour long wait time at a restaurant? Type out your response, hit submit, and it's absorbed into the black hole so you can move on with your life.

deployed at: https://blackhole-backend.herokuapp.com/

[Trello Board][https://trello.com/b/i4d8yoic/backend]

## For user registration and login:

Register new user:
_Method Url:_`/register`
HTTP method: [POST]

User login:
_Method Url:_ `/login`
HTTP method: [POST]

{
"username": "userName",
"password": "password"
}

For posting a message:

{
user_id: 1,
message: "a message"
}

## All auth routes

# View list of users

Method Url: `/users`
HTTP Method: [GET]

# View a user by id

Method Url: `/users/:id`
HTTP Method: [GET]

# Add a message

Method Url: `/postmessage`
HTTP method: [POST]

# view list of messages

Method: Url: `/getmessages`
HTTP Method: [GET]

# View a message by id

Method: Url: `/getmessage/:id`
HTTP Method: [GET]

# Update a message id

Method Url: `/updatemessage/:id`
HTTP Method: [PUT]

# Delete a message

Method: Url: `/delmessage/:id`
HTTP Method: [DELETE]

# View messages for specific user

Method: Url: `/messages/users/:id`
HTTP method: [GET]
