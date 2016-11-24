import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  Deck, Spectacle, Slide, Text, Heading, Appear, CodePane, Link, S, Image
} from 'spectacle';
import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme({
  primary: '#fff',
  secondary: '#555',
  tertiary: '#555',
  quartenary: '#ff5252'
}, {
  primary: 'Fira Sans',
  secondary: 'Fira Sans',
  tertiary: 'Fira Mono'
});

class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="bar" transition={['fade']} transitionDuration={200}>
          <Slide>
            <Heading size={1}>Leveling up CSS</Heading>
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              Problem setting
            </Heading>

            <Heading size={4} textColor="#555">
              Plain CSS is a pain to write, scale, and maintain
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              Values cannot be variablized
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              Reusability is limited to classes
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              Nested selectors are verbose
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              Vendor prefixes, enough said
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              ...and troves of other things
            </Heading>
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              Enter pre-processing
            </Heading>

            <Heading size={4} textColor="#555">
              Transform an extension language into CSS instead!
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              Sass
            </Heading>
            <Link href={"http://sass-lang.com/"}>{"http://sass-lang.com/"}</Link>

            <CodePane
              lang="css"
              margin={"2em 0 0"}
              source={
`@mixin rounded {
  -ms-border-radius: 4px;
      border-radius: 4px;
}

$li-color: #333;

ul {
  > li {
    @include rounded;
    color: $li-color;
  }
}`
              }
              />
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              Less
            </Heading>
            <Link href={"http://lesscss.org/"}>{"http://lesscss.org/"}</Link>

            <CodePane
              lang="css"
              margin={"2em 0 0"}
              source={
`.rounded {
  -ms-border-radius: 4px;
      border-radius: 4px;
}

@li-color: #333;

ul {
  > li {
    .rounded();
    color: @li-color;
  }
}`
              }
              />
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              Stylus
            </Heading>
            <Link href={"http://stylus-lang.com/"}>{"http://stylus-lang.com/"}</Link>

            <CodePane
              lang="css"
              margin={"2em 0 0"}
              source={
`rounded() {
  -ms-border-radius: 4px;
      border-radius: 4px;
}

li-color = #333;

ul {
  > li {
    rounded();
    color: li-color;
  }
}`
              }
              />
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555" fit>
              Why bother with plain CSS?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              Exhibit A
            </Heading>

            <Heading size={4} textColor="#555">
              Extension languages are all non-standardized versions of CSS
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555" fit>
              They work around rather than fix CSS
            </Heading>
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              What happens when CSS catches up?
            </Heading>

            <Appear>
              <Heading size={4} textColor="#555">
                The extension languages are likely to be stuck in limbo
              </Heading>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              We are however in luck
            </Heading>

            <Appear>
              <Heading size={3} textColor="#555">
                CSS is catching up!
              </Heading>
            </Appear>
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              Just to be clear
            </Heading>

            <Heading size={4} textColor="#555" fit>
              There exists no such thing as CSS4
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#999">
              What does exist then?
            </Heading>

            <Heading size={4} textColor="#555">
              CSS extension modules and specification proposals
            </Heading>
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              Draft
            </Heading>

            <Heading size={5} textColor="#555">
              CSS Variables Module Level 1
            </Heading>
            <Link href={"https://www.w3.org/TR/css-variables/"}>{"https://www.w3.org/TR/css-variables/"}</Link>

            <CodePane
              lang="css"
              margin={"2em 0 0"}
              source={
`:root {
  --btn-background: gray;
  --btn-color: white;
}

.btn {
  background: var(--btn-background);
  color: var(--btn-color);
}

.btn-blue {
  --btn-background: blue;
}`
              }
              />
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              Draft
            </Heading>

            <Heading size={5} textColor="#555">
              CSS Color Module Level 4
            </Heading>
            <Link href={"https://www.w3.org/TR/css-color-4/"}>{"https://www.w3.org/TR/css-color-4/"}</Link>

            <CodePane
              lang="css"
              margin={"2em 0 0"}
              source={
`:root {
  --btn-background: gray;
  --btn-color: white;
}

.btn {
  background: var(--btn-background);
  color: var(--btn-color);
  border: 1px solid color(var(--btn-background) blackness(10%));
}

.btn-blue {
  --btn-background: blue;
}`
              }
              />
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              Proposal
            </Heading>

            <Heading size={5} textColor="#555">
              CSS Nesting Module Level 3
            </Heading>
            <Link href={"http://tabatkins.github.io/specs/css-nesting/"}>{"http://tabatkins.github.io/specs/css-nesting/"}</Link>

            <CodePane
              lang="css"
              margin={"2em 0 0"}
              source={
`:root {
  --btn-background: gray;
  --btn-color: white;
}

.btn {
  background: var(--btn-background);
  color: var(--btn-color);
  border: 1px solid color(var(--btn-background) blackness(10%));

  &-blue {
    --btn-background: blue;
  }

  & .icon {
    fill: var(--btn-color);
  }
}`
              }
              />
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              Proposal
            </Heading>

            <Heading size={5} textColor="#555">
              CSS @apply rule
            </Heading>
            <Link href={"http://tabatkins.github.io/specs/css-apply-rule/"}>{"http://tabatkins.github.io/specs/css-apply-rule/"}</Link>

            <CodePane
              lang="css"
              margin={"2em 0 0"}
              source={
`:root {
  --clearfix: {
    &:after {
      display: table;
      content: "";
      clear: both;
    }
  };
}

.container {
  @apply --clearfix;
}`
              }
              />
          </Slide>

          <Slide>
            <Heading size={5} textColor="#555" fit>
              Those were just the tip of the iceberg
            </Heading>
          </Slide>

          <Slide>
            <Heading size={5} textColor="#555" fit>
              How to write future-proof CSS <S type="italic">today</S>?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={5} textColor="#999">
              Enter post-processing
            </Heading>

            <Heading size={4} textColor="#555">
              Transform CSS into different CSS!
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              PostCSS
            </Heading>
            <Link href={"http://postcss.org/"}>{"http://postcss.org/"}</Link>
          </Slide>

          <Slide bgColor="#f4f2ed">
            <Image src="cssnext.png" width="100%"/>
          </Slide>

          <Slide bgColor="#faf8f5">
            <Image src="autoprefixer.png" width="100%"/>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555" fit>
              CSS is becoming more expressive
            </Heading>

            <Heading size={5} textColor="#999">
              which can be leveraged <S type="italic">today</S>
            </Heading>
          </Slide>

          <Slide>
            <Heading size={4} textColor="#555">
              What about pre-processors?
            </Heading>

            <Appear>
              <Heading size={5} textColor="#999">
                Well...
              </Heading>
            </Appear>
          </Slide>

          <Slide>
            <Image src="https://imgs.xkcd.com/comics/standards.png" width="100%"/>
          </Slide>

          <Slide bgColor="#333">
            <Heading size={4} textColor="#fff">
              Fin!
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

render(<Presentation/>, document.getElementById('root'));
