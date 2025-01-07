import type { Meta, StoryObj } from '@storybook/react';
import SectionWelcome from '../components/SectionWelcome';

const meta: Meta<typeof SectionWelcome> = {
  title: 'Sections/Welcome',
  component: SectionWelcome,
};

export default meta;
type Story = StoryObj<typeof SectionWelcome>;

export const Default: Story = {
  args: {
    onNext: () => console.log('Next button clicked'),
  },
};