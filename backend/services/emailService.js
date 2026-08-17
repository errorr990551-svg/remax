const { Resend } = require("resend");

exports.sendMail = async ({ to, cc, subject, html, attachments = [] }) => {
  try {
    const apiKey = process.env.RESEND_API_KEY || (globalThis.process && globalThis.process.env && globalThis.process.env.RESEND_API_KEY);
    if (!apiKey) {
      console.error("RESEND ERROR: RESEND_API_KEY is not defined in process.env!");
      throw new Error("RESEND_API_KEY environment variable is missing on server");
    }

    const resend = new Resend(apiKey);
    const response = await resend.emails.send({
      from: "REMAX <no-reply@inquiry.errorr.in>",
      to: Array.isArray(to) ? to : [to],
      cc: cc
        ? Array.isArray(cc)
          ? cc
          : [cc]
        : undefined,
      subject,
      html,
      attachments: attachments.map((file) => ({
        filename: file.filename,
        content: file.content,
      })),
    });

    console.log("Resend full response:", JSON.stringify(response));

    if (response.error) {
      console.error("Resend API Error:", response.error);
      throw new Error(response.error.message || "Failed to send email via Resend");
    }

    return response.data;
  } catch (error) {
    console.error("RESEND EXCEPTION:", error);
    throw error;
  }
};
