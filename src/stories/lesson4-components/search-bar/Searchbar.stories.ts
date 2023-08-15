import * as SearchBar from "./Index.vue";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
};

const Template = (args: any, { argTypes }: any) => ({
  props: Object.keys(argTypes),
  components: { SearchBar },
  template: '<SearchBar v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {};
