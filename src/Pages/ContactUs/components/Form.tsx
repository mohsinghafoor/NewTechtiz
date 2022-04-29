import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react'
import { FormControl, FormLabel } from '@chakra-ui/react'
import Colors from '../../../components/Constants/Colors'
import countryList from 'react-select-country-list'
import '../styles.css'
import { useMemo } from 'react'

const Form = () => {
  const options = useMemo(() => countryList().getData(), [])
  return (
    <Box position='relative' top='-155px' margin='0 auto' maxWidth='1000px'>
      <Box
        boxShadow=' 0px 0px 21px 0px rgb(0 0 0 / 18%)'
        background='#fff'
        padding=' 40px 50px 40px 50px;'
        borderRadius='10px'
        marginLeft='20px'
        marginRight='20px'
      >
        <FormControl>
          <Grid templateColumns='repeat(12, 1fr)' gap={4}>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <FormLabel htmlFor='name' {...labelStyle}>
                Your Name*
              </FormLabel>
              <Input
                id='name'
                type='name'
                placeholder='Julia William'
                required
              />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <FormLabel htmlFor='email' {...labelStyle}>
                Your Email*
              </FormLabel>
              <Input
                id='email'
                type='email'
                placeholder='You@Exmaple.com'
                required
              />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <FormLabel htmlFor='company' {...labelStyle}>
                Company*
              </FormLabel>
              <Input
                id='company'
                type='text'
                placeholder='Company name'
                required
              />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <FormLabel htmlFor='country' {...labelStyle}>
                Select Country*
              </FormLabel>

              <Select placeholder='Select Country' {...labelStyle}>
                {options?.map((country, index) => (
                  <option value='option1' key={index}>
                    {country.label}
                  </option>
                ))}
              </Select>
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }}>
              <FormLabel htmlFor='message' {...labelStyle}>
                Your Message *
              </FormLabel>
              <Textarea placeholder='Type your message here ...' />
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </GridItem>
          </Grid>
          <Box {...boxStyle} marginTop='20px' alignItems={'baseline'}>
            <Checkbox color={Colors.greyDark} required>
              By submitting this form you agree to our terms and conditions and
              our Privacy Policy which explains how we may collect, use and
              disclose your personal information including to third parties.
            </Checkbox>
          </Box>

          <Button
            variant='outline'
            bg={Colors.blueSecondary}
            color={Colors.white}
            fontSize='16px'
            borderRadius='8px'
            marginTop='30px'
            marginBottom='10px'
            padding='24px 30px'
            _hover={{
              bg: Colors.white,
              borderColor: 'teal.700',
              color: Colors.blueSecondary,
            }}
            type='submit'
          >
            Contact Sales
          </Button>
        </FormControl>
      </Box>
    </Box>
  )
}
const labelStyle = {
  color: '#000',
  fontWeight: 400,
  marginBottom: 0,
}

const boxStyle = {
  marginBottom: '20px',
}
export default Form
