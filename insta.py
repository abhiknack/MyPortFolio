from instagrapi import Client

def get_story_pks(username, password):
    try:
        # Create an Instagrapi client and log in
        client = Client()
        client.login(username, password)

        # Fetch the user's stories
        print(cl.user_info_by_username('abhiknack'))
        user_story_list = client.user_stories(username,2)

        if user_story_list:
            # Print the PK (Primary Key) of each story
            for story in user_story_list:
                print(f"Story PK (Primary Key): {story.pk}")

        # Logout from the account
        client.logout()
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    # Replace with your Instagram username and password
    username = 'abhiknack'
    password = 'Abhiabhi@4964'

    get_story_pks(username, password)








