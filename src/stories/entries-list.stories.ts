/* eslint-disable @typescript-eslint/naming-convention */
import { IonicModule } from '@ionic/angular';
import { Meta, moduleMetadata, Story } from '@storybook/angular/';
import { EntriesViewComponent } from 'src/app/shared/components/entries-view/entries-view.component';

export default {
  title: 'Entries list Component',
  component: EntriesViewComponent,
  decorators: [
    moduleMetadata({
      declarations: [EntriesViewComponent],
      imports: [
        IonicModule.forRoot()
      ]
    })
  ]
} as Meta;

const Template: Story<EntriesViewComponent> = (args: EntriesViewComponent) => ({
  component: EntriesViewComponent,
  props: args,
});

export const Primary = Template.bind({});

Primary.args = {
  name: 'Hello',
  date: new Date().toISOString(),
  paymentMethod: 'Gpay'
};

