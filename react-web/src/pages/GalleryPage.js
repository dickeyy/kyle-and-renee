import { Box, ChakraProvider, Spinner, Text } from '@chakra-ui/react';
import Spline from '@splinetool/react-spline';
import React from 'react';
import theme from '../theme';

function GalleryPage () {
    
    const [isLoaded, setIsLoaded] = React.useState(true)

    console.log(isLoaded)

    return (
        <ChakraProvider theme={theme}>
            {
                isLoaded ? 

                <Box h={'100vh'} >
                    <Text pos={'absolute'} top={5} left={5}>This will take a long time to load. Be Patient</Text>
                    <Spline aria-hidden={'true'} onLoadStart={console.log('started loading')} onLoad={console.log('loaded')} onCanPlay={
                        () => {
                            console.log('can play')
                            setIsLoaded(true)
                        }
                    } scene="https://prod.spline.design/GUcilEfj09AN7-Zy/scene.splinecode" />
                </Box>

                :
                <Box h={'100vh'} textAlign={'center'} >
                    <Spinner size={'xl'} pos={'absolute'} top={'50%'} left={'50%'} thickness={'thick'} />
                    <Text pos={'absolute'} top={'56%'} left={'48%'} fontSize={'3xl'} fontWeight={'900'} >Loading...</Text>
                </Box>
            }
        </ChakraProvider> 
    )
}



export default GalleryPage