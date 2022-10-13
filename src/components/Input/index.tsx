import { IInputProps, IInputRootProps, IInputIconsProps } from '../../models/Input'
import { Slot } from '@radix-ui/react-slot';

function InputRoot({ children }: IInputRootProps) {
    return (
        <div className='flex items-center gap-3 py-4 px-3 bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
            {children}
        </div>
    )
}

function InputIcon({ children }: IInputIconsProps) {
    return (
        <Slot className="w-6 h-6 text-gray-400">
            {children}
        </Slot>
    )
}

function Input(props: IInputProps) {
   return (
        <input {...props} className="bg-transparent flex-1 text-gray-100 text-xs placeholder: text-gray-400 outline-none" />
   )
}

InputIcon.displayName = 'InputIcon'

export const TextInput = {
    Root: InputRoot,
    Input: Input,
    Icon: InputIcon
}