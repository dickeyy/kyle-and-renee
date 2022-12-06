import { Box, ChakraProvider, Spinner, Text } from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';
import React from 'react';
import theme from '../theme';

function GalleryPage () {
    return (
        <ChakraProvider theme={theme}>

                <Box h={'100vh'} >
                    <Text pos={'absolute'} top={5} left={5} zIndex={'hide'}>This will take a long time to load. Please be patient :)</Text>
                    <Spinner size={'xl'} pos={'absolute'} top={'50%'} left={'50%'} thickness={'thick'} zIndex={'hide'} />
                    <Text pos={'absolute'} top={'56%'} left={'48%'} fontSize={'3xl'} fontWeight={'900'} zIndex={'hide'}>Loading...</Text>
                    <Spline aria-hidden={'true'} scene="https://prod.spline.design/GUcilEfj09AN7-Zy/scene.splinecode" />
                </Box>

        </ChakraProvider> 
    )
}



export default GalleryPage