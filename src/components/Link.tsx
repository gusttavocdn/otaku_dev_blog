import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
};

export function Link({ children, to }: Props) {
  return (
    <ChakraLink
      as={RouterLink}
      to={to}
      textAlign='center'
      color='blue'
      fontWeight='bold'
    >
      {children}
    </ChakraLink>
  );
}
