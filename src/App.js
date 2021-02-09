import './App.css';
import React from 'react';
import marked from 'marked';

const markdownContentOnLoad =
`# a header (H1 size)
## a sub header (H2 size)
https://www.linkedin.com/in/sergei-elsakov  
\`inline code\`  
\`\`\`
You can write
Some block of code here
\`\`\`  
* a list item  
> a blockquote  
an image ![Smile](https://i.pinimg.com/474x/3a/7c/20/3a7c201f1d37deb49412363d768bd865--emoji-faces-smiley-faces.jpg)  

**and bolded text.**`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: markdownContentOnLoad,
      preview: marked(markdownContentOnLoad),
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      editor: event.target.value,
      preview: marked(event.target.value),
    })
  }

  render() {
    return (
      <div className="App">
        <div className="editor">
          <textarea id="editor" onChange={this.handleChange}>
            {this.state.editor}
          </textarea>
        </div>
        <div id="preview" className="preview_html" dangerouslySetInnerHTML={{ __html: this.state.preview }}></div>
      </div>
    )
  }
}
 

export default App;
