# Let's Talk

Overview: Let's Talk is a journaling web application that provides users with prompts based on how they are currently feeling.

## Motivation

### Problem:

1. Journal platforms that want to encourage daily entries bombard users emailed reminders but we see this a bandaid rather than a solution for the lack of user engagement. We believe that this issue is not primarily caused by forgetting (which is what the email solves) but by the user’s emotional engagement to the journal.

2. Journal platforms do not usually include questions for users to reflect  and we have yet to see journal platforms that generate prompts based on the user’s emotional/life status which reduces interest.

3. Journal platforms do not encourage undistracted freewriting which means that users could be multitasking and not really engaged with their inner thoughts.

### Goals of Project:

1. Create a journaling platform that provides personalized prompts that take into account how the user is has been or is currently feeling.This will be taken care of with a questionnaire before the user begins writing.
Users will be able to specify how long they would like write to encourage them to write without distractions.

2. Streaks to encourage engagement based on personal goals.


## Getting Started

Follow the following steps to replicate this project on your machine.

### Install node

Link to download node: https://nodejs.org/en/download/

### Install npm

```{bash}
npm install
```

### Install Yarn

```{bash}
npm install yarn
```

### Install Firebase

```{bash}
npm install firebase
```


### Install React-router-dom

```{bash}
npm install --save react-router-dom
```

### Install Semantic-ui-react

```{bash}
yarn add semantic-ui-react
```

### Install Semantic-ui-css

```{bash}
yarn add semantic-ui-css
```

### Install React-countdown-clock

```{bash}
npm install react-countdown-clock

```
-- In case there is an error, check if your machine is missing any dependencies.


## How To Run

```{bash}
cd Lets_Talk
yarn start
```

## Notes
1. Still need to implement page that shows previous journal entries although if
a journal is submitted it is saved in firebase
2. react-firebase-authentication and kv24 are older versions of "Lets_Talk"
3. In case Sign-Up doesn't work refresh or log into mj@letstalk.com, with the password 123456


## Built With

1. React
2. Firebase



## Authors

Mariama Jaiteh & Karen Santamaria

## Acknowledgments

1. User Authentication portion of our application comes from: https://github.com/rwieruch/react-firebase-authentication
