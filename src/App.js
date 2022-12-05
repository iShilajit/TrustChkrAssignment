
import './App.css';
import SearchFlight from './Components/SearchFlight';
import Enquery from './Components/Enquery'
import { Box, Divider, useColorModeValue } from '@chakra-ui/react';
function App() {
  return (

    <>
    <div className="App" >
    <Box bg={useColorModeValue('gray.50', 'gray.800')}  w='100%' p={4} color='white' 
    fontSize="2xl"
    
    textAlign='start'>
   Flight Search Engine
</Box>
<Divider/>
     <Box
      display="flex"
      flex="1"
       flexDirection="row"
       justifyContent="space-between"
      // marginTop={{ base: '3', sm: '0' }}
      
      >


        <Box>
        <Enquery/>
        </Box>
<Box>
<SearchFlight/>
</Box>



      </Box>

    </div>
    
    </>
    // 
    // {/*  */}
    // 
    // </div>

   
   
  );
}

export default App;
