import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react'

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item as={Link} name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            position='right'
            as={Link}
            name='Login'
            active={activeItem === 'Login'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    )
  }
}
