import React, { useState } from 'react';
import { Container } from 'reactstrap';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { Row, Col, } from 'antd';
import CustomColumn from '../CustomColumn'
import Navigation from '../Navigation'
import Switch from '@material-ui/core/Switch';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './usersetting.css'
const { Option } = Select
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 10 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const UserSettings = (props) => {
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const [darkMode, setDarkMode] = useState(false)
    const theme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light'
        }
    })
    return (
        <div>
            <Navigation /><br /><br /><br /><br />
            <Container fluid className={darkMode ? 'dark-mode' : ''}>
                <Row className="user-configuration-header-container " type="flex" justify="space-between">
                    <CustomColumn>
                        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
                        <text className="user-configuration-header-label margin-left flex-one">User Settings</text>
                    </CustomColumn>
                </Row><br /><br /><br />
                <Form
                    {...layout}
                    name="basic"
                    // initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label={< label >Previous Password</label>}
                        name="previouspassword"
                        rules={[{ required: true, message: 'Please input your previous password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label={< label >New Password</label>}
                        name="newpassword"
                        rules={[{ required: true, message: 'Please input your new password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label={< label >Confirm Password</label>}
                        name="cofirmpassword"
                        rules={[{ required: true, message: 'Please confirm your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Security Questions"
                        name="securityquestions"
                        rules={[{ required: true }]}
                    >
                        <Select defaultValue="a" style={{ width: 550 }}>
                            <Option value="b">What was the house number and street name you lived in as a child?</Option>
                            <Option value="a">What were the last four digits of your childhood telephone number?</Option>
                            <Option value="c">What primary school did you attend?</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Answer"
                        name="answer"
                        rules={[{ required: true, message: 'Please enter an answer!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Security Questions"
                        name="securityquestions"
                        rules={[{ required: true }]}
                    >
                        <Select defaultValue="4" style={{ width: 550 }}>
                            <Option value="4">In what town or city was your first full time job?</Option>
                            <Option value="5">In what town or city did you meet your spouse or partner?</Option>
                            <Option value="6">What is the middle name of your oldest child?</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Answer"
                        name="answer"
                        rules={[{ required: true, message: 'Please enter an answer!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Security Questions"
                        name="securityquestions"
                        rules={[{ required: true }]}
                    >
                        <Select defaultValue="7" style={{ width: 550 }}>
                            <Option value="7">What are the last five digits of your driver's license number?</Option>
                            <Option value="8">What is your grandmother's (on your mother's side) maiden name?</Option>
                            <Option value="9">What is your spouse or partner's mother's maiden name?</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Answer"
                        name="answer"
                        rules={[{ required: true, message: 'Please enter an answer!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Security Questions"
                        name="securityquestions"
                        rules={[{ required: true }]}
                    >
                        <Select defaultValue="10" style={{ width: 550 }}>
                            <Option value="10">In what town or city did your parents meet?</Option>
                            <Option value="11">What time of the day were you born? (hh:mm)</Option>
                            <Option value="12">What time of the day was your first child born? (hh:mm)</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Answer"
                        name="answer"
                        rules={[{ required: true, message: 'Please enter an answer!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Security Questions"
                        name="securityquestions"
                        rules={[{ required: true }]}
                    >
                        <Select defaultValue="13" style={{ width: 550 }}>
                            <Option value="13">In what city or town was your first job?</Option>
                            <Option value="14">What is the name of the place your wedding reception was held?</Option>
                            <Option value="15">What is the name of a college you applied to but didn't attend?</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Answer"
                        name="answer"
                        rules={[{ required: true, message: 'Please enter an answer!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Done
        </Button>
                    </Form.Item>
                </Form>
            </Container>
        </div >
    )
}

export default UserSettings   