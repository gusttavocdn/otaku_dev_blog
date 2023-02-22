import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Flex, Heading, Icon, Image, Text } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { GithubLogo, Buildings, Users } from 'phosphor-react';
import { getProfile } from '../services/getProfile';
import { Link } from './Link';

export function HomeHeader() {
  const { data } = useQuery(
    ['profile'],
    async () => await getProfile('gusttavocdn')
  );

  if (!data) return null;

  return (
    <Flex
      mt={100}
      w='864px'
      maxW='864px'
      h='212px'
      bg='base.profile'
      borderRadius='lg'
      p={8}
    >
      <Image
        src={data?.avatar_url}
        boxSize={'148px'}
        alt='Adm sentado em um muro'
        borderRadius={'lg'}
      />
      <Flex ml={5} justifyContent='space-around' flexDir='column' w='full'>
        <Flex justifyContent='space-between'>
          <Heading fontSize='2xl' color={'base.title'}>
            {data?.name}
          </Heading>
          <Link to='https://github.com/gusttavocdn'>
            Github
            <ExternalLinkIcon mb={1} ml={1} boxSize={5} />
          </Link>
        </Flex>

        <Text>{data?.bio}</Text>
        <Flex as='footer' gap='1.5rem' alignItems='center'>
          <Flex as='span' justifyContent='center' alignItems='center' gap={1}>
            <Icon as={GithubLogo} /> {data?.login}
          </Flex>
          <Flex as='span' justifyContent='center' alignItems='center' gap={1}>
            <Icon as={Buildings} /> {data?.company}
          </Flex>
          <Flex as='span' justifyContent='center' alignItems='center' gap={1}>
            <Icon as={Users} /> {data?.followers} Followers
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
