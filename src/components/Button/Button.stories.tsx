import { Meta, StoryObj } from '@storybook/react'
import Button from './index'
import { IButtonProps } from '../../models/Button'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create acconunt'
    }
} as Meta<IButtonProps>

export const Default: StoryObj<IButtonProps> = { }