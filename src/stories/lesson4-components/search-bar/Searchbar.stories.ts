
// const Template = (args: any, { argTypes }: any) => ({
//   props: Object.keys(argTypes),
//   components: { SearchBar },
//   template: '<SearchBar v-bind="$props" />',
// });

// export const Default = Template.bind({});
// Default.args = {};

// =================================================================
import type { Meta, StoryObj } from '@storybook/vue3';

// import * as SearchBar from "./Index.vue";
import SearchBar from "./SearchBar.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Components/SearchBar",
  component: SearchBar,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    btnBackgroundColor: { control: 'color' },
    btnLabelColor: { control: 'color' },
    searchInputWidth:  { 
        control: { 
            type: 'range', 
            min: 20, 
            max: 90 
        }  
    },

    // onClick: { action: 'clicked' },
  },
  args: {  }, // default value
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    buttonLabel: 'Search',
    inputPlaceholder: 'Quentin Tarantino',
  },
};
