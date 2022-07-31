import { Flex, Heading, Box } from '@chakra-ui/react';
import Image from 'next/image';
import images from '@src/utils/images';
import Icon from '@src/components/Icon';
import colors from '@src/utils/colors';
import { IconList } from '@src/components/Icon/type';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ROUTERS = [
    {
        name: 'Informasi Akun',
        path: '/dashboard/account-info',
        icon: 'user' as IconList
    },
    {
        name: 'Request Saldo',
        path: '/dashboard/balance-request',
        icon: 'coin-dollar' as IconList
    },
    {
        name: 'Riwayat Request',
        path: '/dashboard/request-history',
        icon: 'copy' as IconList
    },
    {
        name: 'Transaksi',
        path: '/dashboard/transaction',
        icon: 'tab' as IconList
    },
    {
        name: 'Riwayat Transaksi',
        path: '/dashboard/transaction-history',
        icon: 'copy' as IconList
    },
]

const Sidebar = () => {
    const router = useRouter();
    return(
    <Flex flexDir='column' w='30vw' py='2rem' position='fixed' top={0} left={0} bg='linear-gradient(90deg, #2A47AA -14.83%, #8E9ED6 129.19%)'>
        <Flex justifyContent='center'>
            <Image src={images.logo} width={123} height={123} />
        </Flex>
        <Flex flexDir='column' gridGap='1rem' mt='3rem'>
            {ROUTERS.map((route, idx) => (
            <Link href={route.path} key={idx.toString()}>
            <Flex gridGap='1rem' alignItems='center' color={router.pathname === route.path ? colors.primaryBlue : colors.white} bg={router.pathname === route.path ? colors.secondaryBlue : colors.transparent} w='100%' px='2rem' h='2.5rem' borderRight={router.pathname === route.path ? `10px solid ${colors.primaryBlue}` : ''} cursor='pointer'>
                <Box>
                    <Icon name={route.icon} size={25} color={router.pathname === route.path ? colors.primaryBlue : colors.white} />
                </Box>
                <Heading fontSize='1.1em'>{route.name}</Heading>
            </Flex>
            </Link>
            ))}
        </Flex>
        <Flex w='100%' justifyContent='flex-end' px='2rem' mt='3rem'>
                <Flex alignItems='center' gridGap='1rem' color={colors.red} cursor='pointer'>
                    <Icon name='exit' size={25} color={colors.red}/>
                    <Heading>Keluar</Heading>
                </Flex>
        </Flex>
    </Flex>
    )
}

export default Sidebar;