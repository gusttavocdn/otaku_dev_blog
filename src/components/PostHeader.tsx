import { ChevronLeftIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Flex, Heading, Icon, Link } from '@chakra-ui/react';
import { GithubLogo, Buildings, Users } from 'phosphor-react';

export function PostHeader() {
  return (
    <Flex
      mt={100}
      w='864px'
      maxW='864px'
      h={'212px'}
      bg={'base.profile'}
      borderRadius={'lg'}
      p={8}
    >
      <Flex justifyContent='space-around' flexDir='column' w='full'>
        <Flex justifyContent={'space-between'}>
          <Link textAlign='center'>
            <ChevronLeftIcon mb={1} ml={1} boxSize={5} />
            Voltar
          </Link>
          <Link textAlign='center'>
            Github
            <ExternalLinkIcon mb={1} ml={1} boxSize={5} />
          </Link>
        </Flex>

        <Heading>Plataforma Github</Heading>

        <Flex as='footer' gap='1.5rem' alignItems='center'>
          <Flex as='span' justifyContent='center' alignItems='center' gap={1}>
            <Icon as={GithubLogo} /> gusttavocdn
          </Flex>
          <Flex as='span' justifyContent='center' alignItems='center' gap={1}>
            <Icon as={Buildings} /> Trybe
          </Flex>
          <Flex as='span' justifyContent='center' alignItems='center' gap={1}>
            <Icon as={Users} /> 10 Followers
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
