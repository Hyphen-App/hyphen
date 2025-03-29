import type { Meta, StoryObj } from '@storybook/react';
import { ProjectDetail } from '../components/ProjectDetail';

const meta: Meta<typeof ProjectDetail> = {
  title: 'UI/ProjectDetail',
  component: ProjectDetail,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectDetail>;

export const Default: Story = {
  args: {
    title: 'HOME//HOME IS AN ODE TO THE TWO PLACES I FEEL MOST MYSELF',
    description: "WHAT I CALL HOME HAS CHANGED MUCH OVER TIME, AND I'VE REALIZED A CONSTANT: HOME IS NOT JUST A PHYSICAL SPACE, BUT A FEELING. THROUGH THESE EXPLORATIONS, I STRIVE TO FIND THE EXTRAORDINARY IN THE MUNDANE AND CAPTURE FLEETING MOMENTS THAT MIGHT OTHERWISE GO UNNOTICED. MY WORK IS CHARACTERIZED BY A STRONG EMPHASIS ON COLOR, TEXTURE, AND COMPOSITION.",
    images: [
      'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b',
      'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b',
      'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b',
      'https://images.unsplash.com/photo-1604537466608-109fa2f16c3b'
    ]
  },
};

export const SingleImage: Story = {
  args: {
    title: 'THE VIOLET CAFE',
    description: "A SERIES EXPLORING COLOR THEORY THROUGH ABSTRACT COMPOSITIONS. THIS PROJECT EXAMINES HOW DIFFERENT COLORS INTERACT AND CREATE EMOTIONAL RESPONSES IN VIEWERS.",
    images: [
      'https://images.unsplash.com/photo-1579546929518-9e396f3cc809'
    ]
  },
};
