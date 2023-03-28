import { Box, Button, ChakraProvider, Heading, Text } from "@chakra-ui/react";
import React from "react";
import theme from "../theme";
import Confetti from 'react-confetti'
import { Fireworks } from 'fireworks/lib/react'
import { NavLink } from "react-router-dom";

function HomePage () {

    const [anniversary] = React.useState(new Date('May 17, 2022 12:50:00 GMT+00:00'))
    const [goldenAnniversary] = React.useState(new Date() === new Date('May 17, 2072 12:50:00 GMT+00:00'))

    const [welcomeMessage, setWelcomeMessage] = React.useState()

    const [yearsDating, setYearsDating] = React.useState()
    const [monthsDating, setMonthsDating] = React.useState()
    const [daysDating, setDaysDating] = React.useState()
    const [hoursDating, setHoursDating] = React.useState()
    const [minutesDating, setMinutesDating] = React.useState()
    const [secondsDating, setSecondsDating] = React.useState()

    const [showConfetti, setShowConfetti] = React.useState(false)
    const [confettiColorList, setConfettiColorList] = React.useState(['#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093', '#C71585', '#FFC0CB', '#FFB6C1', '#FF69B4', '#FF1493', '#DB7093',])

    let fxProps = {
        count: 1,
        interval: 1000,
        colors: confettiColorList,
        // CENTER THE FIREWORKS
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    }

    React.useEffect(() => {
        const welcomeList = ['Yo', 'Hello', "What's up?", "Hi", "Heyy", "Hey Cutie", "What's Shakin'?", "WYD?", "i love you", "AHHHHH", "Fard"]
        const welcomeEmoji = ['👋', '😎', '😀', '😘', '😌', '🥶', '🥳', '❤️', '💨', '🦶', '🫶']

        const randomMessage = Math.floor(Math.random() * welcomeList.length)
        const randomEmoji = Math.floor(Math.random() * welcomeEmoji.length)

        setWelcomeMessage(`${welcomeList[randomMessage]} ${welcomeEmoji[randomEmoji]}`)

        // Detect if today is the anniversary or is a monthaversary
        const today = new Date();
        const todayMonth = today.getMonth();
        const todayDay = today.getDate();

        const anniversaryMonth = anniversary.getMonth();
        const anniversaryDay = anniversary.getDate();

        const isAnniversary = todayMonth === anniversaryMonth && todayDay === anniversaryDay;
        const isMonthaversary = todayMonth !== anniversaryMonth && todayDay === anniversaryDay;

        if (isAnniversary || isMonthaversary) {
            // Set off the confetti
            setShowConfetti(true)
        }

        // Detect if today is the golden anniversary
        if (goldenAnniversary) {
            setConfettiColorList(['#A67C00', '#FFBF00', '#FFD447', '#FFE878', '#BF9B30'])
            setShowConfetti(true)
        }


    }, [anniversary, goldenAnniversary])

    // Run this function continuously
    React.useEffect(() => {
        const interval = setInterval(() => {
            const minute = 1000 * 60;
            const hour = minute * 60;
            const day = hour * 24;
            const year = day * 365;
            
            // Calculate the exact number of years down to the 2nc decimal place since the anniversary and now
            const years = Math.floor((new Date() - anniversary) / year * 100) / 100;

            // Calculate the exact number of months down to the 2nc decimal place since the anniversary and now
            const months = Math.floor((new Date() - anniversary) / (year / 12) * 100) / 100;

            // Calculate the exact number of days down to the 2nc decimal place since the anniversary and now
            const days = Math.floor((new Date() - anniversary) / day * 100) / 100;

            // Calculate the exact number of hours down to the 2nc decimal place since the anniversary and now
            const hours = Math.floor((new Date() - anniversary) / hour * 100) / 100;

            // Calculate the exact number of minutes down to the 2nc decimal place since the anniversary and now
            const minutes = Math.floor((new Date() - anniversary) / minute * 100) / 100;

            // Calculate the exact number of seconds down to the to the whole number since the anniversary and now
            const seconds = Math.floor((new Date() - anniversary) / 1000 * 100) / 100;

            // Format each to a string with commas
            const yearsString = years.toLocaleString();
            const monthsString = months.toLocaleString();
            const daysString = days.toLocaleString();
            const hoursString = hours.toLocaleString();
            const minutesString = minutes.toLocaleString();
            const secondsString = seconds.toLocaleString();

            // Set the state of each
            setYearsDating(yearsString)
            setMonthsDating(monthsString)
            setDaysDating(daysString)
            setHoursDating(hoursString)
            setMinutesDating(minutesString)
            setSecondsDating(secondsString)
            }, 0);
        return () => clearInterval(interval);
    }, [anniversary]);

    return (
        <ChakraProvider theme={theme}>
            
            {showConfetti && 
                <>
                    <Confetti 
                        width={window.innerWidth}
                        height={window.innerHeight}
                        colors={confettiColorList}
                        numberOfPieces={800}
                        

                    />

                    <Fireworks {...fxProps} />
                </>
            
            }

            <Box
                // Vertically and Horizontally Centered
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                width="100vw"
                backgroundColor={'blackAlpha.200'}
                flexDirection="column"
            >
                <Heading
                    fontSize={{ base: "5xl", md: "5xl", lg: "6rem" }}
                    fontWeight="extrabold"
                    textShadow={'0px 0px 10px #000000'}
                >
                    {welcomeMessage}
                </Heading> 
                <Box h={10} />

                <NavLink to="/gallery">
                    <Button colorScheme={'pink'} color={'white'} borderRadius={'13px'} fontSize={{ base: '3xl', md: '3xl', lg: '4xl' }} p={8} fontWeight={'bold'} size={{ base: 'lg', md: 'lg', lg: 'xl' }} _hover={{ transform: 'scale(1.2)', backgroundColor: 'pink.300' }} >Enter the Gallery</Button>
                </NavLink>

                
                <Box h={10} />
                <Box
                    fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                    fontWeight={'bold'}
                    textAlign={'center'}
                    backgroundColor={'pink.200'}
                    borderRadius={'12px'}
                    w={['90vw', '80vw', '60vw', '45vw']}
                    p={'10px'}
                    _hover={{
                        backgroundColor: 'pink.300',
                        transform: 'scale(1.05)'
                    }}
                    transition={'all 0.2s ease-in-out'}
                >
                    <Text
                        fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                        fontWeight="bold"
                    >
                        We've been dating for:
                    </Text>
                    <Text>
                        {yearsDating} years
                    </Text>

                    <Text>
                        {monthsDating} months
                    </Text>

                    <Text>
                        {daysDating} days
                    </Text>

                    <Text>
                        {hoursDating} hours
                    </Text>

                    <Text>
                        {minutesDating} minutes
                    </Text>

                    <Text>
                        {secondsDating} seconds
                    </Text>
                </Box>


            </Box>

        </ChakraProvider>
    );
}

export default HomePage;