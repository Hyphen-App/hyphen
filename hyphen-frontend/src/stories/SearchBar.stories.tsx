// components/SearchBar.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from '../components/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'UI/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    buttonText: {
      control: 'text',
      description: 'Text for the search button',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    onSearch: {
      action: 'searched',
      description: 'Callback when search is submitted',
    },
  },
  args: {
    buttonText: 'GET INSPIRED',
    placeholder: 'Search film, photography, mechanical keyboards, pottery, etc.',
  },
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

export const CustomButtonText: Story = {
  args: {
    buttonText: 'SEARCH NOW',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Search for anything...',
  },
};