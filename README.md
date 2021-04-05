# Testing (TDD, Unit, Integration)
My take on the different types of tests and my approach to Test Driven Development (TDD)

![Testing pyramid](https://user-images.githubusercontent.com/4737780/113559528-2db63300-961f-11eb-831b-3fce4ab984c7.png)

#### Unit tests
The essence of a unit test is to test the behaviour of a single unit
under different circumstances without acutally using the unit's 
dependencies.

The dependencies have their own unit tests to ensure proper behaviour.

The rationale is that all units / modules are thoroughly tested in isolation
under different conditions which provides for great level of trust in the
behaviour of that unit / module. Additionally, unit tests help trace and 
more importantly, fix bugs a lot quicker due to the reduced surface area.

Finally, since unit tests don't rely on external factors (such as a database)
they are not prone to flakiness and they run very very fast. The speed of tests
something is crucial because we run them multiple times a day -
- On our laptops during development while implementing feature / fixing bugs
- On CI systems for testing

When tests run fast, we are more likely to write more of them and therefore are
more likely to produce buggy software.

#### Integration tests
Integration tests allow us to exercise the integrations (hence the name) between
the unit tested modules. Going back to the testing pyramid, these tests are typically
fewer in number as :
1. They take longer to run
2. They typically require a little more setup

Code that involves writing to a cache or database will fall under this category 
as those systems cannot (or should not) be faked. 

Code that is responsible for caching or persistence should not make assumptions (in testing terms - stub) about the behaviour of the thing being tested. While these tests will require some setup and run slower compared to unit tests, they provide a high level of confidence.

#### End to End tests (e2e)
From the testing pyramid, these tests are fewest in number but provide the highest confidence from an end users' perpective. 

These tests exercise the full application from start to finish; from starting up the server, creating HTTP calls with a request body to writing data to cache or reading data from a database.

End to end tests affords us the capability to ensure that our application does what is says on the box. It helps adhere to features and value promised to end users.
