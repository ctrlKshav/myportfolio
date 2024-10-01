"use server";

import React from 'react'
import { Resend } from "resend";
import { validateString,getErrorMessage } from "@/lib/utils";
import ContactFormEmail from '@/email/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData : FormData) =>{
    console.log("Server Side Action")

    const senderemail = formData.get('senderemail')
    const message = formData.get('message')

   

    if(!validateString(senderemail,200) || !validateString(message,5000)){
        return {error:"Invalid Request"}
    }

    let response;
    try{
    response = await resend.emails.send({
        from : 'Resend Client<onboarding@resend.dev>',
        to : 'keshavm9978@gmail.com',
        subject : `Message from Portfolio Contact Form by ${senderemail}`,
        replyTo : senderemail as string,
        react: React.createElement(ContactFormEmail,{message:message as string,senderemail:senderemail as string})
    })}
    catch(error : unknown){

        return {
            error:getErrorMessage(error)
        }
    }
    return {response};
}
