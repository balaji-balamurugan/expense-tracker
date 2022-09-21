/* eslint-disable @typescript-eslint/naming-convention */
import { IonicModule } from '@ionic/angular';
import { linkTo } from '@storybook/addon-links';
import { Meta, moduleMetadata, Story } from '@storybook/angular/';
import { DatePickerComponent } from 'src/app/shared/components/date-picker/date-picker.component';

export default {
  title: 'Date Picker',
  component: DatePickerComponent,
  decorators: [
    moduleMetadata({
      declarations: [DatePickerComponent],
      imports: [
        IonicModule.forRoot(),
      ]
    })
  ]
} as Meta;

const Template: Story<DatePickerComponent> = (args: DatePickerComponent) => ({
  component: DatePickerComponent,
  props: {
    ...args,
    entryClicked: linkTo('Button')
  },
});

export const datePicker = Template.bind({});
