import type { Meta, StoryObj } from '@storybook/react';
import { UserProfile } from '../components/UserProfile';

const meta: Meta<typeof UserProfile> = {
  title: 'UI/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UserProfile>;

export const Default: Story = {
  args: {
    name: 'TANYA JAIN',
    bio: "I'M A PHOTOGRAPHER - POTTER - CRAFTER - READER - EXPLORER\n\nMY FOCUS RANGES FROM ABSTRACT FLUID FORMS AND TEXTURES TO EVERYDAY OBJECTS THAT TELL A STORY. THROUGH THESE EXPLORATIONS, I STRIVE TO FIND THE EXTRAORDINARY IN THE MUNDANE AND CAPTURE FLEETING MOMENTS THAT MIGHT OTHERWISE GO UNNOTICED. MY WORK IS CHARACTERIZED BY A STRONG EMPHASIS ON COLOR, TEXTURE, AND COMPOSITION.",
    contact: {
      instagram: 'example',
      email: 'tanya@example.com',
      website: 'https://example.com',
      linkedin: 'https://linkedin.com/in/example'
    }
  },
};

export const MinimalContact: Story = {
  args: {
    name: 'ALEX RIVERA',
    bio: "VISUAL ARTIST SPECIALIZING IN DIGITAL ILLUSTRATIONS AND MIXED MEDIA COMPOSITIONS. MY WORK EXPLORES THE INTERSECTION OF TECHNOLOGY AND TRADITIONAL ART FORMS.",
    contact: {
      instagram: 'example',
      email: 'alex@example.com'
    }
  },
};
