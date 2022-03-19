import { Avatar, Box, Flex, HStack, Icon, Text } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Gabriel Tavares</Text>
                    <Text color="gray.300" fontSize="small">
                        gabrielalvesrocha22@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar size="md" name="Gabriel Tavares" src="https://github.com/GabrielTSR.png" />
        </Flex>
    );
}
