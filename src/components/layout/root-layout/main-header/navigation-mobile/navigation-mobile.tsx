import { Box, Link as ChakraLink, IconButton, Menu } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

/**
 * @function NavigationMobile
 * @summary Navigation Component for the Root Header on Mobile Screens
 * @description A simple drop-down menu that has navigation links for the portfolio website. This is only for small screens.
 * @author J. Trpka <jtrpka0912@gmail.com>
 * @returns {React.ReactNode}
 */
const NavigationMobile = (): React.ReactNode => {
	return (
		<Box hideFrom="lg">
			<Menu.Root>
				<Menu.Trigger asChild>
					<IconButton variant="outline" size="lg" colorPalette="blue" color="blue.subtle" _hover={{ color: 'blue.solid' }}>
						<FontAwesomeIcon icon={faBars} />
					</IconButton>
				</Menu.Trigger>

				<Menu.Positioner>
					<Menu.Content>
						<Menu.Item asChild value="link-to-home">
							<ChakraLink asChild>
								<Link href="/">Home</Link>
							</ChakraLink>
						</Menu.Item>
					</Menu.Content>
				</Menu.Positioner>
			</Menu.Root>
		</Box>
	);
};

export default NavigationMobile;