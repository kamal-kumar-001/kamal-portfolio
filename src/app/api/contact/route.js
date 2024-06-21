// kkhatiwal1@gmail.com
// rsjlyzyuvcpjscxd

import nodemailer from 'nodemailer';

export async function POST(req, res) {
    try {
        const { name, email, message } = await req.json();

        // Create a transporter object using SMTP transport
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "kkhatiwal1@gmail.com",
                pass: "rsjlyzyuvcpjscxd",
            },
        });

        // Send mail with defined transport object
        await transporter.sendMail({
            from: '"Contact Form" kkhatiwal1@gmail.com', // Replace with your email
            to: 'mrkamal0120@gmail.com', // Replace with the recipient's email
            subject: 'New Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
        });

        return new Response(JSON.stringify({ message: 'Message sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error sending email' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

