import { Button, Link as ChakraLink, Menu } from '@chakra-ui/react';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const MainHeaderNavigationMobile = () => {
	return (
		<Menu.Root>
			<Menu.Trigger asChild>
				<Button variant="outline" size="lg">
					<FontAwesomeIcon icon={faBars} />
				</Button>
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
	);
};

export default MainHeaderNavigationMobile;