import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Meta } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { moduleMetadata, Story } from '@storybook/angular';
import { OverviewPage } from 'src/app/pages/overview/overview.page';
import { EntriesViewComponentModule } from 'src/app/shared/components/entries-view/entries-view.module';
import { SwiperModule } from 'swiper/angular';

export default {
  title: 'Overview page',
  component: OverviewPage,
  decorators: [
    moduleMetadata({
      declarations: [OverviewPage],
      imports: [
        CommonModule,
        IonicModule.forRoot(),
        SwiperModule,
        HttpClientModule,
        RouterModule.forRoot([]),
        EntriesViewComponentModule
      ]
    })
  ]
} as unknown as Meta;

const story: Story<OverviewPage> = (args: OverviewPage) => ({
  component: OverviewPage,
  props: args
});

export const overview = story.bind({});

overview.args = {
  categories: [
    {
      icon: 'add-circle-outline',
      name: 'Savings'
    },
    {
      icon: 'notifications-circle-outline',
      name: 'Reminder'
    },
    {
      icon: 'notifications-circle-outline',
      name: 'Goals'
    }
  ]
};
