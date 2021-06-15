import React, { Component } from 'react';
import 'Style/app.css';
import 'Style/app-mobile.css';

class App extends Component {
  render() {
      return (
        <div className="app-container">    
            {/* main section to render pages for different urls  */}
            <main className="page-container">
              {this.props.children}
            </main>
            
        </div>
      );
  }
}



export default App;
