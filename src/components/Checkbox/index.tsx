import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'
import { ICheckboxProps } from '../../models/Checkbox';

export default function CheckBox(props: ICheckboxProps) {
  return (
    <CheckboxPrimitive.Root className='w-6 h-6 p-[2px] bg-gray-800 rounded' {...props}>
        <CheckboxPrimitive.Indicator asChild>
            <Check weight='bold' className='h-5 w-5 text-cyan-500' />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
} 
