import React, { useState } from 'react';
import './Profile.css';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
} from 'antd';

const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo: React.FC = () => {
  const [] = useState<boolean>(true);

  return (
    <>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: 600 }}
      >
        <h1>Profile </h1>
        <h3>Personal Identification</h3> <br />
        <Form.Item
          label="Profile Picture"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="First Name ">
          <Input />
        </Form.Item>
        <Form.Item label="Middle Name ">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name ">
          <Input />
        </Form.Item>
        <Form.Item label="Date of Birth">
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Govt ID"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <h3>Contact Information</h3> <br />
        <Form.Item label="Email ID">
          <Input />
        </Form.Item>
        <Form.Item label="Phone ">
          <Input />
        </Form.Item>
        <Form.Item label="Home Adress ">
          <Input />
        </Form.Item>
        <h3>Professional Information</h3> <br />
        <Form.Item label="Occupation ">
          <Input />
        </Form.Item>
        <Form.Item label="Educational Qualification">
          <Input />
        </Form.Item>
        <Form.Item label="Subject Teacher">
          <Select>
            <Select.Option value="demo">Science</Select.Option>
            <Select.Option value="demo">Arts </Select.Option>
            <Select.Option value="demo">Commerce</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Grade Taught">
          <Input />
        </Form.Item>
        <Form.Item
          label="Workplace ID"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button style={{ border: 0, background: 'none' }} type="button">
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
       
        <Form.Item label="Years of Experience">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Short Bio">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      </Form>
    </>
  );
};

export default () => <FormDisabledDemo />;

