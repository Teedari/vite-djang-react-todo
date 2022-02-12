import { faCubes, faPaperPlane, faSearch, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Avatar, Button, Card, Form, Input, Space, Typography } from 'antd'
import React from 'react'
import MobileLayout from '../../layout'

const Homepage = () => {
  return (
    <MobileLayout >
      <div className='homepage'>
        <div className='d-flex align-items-center justify-content-between py-2'>
          <p>Welcome Back! <br /> <strong>Here's Update Today.</strong></p>
          <Avatar size='large' icon={<FontAwesomeIcon icon={faSearch} />} />
        </div>
        <Space size="medium">
          <Button shape='round'>Today</Button>
          <Button shape='round'>Upcoming</Button>
          <Button shape='round'>Task Done</Button>
        </Space>
        <br/>
        <Card  className='my-2'>
          <Typography>Sit veniam do labore culpa voluptate proident.</Typography>
        </Card>
        <Card  className='my-2'>
          <Typography>Sit veniam do labore culpa voluptate proident.</Typography>
        </Card>
        <Card  className='my-2'>
          <Typography>Sit veniam do labore culpa voluptate proident.</Typography>
        </Card>
        <Card  className='my-2'>
          <Typography>Sit veniam do labore culpa voluptate proident.</Typography>
        </Card>
        <Card  className='my-2'>
          <Typography>Sit veniam do labore culpa voluptate proident.</Typography>
        </Card>
      </div>
          {/* <Form>
            <Input suffix={<FontAwesomeIcon icon={faPaperPlane} />}/>
          </Form> */}
    </MobileLayout>
  )
}

export default Homepage