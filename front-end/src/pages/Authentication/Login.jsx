import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from 'assets/FlexFormsLogoNoText.png';
import {RESET} from 'navigation/CONSTANTS'

export const Login = () => {
    return (
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' color='black' textAlign='center'>
                    <Image src={logo} /> Log-in to your account
                </Header>
            <Form size='large'>
                <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                />
                <Button color='black' fluid size='large'>
                    Login
                </Button>
                </Segment>
            </Form>
            <Message>
                Forgot Password? <a href={RESET}>Reset Password</a>
            </Message>
        </Grid.Column>
    </Grid>
    )
}