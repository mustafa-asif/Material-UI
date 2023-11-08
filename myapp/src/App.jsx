import logo from './logo.svg';
import './App.css';



import { Typography,Stack,Box,TextField } from '@mui/material';
import Cards from './components/Cards/Cards';
import ResponsiveAppBar from './components/navigation/navigation';


function App() {
  return (
    <>
    <Box>
      <ResponsiveAppBar/>
    </Box>
   
      
      <Box>
        <Stack>
          <Cards />
        </Stack>
      </Box>

      </>
      
  )
      


 

}

export default App;
