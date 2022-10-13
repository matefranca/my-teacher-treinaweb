import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/teacher'
import List from '../src/components/List/list'

const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Teacher 1",
      photo: "https://github.com/matefranca.png",
      description: "Teacher 1 Description",
      hour_value: 200
    },
    {
      id: 2,
      name: "Teacher 2",
      photo: "https://github.com/matefranca.png",
      description: "Teacher 2 Description",
      hour_value: 200
    },
    {
      id: 3,
      name: "Teacher 3",
      photo: "https://github.com/matefranca.png",
      description: "Teacher 3 Description",
      hour_value: 200
    },
    {
      id: 4,
      name: "Teacher 4",
      photo: "https://github.com/matefranca.png",
      description: "Teacher 4 Description",
      hour_value: 200
    }
  ]

  return (
    <Box sx={{ backgroundColor:'secondary.main' }}>
      <List teachers={teachers}></List>      
    </Box>
  )
}

export default Home
