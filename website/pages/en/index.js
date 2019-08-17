/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const SyntaxHighlighter = require('react-syntax-highlighter').Light;

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock
      align="center"
      contents={props.children}
      layout={props.layout}
    />
  </Container>
);

class Index extends React.Component {
  render() {
    return (
      <div>
        {this.renderSplash()}
        <div className="mainContainer">
          {this.renderWhatYouWillLearn()}
          {this.askQuestion()}
        </div>
      </div>
    );
  }

  renderSplash() {
    const { pageCodeStyle, baseUrl, url, twitterUsername } = this.props.config;
    return (
      <div className='home-splash'>
        <div className="container">
          <div className="row">
            <div className="col-md-7 mb-3">
              <img className="logo" src={baseUrl + "img/dark-logo@480w.png"} alt="Learn.JS" />
              <h3 className="caption">The ultimate guide to learning javascript.</h3>
              <ul className="buttons-list">
                <li className="mr-4">
                  <a
                    href={baseUrl + "getting-started"}
                    className="button dark large invert-hover"
                  >Start Learning</a>
                </li>
                <li className="mr-4">
                  <a
                    className="github-button"
                    href="https://github.com/thecodecafe/learn.js"
                    data-icon="octicon-star"
                    data-show-count="true"
                    aria-label="Star thecodecafe/learn.js on GitHub"
                  >Star</a>
                </li>
                <li>
                  <a className="twitter-share-button"
                    href={
                      "https://twitter.com/intent/tweet"
                      + "?text=" + encodeURIComponent("The ultimate guide to learning javascript.")
                      + "&url=" + encodeURIComponent(url + baseUrl)
                      + "&via=" + encodeURIComponent(twitterUsername)
                    }
                  >Tweet</a>
                </li>
              </ul>
            </div>
            <div className='col-md-5'>
              <SyntaxHighlighter
                className='code-block'
                language='javascript'
                style={pageCodeStyle}
              >
                {
                  "const greet = (name = 'World') => {\n"
                  + "  return 'Hello, ' + name + '!';\n"
                  + "}\n"
                  + "\n"
                  + "greet('Peter'); \/\/ Hello, Peter!\n"
                }
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderWhatYouWillLearn() {
    const { baseUrl } = this.props.config;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="what-you-will-learn my-5 py-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5 pull-right">
                    <img
                      src={baseUrl + "img/undraw_code_typing_7jnv.svg"}
                      alt="what you will learn"
                      className="mt-5"
                    />
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-6">
                    <h1 className="mb-4">By Going Through This Guide</h1>
                    <ul className="outcome-list mb-5">
                      <li>You will learn and understand the Javascript syntax.</li>
                      <li>You will learn and understand basic programming principles.</li>
                      <li>You will learn and understand control flow.</li>
                      <li>You will learn and understand loops and recursions.</li>
                      <li>You will learn and understand data types and data structrues.</li>
                      <li>You will learn and understand Object Oriented Programming.</li>
                      <li>You will become a Javascript ninja.</li>
                    </ul>
                    <a 
                      href={baseUrl + "getting-started"}
                      className="button dark mb-3 large"
                    >
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  askQuestion() {
    const { baseUrl } = this.props.config;
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-12">
            <div className="how-toask-question my-5">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src={baseUrl + "img/undraw_note_list.svg"}
                      alt="how to ask a question"
                    />
                  </div>
                  <div className="col-md-1"></div>
                  <div className="col-md-6 text-right">
                    <h1 className="mb-4">Need Help?</h1>
                    <p>
                      You're not alone, Learn.JS is hosted on GitHub, 
                      if you happen to have any question or get stuck 
                      anywhere you can simply ask a question at the issues 
                      section on the GitHub repo.
                    </p>
                    <div>
                      <a
                        href="https://github.com/thecodecafe/learn.js/issues"
                        className="button primary large"
                        target="_blank"
                      >
                        Ask Question
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
