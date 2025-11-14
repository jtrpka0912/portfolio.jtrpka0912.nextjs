import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import NavigationMobileComponent from './navigation-mobile';

const meta = {
	component: NavigationMobileComponent,
	title: 'Portfolio/Layout/Root Layout/Root Header/Navigation - Mobile'
} satisfies Meta<typeof NavigationMobileComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationMobile: Story = {
	args: {
		links: [
			{ id: 'home', href: "/", children: 'Home' },
			{ id: 'DuckDuckGo', href: 'https://www.duckduckgo.com', children: 'DuckDuckGo' }
		]
	},
	decorators: [
		(Story) => {
			return (
				<div style={{ display: 'inline-block', padding: '1em', backgroundColor: 'gray' }}>
					<Story />
				</div>
			)
		}
	]
};