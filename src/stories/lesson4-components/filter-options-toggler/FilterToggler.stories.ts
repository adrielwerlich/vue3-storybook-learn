import type { Meta, StoryObj } from '@storybook/vue3';
import Toggler from './SearchFilter.vue';
import {ButtonAStandard, ButtonBStandard} from './DefaultValues.js';
// import ButtonBStandard from './DefaultValues.js';

console.log(ButtonAStandard, ButtonBStandard, "1234")

const meta = {
  title: 'Components/Toggler',
  component: Toggler,
  tags: ['autodocs'],
  argTypes: {
    buttonA: { control: 'object' }, // Use control: 'object' for object props
    buttonB: { control: 'object' }, // Use control: 'object' for object props
  },
} as Meta<typeof Toggler>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filterLabel: 'SEARCH BY',
    buttonA: ButtonAStandard,
    buttonB: ButtonBStandard,
  },
};


