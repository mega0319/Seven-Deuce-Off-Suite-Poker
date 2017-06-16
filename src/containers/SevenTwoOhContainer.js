import React from 'react'
import { Route } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Game from '../components/Game'
import BoardContainer from '../containers/BoardContainer'

export default class SevenTwoOhContainer extends React.Component{
  constructor(){
    super()

    this.state = {
      users: []
    }
  }

  componentWillMount(){
    if(!sessionStorage.getItem('Authorization')){
      return this.props.history.push('/login')
    }
  }


  logOut(){
    sessionStorage.clear()
    this.props.history.push('/login')
  }

  render(){
    return(
      <div className="homepage">
        <NavBar logOut={() => this.logOut() }/>
        <Route exact path="/home/newgame" render={ () => <Game cableApp={this.props.cableApp}/> } />
        <Route exact path="/home/pokertables/:id" render={() => <BoardContainer cableApp={this.props.cableApp}/>} />
      </div>
    )
  }

}
