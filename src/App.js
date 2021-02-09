import './App.css';
import React from 'react';
import marked from 'marked';

let markdownContentOnLoad =
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
    this.Clear = this.Clear.bind(this)
  }
  handleChange(event) {
    this.setState({
      editor: event.target.value,
      preview: marked(event.target.value),
    })
  }
  Clear() {
    this.setState({
      editor: '',
      preview: '',
    })
  }

  render() {
    return (
      <div className="App">
        <div className="editor">
          <div className="editor_title">
            <h2>Editor</h2>
            <button onClick={this.Clear}>Clear</button>
          </div>
          <textarea id="editor" onChange={this.handleChange} value={this.state.editor}></textarea>
        </div>
        <h2>Previewer</h2>
        <div id="preview" className="preview_html" dangerouslySetInnerHTML={{ __html: this.state.preview }}></div>
      </div>
    )
  }
}
 

export default App;
