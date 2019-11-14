# LivePerson Twitter Search

LivePerson Twitter Search uses Twitter's API for finding out tweets with `#liveperson` and stores the result into a SQL Lite database. This solution is composed of two different applications:

  - A Node.js REST API
  - An Angular web application

# Environment Variables

Our environment variables store values that can be used application-wide. You can change the project's environment variables by editing the following file:

For a development environment:
```
src/environments/environment.ts
```

For a production environment:
```
src/environments/environment.prod.ts
```

Once you've opened the appropriate environment's file, please change the `apiUrl` attribute value to the one that corresponds to your back-end address. Our front-end uses `http://localhost:3000/api/v1` as a default value for the `apiUrl` attribute. 

If you're running the Node.js API at a different port, for example at port `4000`, please update it to:

```json
apiUrl: http://localhost:4000/api/v1
```

# Setup

Before running this project you will need to install all the required dependencies with the following command:

```sh
$ npm install
```

# Running

Once you've set up your back-end environment and get it up and running, start the front-end application by running the following command:

```sh
$ npm run start
```

Angular uses port `4200` as default, so you can access it by opening the following address in your web browser:

```
http://localhost:4200/
```

# Running tests

You can run the unit tests by executing the following command:

```sh
$ npm run test
```

# Technical Decisions

## date-fns
Using additional libraries to handle data is not usually a good decision, especially if you don't have to deal with complex date operations. Still, I have decided to use `date-fns`, a simple and consistent toolset for manipulating dates.

At our front-end, instead of showing formatted dates in our tweet's cards, I wanted a more human-readable way to display when a tweet has been posted and, I found in `date-fns` a suitable solution for displaying relative dates.

Using a third-party library is not the best scenario for this use-case but, considering my available timeframe, I have made this decision to save development time. So, keep in mind that this is not a recommended decision for production-ready environments, it's for development purposes only.