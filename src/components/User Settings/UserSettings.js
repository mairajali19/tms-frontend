import React from 'react';
import { Container } from 'reactstrap';
import { Form, Input, Button, Checkbox, Select } from 'antd';
import { Row, Col, } from 'antd';
import CustomColumn from '../CustomColumn'
import Navigation from '../Navigation'
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
    return (
        <div>
            <Navigation /><br /><br /><br /><br />
            <Container fluid>
                <Row className="user-configuration-header-container " type="flex" justify="space-between">
                    <CustomColumn>
                        <text className="user-configuration-header-label margin-left flex-one">User Settings</text>
                    </CustomColumn>
                </Row><br /><br /><br />
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Previous Password"
                        name="previouspassword"
                        rules={[{ required: true, message: 'Please input your previous password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="New Password"
                        name="newpassword"
                        rules={[{ required: true, message: 'Please input your new password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="cofirmpassword"
                        rules={[{ required: true, message: 'Please confirm your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Security Questions"
                        name="securityquestions"
                        rules={[{ required: true}]}
                    >
                        <Select defaultValue="lucy" style={{ width: 620 }}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
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
        </div>
    )
}

export default UserSettings   