const { sendMail } = require("../services/emailService");

exports.submitContactForm = async (req, res) => {
  try {
    const {
      name,
      fullName,
      email,
      emailAddress,
      phone,
      phoneNumber,
      mobile,
      location,
      city,
      company,
      companyName,
      product_name,
      product,
      material,
      standard,
      industry,
      quantity,
      requirements,
      page_url,
    } = req.body || {};

    const contactName = (name || fullName || "").trim();
    const contactEmail = (email || emailAddress || "").trim();
    const contactPhone = (phone || phoneNumber || mobile || "").trim();
    const contactCompany = (company || companyName || "Not Provided").trim();
    const contactLocation = (location || city || "Not Provided").trim();
    const resolvedProduct = product_name || product || "";

    // Require name and at least email or phone so we can follow up
    if (!contactName || (!contactEmail && !contactPhone)) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill in your name and contact details (email or phone)" 
      });
    }

    // Build human-readable message combining all provided context
    let msgBody = (req.body.message || "").trim();
    const extraDetails = [];
    if (requirements) extraDetails.push(`Requirements: ${requirements}`);
    if (quantity) extraDetails.push(`Quantity: ${quantity}`);
    if (resolvedProduct) extraDetails.push(`Product: ${resolvedProduct}`);
    if (material) extraDetails.push(`Material: ${material}`);
    if (standard) extraDetails.push(`Standard: ${standard}`);
    if (industry) extraDetails.push(`Industry: ${industry}`);
    if (page_url) extraDetails.push(`Source Page: ${page_url}`);

    if (extraDetails.length > 0) {
      msgBody = msgBody ? `${msgBody}\n\nAdditional Details:\n${extraDetails.join("\n")}` : extraDetails.join("\n");
    }

    if (!msgBody) {
      msgBody = "Official Quote / Inquiry Request";
    }

    const emailSubject = resolvedProduct 
      ? `New RFQ: ${resolvedProduct} - ${contactName}` 
      : `New Website Inquiry from ${contactName}`;

    await sendMail({
      to: ["sales@remaxforge.com", "remaxforge@gmail.com"],
      cc: [
        "akshat99055@gmail.com",
        "errorr990551@gmail.com",
      ],
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0F172A; padding: 20px; color: #ffffff; text-align: center;">
            <h2 style="margin: 0; color: #ffffff;">Remax Forge & Fittings</h2>
            <p style="margin: 5px 0 0; color: #94a3b8; font-size: 14px;">New Website Enquiry / Quote Request</p>
          </div>
          <div style="padding: 24px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #475569;">Name:</td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${contactName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${contactEmail}" style="color: #D71920; text-decoration: none;">${contactEmail || "Not Provided"}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone:</td>
                <td style="padding: 8px 0; color: #0f172a;">${contactPhone || "Not Provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Company:</td>
                <td style="padding: 8px 0; color: #0f172a;">${contactCompany}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Location:</td>
                <td style="padding: 8px 0; color: #0f172a;">${contactLocation}</td>
              </tr>
              ${resolvedProduct ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Product:</td><td style="padding: 8px 0; color: #0f172a;">${resolvedProduct}</td></tr>` : ""}
              ${material ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Material:</td><td style="padding: 8px 0; color: #0f172a;">${material}</td></tr>` : ""}
              ${standard ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Standard:</td><td style="padding: 8px 0; color: #0f172a;">${standard}</td></tr>` : ""}
              ${page_url ? `<tr><td style="padding: 8px 0; font-weight: bold; color: #475569;">Page:</td><td style="padding: 8px 0;"><a href="${page_url}" style="color: #64748b; font-size: 13px;">${page_url}</a></td></tr>` : ""}
            </table>
            <div style="background-color: #f8fafc; border-left: 4px solid #D71920; padding: 16px; border-radius: 4px;">
              <h4 style="margin: 0 0 8px; color: #0f172a; font-size: 14px;">Requirement / Message:</h4>
              <p style="margin: 0; white-space: pre-wrap; font-size: 14px; color: #334155;">${msgBody}</p>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 12px 24px; text-align: center; font-size: 12px; color: #64748b;">
            This email was sent automatically from the inquiry form on remaxforge.com
          </div>
        </div>
      `,
    });

    // Respond immediately to the user
    return res.status(200).json({ 
      success: true, 
      message: "Quote request received! Our team will get back to you within 30 minutes." 
    });

  } catch (err) {
    console.error("Contact form processing error:", err);
    return res.status(500).json({ 
      success: false, 
      message: err.message || "Something went wrong. Please try again later." 
    });
  }
};
