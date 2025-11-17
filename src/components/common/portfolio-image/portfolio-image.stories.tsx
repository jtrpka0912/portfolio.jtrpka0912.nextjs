import type { Meta, StoryObj } from '@storybook/nextjs';

import PortfolioImageComponent from './portfolio-image';
import React from 'react';

const meta = {
  component: PortfolioImageComponent,
  title: 'Portfolio/Common/Utilities/Portfolio Image'
} satisfies Meta<typeof PortfolioImageComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PortfolioImage: Story = {
  args: {
    src: 'http://www.pushdesignni.com/wp-content/uploads/bfi_thumb/puffer-msiovvffhym12h73w395tq06nwrr6sderztc1bwsf8.jpg',
    alt: 'Angry Pufferfish :D',
    width: 500,
    height: 500
  }
};
export const FilledPortfolioImage: Story = {
  args: {
    src: 'http://www.pushdesignni.com/wp-content/uploads/bfi_thumb/puffer-msiovvffhym12h73w395tq06nwrr6sderztc1bwsf8.jpg',
    alt: 'Angry Pufferfish :D',
    fill: true
  },
  decorators: [
    (Story) => (
      <React.Fragment>
        <div style={{ position: 'relative', width: '250px', height: '250px' }}>
          <Story />
        </div>

        <p style={{
          paddingTop: '1rem',
          fontStyle: 'italic'
        }}>The parent element is (and must be at least) relative positioned and 250px by 250px in size.</p>
      </React.Fragment>
    )
  ]
};