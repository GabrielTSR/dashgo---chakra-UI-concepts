import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSideBarDrawer } from '../../contexts/SidebarDrawerContext';
import { Logo } from '../Header/Logo';
import { NotificationsNav } from '../Header/NotificationsNav';
import { Profile } from '../Header/Profile';
import { SearchBox } from '../Header/SearchBox';
export function Header() {
    const { onOpen } = useSideBarDrawer();

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });
    return (
        <Flex w="100%" as="header" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
            {!isWideVersion && (
                <IconButton
                    variant="unstyled"
                    aria-label="Open navigation"
                    icon={<Icon as={RiMenuLine} fontSize="24" onClick={onOpen} mr="2" />}
                    mr="2"
                    pl="2"
                    pt="1.5"
                ></IconButton>
            )}

            <Logo />

            {isWideVersion && <SearchBox />}
            <Flex align="center" ml="auto">
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}
