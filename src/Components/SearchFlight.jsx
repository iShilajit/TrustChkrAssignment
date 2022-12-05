import React, { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Link,
    Image,
    Text,

    Container,
    Button,
    Flex,


} from '@chakra-ui/react';



const SearchFlight = (prop) => {
    const {data} = prop;
console.log("afdata",data);
    const [flightdata, setFlightData] = useState([])
    const [afdata, setAfdata] = useState(data)
    const getData = () => {
        fetch('assignment-data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                console.log(response)

                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setFlightData(myJson.results)
            });
    }

    useEffect(() => {
        getData()
    }, [])

    console.log("flihgtdata", flightdata);

    return (
        <>
            {
             afdata?afdata:flightdata.map((el) => {
                    return <Container maxW={'7xl'} p="12">
                       
                        <Box
                            marginTop={{ base: '1', sm: '5' }}
                            display="flex"
                            flexDirection={{ base: 'column', sm: 'row' }}
                            justifyContent="space-between"


                        >
                            <Box
                                display="flex"
                                flex="1"
                                marginRight="3"
                                position="relative"
                                alignItems="center">
                                <Box
                                    width={{ base: '100%', sm: '85%' }}
                                    zIndex="2"
                                      marginLeft={{ base: '0', sm: '5%' }}
                                    marginTop="5%">
                                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                        <Image
                                            borderRadius="lg"
                                            src={
                                                'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202202/indigo-copy-sixteen_nine-sixteen_nine.jpeg?size=948:533'
                                            }
                                            alt="search flight"
                                            objectFit="contain"
                                        />
                                    </Link>
                                </Box>
                                <Box zIndex="1" width="100%" position="absolute" height="100%">

                                </Box>
                            </Box>
                            <Box
                                display="flex"
                                flex="1"
                                flexDirection="column"
                                justifyContent="center"
                                marginTop={{ base: '3', sm: '0' }}>

                                <Heading marginTop="1">
                                    <Link textDecoration="none" _hover={{ textDecoration: 'none' }}
                                    textAlign="start">
                                        Price: {parseInt(el.price)}
                                    </Link>
                                </Heading>
                                <Text
                                        as="p"
                                        marginTop="2"
                                       textAlign="start"
                                        fontSize="lg">
                                       Name: {el.name}

                                    </Text>
                                <Flex
                                    justifyContent="space-between"
                                >
                                    <Text
                                        as="p"
                                        marginTop="2"

                                        fontSize="lg">
                                       originCity:{el.originCity}

                                    </Text>
                                    &nbsp;
                                    <Text
                                        as="p"
                                        marginTop="2"

                                        fontSize="lg">
                                     destinationCity:{el.destinationCity}

                                    </Text>
                                 

                                </Flex>
                                <Flex
                                    justifyContent="space-between"
                                >
                                    <Text
                                        as="p"
                                        marginTop="2"

                                        fontSize="lg">
                                        departureDate {el.departureDate}

                                    </Text>
                                    &nbsp;
                                    <Text
                                        as="p"
                                        marginTop="2"

                                        fontSize="lg">
                                        departureTime {el.departureTime}

                                    </Text>
                                </Flex>
                                
                                

                                <Button 
                                mt={"2"} colorScheme='cyan'>Book This flight</Button>
                            </Box>
                        </Box>


                    </Container>
                })
            }

        </>

    );
};

export default SearchFlight;

