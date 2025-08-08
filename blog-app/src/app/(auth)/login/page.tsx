'use client';

import React from 'react';
import { Form } from 'radix-ui';
import { Button } from '@/components/ui/button';
import { unstable_PasswordToggleField as PasswordToggleField } from 'radix-ui';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';

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
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[var(--color-background)] dark:bg-var[--colordarkBackground]">
      <div
        className="w-[345px] flex flex-col items-start justify-between p-6 border-2 
      border-[var(--color-border)] shadow-lg dark:border-[var(--color-border)] rounded-2xl"
      >
        <div className="text-md font-bold ">Sign In</div>
        <Form.Root className="FormRoot w-full">
          {inputFields.map((field) => (
            <Form.Field key={field.id} name={field.id}>
              <div className="flex flex-col gap-1 mt-5">
                <div className="flex flex-row justify-between gap-2">
                  <Form.Label className="text-sm font-semibold">
                    {field.title}
                  </Form.Label>
                  <Form.Message
                    match="valueMissing"
                    className="text-red-500 text-xs"
                  >
                    {field.valueMissing}
                  </Form.Message>

                  {field.typeMismatch && (
                    // Only show typeMismatch message if it exists
                    <Form.Message
                      match="typeMismatch"
                      className="text-red-500 text-xs"
                    >
                      {field.typeMismatch}
                    </Form.Message>
                  )}
                </div>
                <Form.Control asChild>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-3 py-2 border border-[var(--color-border)] rounded-2xl "
                  />
                </Form.Control>
              </div>
            </Form.Field>
          ))}

          <Form.Submit asChild>
            <Button variant="default" type="submit" className="mt-6">
              Login
            </Button>
          </Form.Submit>
        </Form.Root>
        <div className="flex items-center justify-center w-full mt-4">
          <div className="text-sm">
            Dont have an account?{' '}
            <span>
              <a
                href="/register"
                className="text-[var(--color-secondary)] underline text-sm font-semibold"
              >
                Register
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
