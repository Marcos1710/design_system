import { Meta, StoryObj } from '@storybook/react'
import Checkbox from './index'
import { ICheckboxProps } from '../../models/Checkbox'
import Text from '../Text'

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        children: 'Checkbox'
    },
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text>Lembrar de mim</Text>
                </div>
            )
        }
    ]
} as Meta<ICheckboxProps>

export const Default: StoryObj<ICheckboxProps> = { }
