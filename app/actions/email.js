'use server'

import nodemailer from 'nodemailer'

// Create transporter for sending emails
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export async function sendContactEmail(formData) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@malakinghotpot.ca',
      subject: `Contact Form: ${formData.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email sent successfully!' }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, message: 'Failed to send email. Please try again.' }
  }
}

export async function sendApplicationEmail(applicationData) {
  try {
    const availabilityText = Object.entries(applicationData.availability)
      .filter(([day, available]) => available)
      .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
      .join(', ')

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@malakinghotpot.ca',
      subject: `Job Application: ${applicationData.position}`,
      html: `
        <h2>New Job Application</h2>
        
        <h3>Personal Information:</h3>
        <p><strong>Name:</strong> ${applicationData.firstName} ${applicationData.lastName}</p>
        <p><strong>Email:</strong> ${applicationData.email}</p>
        <p><strong>Phone:</strong> ${applicationData.phone}</p>
        
        <h3>Position Details:</h3>
        <p><strong>Position:</strong> ${applicationData.position}</p>
        <p><strong>Experience:</strong> ${applicationData.experience || 'Not provided'}</p>
        
        <h3>Availability:</h3>
        <p>${availabilityText || 'None selected'}</p>
        
        <h3>Additional Information:</h3>
        <p>${applicationData.message || 'Not provided'}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Application submitted successfully!' }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, message: 'Failed to submit application. Please try again.' }
  }
}
