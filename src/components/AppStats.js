import React, { Component } from 'react';
import './AppStats.css'
class App extends Component {
  render() {
    const { selectedUser } = this.props
    return (<div className="stats">
      <div className="bio">
        <p>Motto：{selectedUser.bio}</p>
      </div>
      <div>
        <span className="desc">关注数 </span><br />
        <span className="lg">{selectedUser.followers}</span>
      </div>
      <div>
        <span className="desc">浏览量 </span><br />
        <span className="lg">{selectedUser.following}</span>
      </div>
    </div>

    )
  }
}

export default App;
