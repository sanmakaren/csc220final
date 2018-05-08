import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
  Grid,
  Image,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react'

/*
 * Landing Page UI, using Semantic UI
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <center> <img alt='' src={require('./Logo.png')}/> </center>
    <Header
      as='h2'
      content={""}
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />

  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
          <Segment inverted textAlign='center' style={{ minHeight: 810, padding: '1em 0em' }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item position='right'>
                  <Button as={Link} to='/signin' inverted={!fixed}>Log in</Button>
                  <Button as={Link} to='/signup' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as={Link} to='/signin'>Log in</Menu.Item>
            <Menu.Item as={Link} to='/signup'>Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened} onClick={this.handlePusherClick} style={{ minHeight: '100vh' }}>
            <Segment inverted textAlign='center' style={{ minHeight: 350, padding: '1em 0em' }} vertical>
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as={Link} to='/signin' inverted>Log in</Button>
                    <Button as={Link} to='/signup' inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
  <Segment style={{ padding: '8em 0em' }} vertical>
  <Grid container stackable verticalAlign='middle'>
    <Grid.Row>
      <Grid.Column width={8}>

      <Header as='h3' style={{ fontSize: '2em' }}> {"Our Mission"}</Header>
      <p style={{ fontSize: '1.33em' }}>
        {"1. To get you used to writing down your thoughts."}
      </p>
      <p style={{ fontSize: '1.33em' }}>
        {"These journal topics aren’t too serious/personal, so beginners won’t feel intimidated by them. You can use these non-invasive prompts to start working towards your journaling goals."}
      </p>
      <p style={{ fontSize: '1.33em' }}>
        {"2. To introduce you to ‘stream-of-consciousness’ writing"}
      </p>
      <p style={{ fontSize: '1.33em' }}>
        {".....which is writing down all your thoughts as they come to you, without stopping/editing. This technique allows you to deeply explore your own thoughts."}
      </p>

      </Grid.Column>
      <Grid.Column floated='right' width={6}>
        <Image
          bordered
          rounded
          size='medium'
        src={require('./Home.png')}        />
      </Grid.Column>
    </Grid.Row>

  </Grid>
</Segment>

  </ResponsiveContainer>
)

export default HomepageLayout
