// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill, Heading, Image, Layout, Link,
  ListItem, List, Markdown, Quote, Slide, Spectacle, Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/app.css");

const images = {
  tomster: require("../assets/tomster.png"),
  core: require('../assets/ember-diagram.png'),
  lts: require('../assets/lts-tomster.png'),
  ember: require('../assets/emberjs.png'),
  books: require('../assets/books-app.png'),
  inspector: require('../assets/console.png'),
  empty: require('../assets/temp-empty.png'),
  core2: require('../assets/ember-core-diag.png'),
  zoey: require('../assets/zoey.png')
};

preloader(images);

const theme = createTheme({
  primary: "#faf4f1",
  emberRed: "#d84a32",
  emberBlack: "#444444",
  helvetica: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="emberRed">
            <Image src={images.lts.replace("/", "")} height="400px"/>
            <Heading size={2} fit caps lineHeight={1} textColor="primary">
              Building Ambitious Web Applications with Ember.js
            </Heading>
            <Link href="https://twitter.com/danielgynn">
              <Text bold caps textColor="emberBlack">@danielgynn</Text>
            </Link>
            <Text caps textColor="primary">CambridgeJS - 11/07/16</Text>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading caps size={2} textColor="emberRed">Who am I?</Heading>
            <Link href="https://twitter.com/danielgynn"><Text bold caps textColor="emberBlack">@danielgynn</Text></Link>
            <List>
              <Appear><ListItem><Text textColor="emberBlack">Frontend Web Developer at Repositive</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Using Ember for 10 months</Text></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="Talk about the main points for using Ember.">
            <Heading caps size={2} textColor="emberRed">What is <Image src={images.ember.replace("/", "")} height="100px"/>?</Heading>
            <Appear><Heading fit bold textColor="emberBlack">Framework for building ambitious web applications</Heading></Appear>
            <List>
              <Appear><ListItem><Text textColor="emberBlack">Convention over Configuration</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Write less code</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Developer ergonomics</Text></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading fit caps size={2} textColor="emberRed">The Ember Stack</Heading>
            <List>
              <ListItem><Appear><Text textColor="emberBlack">Ember.js - MVC/MVVM framework</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Ember CLI - command line, build tools, server, addons</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Ember Data - data persistence library</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Addon community - <Link href="https://emberobserver.com">emberobserver.com</Link></Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">Ember Inspector - Chrome & Firefox browser extension</Text></Appear></ListItem>
              <ListItem><Appear><Text textColor="emberBlack">QUnit testing</Text></Appear></ListItem>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading caps size={2} textColor="emberRed">Installing Ember-CLI</Heading>
            <Appear><Text bold caps textColor="emberBlack">Official command line utility</Text></Appear>
            <Appear><Text textColor="emberBlack">Requires the latest version of <Link href="https://nodejs.org/">Node.js</Link>, <Link href="https://www.npmjs.com/">NPM</Link> and <Link href="https://bower.io/">Bower</Link> installed</Text></Appear>
            <Appear>
              <CodePane
                lang="bash"
                source={require("raw!../assets/ember-cli.example")}
                margin="20px auto"
                textSize="18px"
              />
            </Appear>
            <Appear>
              <CodePane
                lang="bash"
                source={require("raw!../assets/ember-cli1.example")}
                margin="20px auto"
                textSize="18px"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Text caps bold textColor="emberBlack">Project Structure</Text>
            <CodePane
              lang="bash"
              source={require("raw!../assets/tree.example")}
              margin="20px auto"
              textSize="18px"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica">
            <Heading caps size={2} textColor="emberRed">Core Concepts</Heading>
            <Image src={images.core2.replace("/", "")} height="500px"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} align="center center" bgColor="primary" textFont="helvetica" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps size={2} textColor="emberRed">Demo App</Heading>
            <Image src={images.books.replace("/", "")} width="100%" height="600px"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica">
            <Heading caps size={2} textColor="emberRed">Router/Routes</Heading>
            <List>
              <Appear><ListItem><Text textColor="emberBlack">The router maps the current URL to a route</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Route renders a template</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Calls model hook to load data</Text></ListItem></Appear>
            </List>
            <Appear>
              <CodePane
                lang="bash"
                source={require("raw!../assets/routes.example")}
                margin="20px auto"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica">
          <Text caps bold textColor="emberBlack">Routes automatically mapped</Text>
            <CodePane
              lang="js"
              source={require("raw!../assets/router.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica">
            <Heading caps size={2} textColor="emberRed">Templates</Heading>
            <List>
              <Appear><ListItem><Text textColor="emberBlack">Organise the layout of the apps HTML</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Additional Handlebars helpers</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">The outlet renders the markup for the current route</Text></ListItem></Appear>
            </List>
            <Appear>
              <CodePane
                lang="markup"
                source={require("raw!../assets/templates1.example")}
                margin="20px auto"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica">
            <Text bold caps textColor="emberBlack">Link-to helpers</Text>
            <CodePane
              lang="markup"
              source={require("raw!../assets/templates3.example")}
              margin="20px auto"
            />
            <CodePane
              lang="markup"
              source={require("raw!../assets/templates2.example")}
              margin="20px auto"
            />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica">
            <Heading caps size={2} textColor="emberRed">Addons</Heading>
            <Appear><Text bold textColor="emberBlack">Libraries that solve problems that Ember doesn&#39;t</Text></Appear>
            <Layout>
              <Fill>
                <Appear>
                  <List>
                    <ListItem><Text textColor="emberBlack">ember-cli-mirage</Text></ListItem>
                    <ListItem><Text textColor="emberBlack">ember-cli-materialize</Text></ListItem>
                  </List>
                </Appear>
              </Fill>
              <Fill>
                <Appear>
                  <List>
                    <ListItem><Text textColor="emberBlack">ember-simple-auth</Text></ListItem>
                    <ListItem><Text textColor="emberBlack">ember-cli-sass</Text></ListItem>
                  </List>
                </Appear>
              </Fill>
            </Layout>
            <Appear>
              <CodePane
                lang="markup"
                source={require("raw!../assets/addons1.example")}
                margin="20px auto"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps size={4} textColor="emberBlack">Mirage</Heading>
            <Appear><Text textColor="emberBlack">Mock client-side server to test and demo your apps</Text></Appear>
            <Appear>
              <CodePane
                lang="js"
                source={require("raw!../assets/mirage-config.example")}
                margin="20px auto"
                textSize="15px"
              />
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} align="center center" bgColor="primary" textFont="helvetica" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps size={2} textColor="emberRed">Ember Data</Heading>
            <Text bold textColor="emberBlack">Data persistence library</Text>
            <List>
              <Appear><ListItem><Text textColor="emberBlack">Allows scaling by creating, updating and deleting records</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Retrieve data from server in JSON</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Adapter pattern to interact with different backend types</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Single store responsible for fetching models</Text></ListItem></Appear>
              <Appear><ListItem><Text textColor="emberBlack">Automatically cache records to minimize requests</Text></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading caps size={4} textColor="emberBlack">Models</Heading>
            <Appear><Text textColor="emberBlack">Define attributes, relationships and behaviour of data</Text></Appear>
            <Appear><CodePane lang="bash" source={require("raw!../assets/model1.example")} margin="20px auto"/></Appear>
            <Appear><CodePane lang="js" source={require("raw!../assets/model2.example")} margin="20px auto"/></Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="">
            <Heading caps size={4} textColor="emberBlack">Call the model hook</Heading>
            <Appear><CodePane lang="js" source={require("raw!../assets/book-route.example")} margin="20px auto"/></Appear>
            <Appear><Heading caps size={4} textColor="emberBlack">Load Books Data into Route</Heading></Appear>
            <Appear><CodePane lang="markup" source={require("raw!../assets/book-template.example")} margin="20px auto"/></Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} align="center center" bgColor="primary" textFont="helvetica" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Text bold textColor="emberBlack">localhost:4200/books</Text>
            <Image src={images.empty.replace("/", "")} width="100%" height="500px"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} align="center center" bgColor="primary" textFont="helvetica" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps size={2} textColor="emberRed">Components</Heading>
            <Text bold textColor="emberBlack">Reusable UI elements</Text>
            <Appear><Text textColor="emberBlack">Consists of a template and JS file to define behaviour</Text></Appear>
            <Appear><CodePane lang="bash" source={require("raw!../assets/components1.example")} margin="20px auto"/></Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} align="center center" bgColor="primary" textFont="helvetica">
            <CodePane lang="markup" source={require("raw!../assets/components3.example")} margin="20px auto"/>
            <CodePane lang="markup" source={require("raw!../assets/components2.example")} margin="20px auto"/>
          </Slide>

          <Slide transition={["zoom", "fade"]} align="center center" bgColor="primary" textFont="helvetica" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps size={2} textColor="emberRed">Ember Inspector</Heading>
            <Text bold textColor="emberBlack">Browser extenstion to debug Ember apps</Text>
            <Appear><Text textColor="emberBlack">Inspect the records inside Ember Data models</Text></Appear>
            <Appear><Image src={images.inspector.replace("/", "")} height="100%" width="100%"/></Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary" textFont="helvetica" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading caps size={2} textColor="emberRed">Thanks!</Heading>
            <Text bold textColor="emberBlack">Source code: <Link href="https://github.com/danielgynn/ember-cambjs-app">GitHub</Link></Text>
            <Text bold textColor="emberBlack">Slides: <Link href="http://danielgynn-cambjs.surge.sh/">danielgynn-cambjs.surge.sh</Link></Text>
            <Layout>
              <Fill>
                <Image src={images.zoey.replace("/", "")} height="350px" margin="15px"/>
              </Fill>
              <Fill>
                <List>
                  <ListItem textSize="38px"><Text textSize="38px" textColor="emberBlack"><Link href="https://guides.emberjs.com/v2.6.0/">Ember Docs</Link></Text></ListItem>
                  <ListItem textSize="38px"><Text textSize="38px" textColor="emberBlack">Blogs: <Link href="http://emberigniter.com/">emberigniter.com</Link>, <Link href="http://www.programwitherik.com/">programwitherik.com</Link></Text></ListItem>
                  <ListItem textSize="38px"><Text textSize="38px" textColor="emberBlack">Talks/screencasts: <Link href="http://emberwatch.com/">emberwatch.com</Link></Text></ListItem>
                  <ListItem textSize="38px"><Text textSize="38px" textColor="emberBlack">CodeSchool: <Link href="https://www.codeschool.com/courses/try-ember">Try Ember</Link></Text></ListItem>
                  <ListItem textSize="38px"><Text textSize="38px" textColor="emberBlack">Books: <Link href="http://balinterdi.com/rock-and-roll-with-emberjs/">Rock and Roll with Ember.js</Link>, <Link href="https://leanpub.com/ember-cli-101">Ember 101</Link></Text></ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
