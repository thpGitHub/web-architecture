db = db.getSiblingDB('quiz_bdd_in_docker');

db.users.insertOne({
    "email": "thierrypoupon@hotmail.com",
    "password": "$2b$10$2vKoP04xSDJi25/ovra.L..uKt5.lWGZJMS3aD/E5uUHxwIpSRF2a",
});

db.quizzes.insertMany([
    {
        "name": "Geography Quiz",
        "rounds": [
          {
            "questions": "What is the capital of Italy?",
            "reponses": ["Rome", "London"],
            "corrects": [0]
          },
          {
            "questions": "Which river flows through Egypt?",
            "reponses": ["Nile", "Amazon"],
            "corrects": [0]
          }
        ],
        "categories": ["Geography", "World Capitals"],
    },
    {
        "name": "Movie Quotes Quiz",
        "rounds": [
          {
            "questions": "Which movie features the line 'You can't handle the truth!'?",
            "reponses": ["A Few Good Men", "The Shawshank Redemption"],
            "corrects": [0],
          },
          {
            "questions": "In which film does the character say 'Here's looking at you, kid'?",
            "reponses": ["Casablanca", "Gone with the Wind"],
            "corrects": [0],
          }
        ],
        "categories": ["Movies", "Famous Quotes"],
      },
      {
        "name": "History Quiz",
        "rounds": [
          {
            "questions": "Which year did World War II end?",
            "reponses": ["1945", "1918"],
            "corrects": [0],
          },
          {
            "questions": "Who was the first president of the United States?",
            "reponses": ["Thomas Jefferson", "George Washington"],
            "corrects": [1],
          }
        ],
        "categories": ["History", "General Knowledge"],
      },
      {
        "name": "Science Quiz",
        "rounds": [
          {
            "questions": "What is the chemical symbol for water?",
            "reponses": ["H2O", "CO2"],
            "corrects": [0],
          },
          {
            "questions": "What is the closest planet to the sun?",
            "reponses": ["Venus", "Mercury"],
            "corrects": [1],
          }
        ],
        "categories": ["Science", "General Knowledge"],
      },
      {
        "name": "Math Quiz",
        "rounds": [
          {
            "questions": "What is 2 + 2?",
            "reponses": ["3", "4"],
            "corrects": [1],
          },
          {
            "questions": "What is the value of π (pi)?",
            "reponses": ["3.14", "3.14159"],
            "corrects": [1],
          }
        ],
        "categories": ["Mathematics", "General Knowledge"],
      },
      {
        "name": "Music Quiz",
        "rounds": [
          {
            "questions": "Who is known as the 'King of Pop'?",
            "reponses": ["Elvis Presley", "Michael Jackson"],
            "corrects": [1],
          },
          {
            "questions": "Which band performed the hit song 'Bohemian Rhapsody'?",
            "reponses": ["The Beatles", "Queen"],
            "corrects": [1],
          }
        ],
        "categories": ["Music", "Entertainment"],
      },
      {
        "name": "Sports Quiz",
        "rounds": [
          {
            "questions": "Which sport does Cristiano Ronaldo play?",
            "reponses": ["Basketball", "Soccer"],
            "corrects": [1],
          },
          {
            "questions": "In which sport is the 'Wimbledon' championship held?",
            "reponses": ["Tennis", "Golf"],
            "corrects": [0],
          }
        ],
        "categories": ["Sports", "General Knowledge"],
      },
      {
        "name": "Language Quiz",
        "rounds": [
          {
            "questions": "Which language is spoken in Japan?",
            "reponses": ["Chinese", "Japanese"],
            "corrects": [1],
          },
          {
            "questions": "What is the official language of Brazil?",
            "reponses": ["Portuguese", "Spanish"],
            "corrects": [0],
          }
        ],
        "categories": ["Languages", "Culture"],
      },
      {
        "name": "Food Quiz",
        "rounds": [
          {
            "questions": "Which country is famous for sushi?",
            "reponses": ["Italy", "Japan"],
            "corrects": [1],
          },
          {
            "questions": "What is the main ingredient in guacamole?",
            "reponses": ["Avocado", "Tomato"],
            "corrects": [0],
          }
        ],
        "categories": ["Food", "Cuisine"],
      }
]);
    
    
    
    
    
    