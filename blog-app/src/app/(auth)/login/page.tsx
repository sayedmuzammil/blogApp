// import { Label } from '@radix-ui/react-label';
import React from 'react';
import LabelDemo from '@/components/ui/label';
import { Form } from 'radix-ui';
import { Button } from '@/components/ui/button';

const inputFields = [
  {
    type: 'email',
    id: 'email',
    title: 'Email',
    placeholder: 'Enter your email',
    valueMissing: 'Please enter your email.',
    typeMismatch: 'Please enter a valid email address.',
  },
  {
    type: 'password',
    title: 'Password',
    id: 'password',
    placeholder: 'Enter your password',
    valueMissing: 'Please enter your password.',
  },
];

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen bg-var[--color-background] dark:bg-var[--colordarkBackground]">
      <div className="w-[345px] h-[400px] flex items-center justify-center p-6 gap-5 border-2 border-dashed border-gray-300 dark:border-gray-600">
        <Form.Root className="FormRoot">
          {inputFields.map((field) => (
            <Form.Field key={field.id} name={field.id}>
              <Form.Label>{field.title}</Form.Label>
              <Form.Message match="valueMissing" className="text-red-500">
                {field.valueMissing}
              </Form.Message>
              <Form.Control asChild>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                />
              </Form.Control>

              {field.typeMismatch && (
                // Only show typeMismatch message if it exists
                <Form.Message match="typeMismatch">
                  {field.typeMismatch}
                </Form.Message>
              )}
            </Form.Field>
          ))}

          <Form.Submit asChild>
            <Button variant="default" type="submit">
              Login
            </Button>
          </Form.Submit>
        </Form.Root>
      </div>
    </div>
  );
};

export default LoginPage;
