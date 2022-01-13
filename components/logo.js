import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-sizw: 18px;
display: inline-flex'
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

&:hover img {
    transform: rotate(20deg);
}
`

export default function Logo() {
  const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image
            src={footPrintImg}
            width={20}
            height={20}
            loading="lazy"
            objectFit="cover"
            alt="logo"
          />
          <Text
            color={userColorValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1C"
            fontWeight={'bold'}
            ml={3}
          ></Text>
          Janvi.
        </LogoBox>
      </a>
    </Link>
  )
}
