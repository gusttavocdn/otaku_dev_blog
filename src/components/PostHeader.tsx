import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Flex, Heading, Icon } from '@chakra-ui/react';
import { GithubLogo, Buildings, Users } from 'phosphor-react';
import { Link } from './Link';

type Props = {
  title: string;
  user: {
    login: string;
  };
  comments: number;
};

export function PostHeader({ title, user, comments }: Props) {
  return (
    <Flex
      mt={100}
      maxW='864px'
      w='full'
      bg={'base.profile'}
      borderRadius={'lg'}
      p={8}
    >
      <Flex justifyContent='space-around' flexDir='column' w='full'>
        <Flex justifyContent={'space-between'} mb={5}>
          <Link to='/'>
            <ChevronLeftIcon mb={1} ml={1} boxSize={5} />
            Voltar
          </Link>
          <Link to='https://github.com/gusttavocdn'>
            Github
            <ExternalLinkIcon mb={1} ml={1} boxSize={5} />
          </Link>
        </Flex>

        <Heading mb={5} textAlign={{ base: 'center', md: 'start' }}>
          {title}
        </Heading>

        <Flex
          as='footer'
          gap='1.5rem'
          alignItems='center'
          flexDir={{ base: 'column', md: 'row' }}
        >
          <Flex as='span' justifyContent='center' alignItems='center' gap={1}>
            <Icon as={GithubLogo} /> {user.login}
          </Flex>
          <Flex as='span' justifyContent='center' alignItems='center' gap={1}>
            <Icon as={Buildings} /> Trybe
          </Flex>
          <Flex as='span' justifyContent='center' alignItems='center' gap={1}>
            <Icon as={Users} /> {comments}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
