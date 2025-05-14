"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendPasswordResetOtp = exports.sendOtpEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
// Create a transporter object using SMTP settings
const transporter = nodemailer_1.default.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
    },
});
/**
 * Send an OTP verification email
 * @param to Recipient email address
 * @param name Recipient name
 * @param otp OTP code for verification
 */
const sendOtpEmail = (to, otp) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: `"${process.env.SMTP_FROM_NAME || 'Your App'}" <${process.env.SMTP_USER}>`,
        to,
        subject: 'Your Verification Code',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Email Verification</h2>
        <p>Hello,</p>
        <p>Here is your 4-digit verification code:</p>
        <div style="text-align: center; margin: 30px 0;">
          <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; padding: 15px; background-color: #f5f5f5; border-radius: 4px;">
            ${otp}
          </div>
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you did not request this code, please ignore this email.</p>
      </div>
    `,
    };
    return transporter.sendMail(mailOptions);
});
exports.sendOtpEmail = sendOtpEmail;
/**
 * Send a password reset OTP email
 * @param to Recipient email address
 * @param otp OTP code for password reset
 */
const sendPasswordResetOtp = (to, otp) => __awaiter(void 0, void 0, void 0, function* () {
    const mailOptions = {
        from: `"${process.env.SMTP_FROM_NAME || 'Your App'}" <${process.env.SMTP_USER}>`,
        to,
        subject: 'Password Reset Code',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Password Reset</h2>
        <p>Hello,</p>
        <p>You requested to reset your password. Here is your 4-digit verification code:</p>
        <div style="text-align: center; margin: 30px 0;">
          <div style="font-size: 32px; font-weight: bold; letter-spacing: 5px; padding: 15px; background-color: #f5f5f5; border-radius: 4px;">
            ${otp}
          </div>
        </div>
        <p>This code will expire in 10 minutes.</p>
        <p>If you did not request a password reset, please ignore this email.</p>
      </div>
    `,
    };
    return transporter.sendMail(mailOptions);
});
exports.sendPasswordResetOtp = sendPasswordResetOtp;
