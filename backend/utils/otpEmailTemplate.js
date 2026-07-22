const otpEmailTemplate = (otp) => {
  return `
  <div style="background-color:#f4f6f8; padding:40px 0; font-family: Arial, sans-serif;">
    <div style="max-width:420px; margin:0 auto; background-color:#0b1f1c; border-radius:12px; padding:36px 30px; text-align:center;">

      <h1 style="margin:0 0 4px 0; font-family: Georgia, 'Times New Roman', serif; font-size:32px;">
        <span style="color:#ffffff;">Med</span><span style="color:#14b8a6;">Desk</span>
      </h1>

      <p style="color:#9ca3af; font-size:13px; letter-spacing:2px; margin:0 0 28px 0; font-family: Georgia, 'Times New Roman', serif;">
        Book <span style="color:#14b8a6;">•</span> Consult <span style="color:#14b8a6;">•</span> Recover
      </p>

      <p style="color:#d1d5db; font-size:14px; margin-bottom:24px;">
        Use the OTP below to complete your login. This code will expire in 5 minutes.
      </p>

      <div style="background-color:#132e2a; border-radius:8px; padding:20px; margin-bottom:24px;">
        <span style="font-size:32px; font-weight:bold; letter-spacing:8px; color:#2dd4bf;">
          ${otp}
        </span>
      </div>

      <p style="color:#6b7280; font-size:12px;">
        If you didn't request this, you can safely ignore this email.
      </p>

    </div>
  </div>
  `;
};

module.exports = otpEmailTemplate;