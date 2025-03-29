import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../components/Header';

const meta: Meta<typeof Header> = {
    title: 'Layout/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {
        isLoggedIn: {
            control: 'boolean',
        },
        currentPage: {
            control: { type: 'select' },
            options: ['home', 'profile', 'project'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedOut: Story = {
    args: {
        isLoggedIn: false,
        currentPage: 'home',
    },
};

export const LoggedIn: Story = {
    args: {
        isLoggedIn: true,
        currentPage: 'home',
    },
};

export const ProfilePage: Story = {
    args: {
        isLoggedIn: true,
        currentPage: 'profile',
    },
};

export const ProjectPage: Story = {
    args: {
        isLoggedIn: true,
        currentPage: 'project',
    },
};
