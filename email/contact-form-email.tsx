import React from 'react'
import {Html,Head,Body,Heading,Container,Preview,Hr,Section,Text} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message:string,
    senderemail:string
}
export default function ContactFormEmail({
    message,senderemail}:ContactFormEmailProps) {
  return (
    <Html>
        <Head />
        <Preview>New Message from your portfolio site</Preview>

        <Tailwind>
            <Body className='bg-gray-100 text-black '>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-mg'>
                        <Heading className='leading-tight'>
                            You recieved the following message from portfolio contact form
                        </Heading>
                        <Text>
                            {message}
                        </Text>
                        <Hr />
                        <Text>The Sender's email is : {senderemail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
