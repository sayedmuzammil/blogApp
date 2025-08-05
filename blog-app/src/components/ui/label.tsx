import * as React from 'react';
import { Label } from 'radix-ui';
// import './styles.css';

interface LabelFormProps {
  type: string;
  title: string;
  id: string;
  placeholder?: string;
}

const LabelForm: React.FC<LabelFormProps> = ({
  type,
  title,
  id,
  placeholder,
}) => (
  <div className="flex flex-col items-start justify-start gap-4">
    {/* style={{
      display: 'flex',
      padding: '0 20px',
      flexWrap: 'wrap',
      gap: 15,
      alignItems: 'center',
    }}
 > */}
    <Label.Root className="LabelRoot" htmlFor={id}>
      {title}
    </Label.Root>
    <input
      className="Input"
      type={type}
      id={id}
      defaultValue=""
      placeholder={placeholder}
    />
  </div>
);

export default LabelForm;
