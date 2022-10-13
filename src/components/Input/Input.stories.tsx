import { Meta, StoryObj } from '@storybook/react'
import { TextInput } from './index'
import { IInputRootProps } from '../../models/Input'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/Input',
    component: TextInput.Root,
    args: { 
        children: (
            <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder='Digite aqui o seu texto...' />
            </>
        )
    }
} as Meta<IInputRootProps>

export const Default: StoryObj<IInputRootProps> = { }

export const WithoutIcon: StoryObj<IInputRootProps> = {
    args: { 
        children: (
            <TextInput.Input placeholder='Digite aqui o seu texto...' />
        )
    }
}