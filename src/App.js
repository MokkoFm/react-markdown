import './App.css';
import React from 'react';
import marked from 'marked';

const markdownContentOnLoad =
`# My markdown viewer
## Created by \`Sergei Elsakov\` with React
\`\`\`
I did it with library Marked
\`\`\`
* I created editor
* I created preview
> You can add some fantastic quote here  
![Smile](https://cdn.iconscout.com/icon/free/png-256/react-1543566-1306069.png)  

**Thank you!**`;

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
