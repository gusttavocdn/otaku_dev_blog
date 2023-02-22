import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Flex, Heading, Icon, Link, Image, Text } from '@chakra-ui/react';
import { GithubLogo, Buildings, Users } from 'phosphor-react';

export function HomeHeader() {
  return (
    <Flex
      mt={100}
      maxW={'864px'}
      h={'212px'}
      bg={'base.profile'}
      borderRadius={'lg'}
      p={8}
    >
      <Image
        src='https://github.com/gusttavocdn.png'
        boxSize={'148px'}
        alt='Adm sentado em um muro'
        borderRadius={'lg'}
      />
      <Flex ml={5} justifyContent='space-around' flexDir='column'>
        <Flex justifyContent={'space-between'}>
          <Heading fontSize='2xl' color={'base.title'}>
            Gustavo Silva
          </Heading>
          <Link textAlign='center'>
            Github
            <ExternalLinkIcon mb={1} ml={1} boxSize={5} />
          </Link>
        </Flex>

        <Text>
          Desenvolvedor FullStack. Completamente apaixonado por técnologia,
          animes e esportes.
        </Text>
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
