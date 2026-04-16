package com.toplisting.service;

import com.toplisting.model.ContactRequest;
import com.toplisting.model.ContactSubmission;
import com.toplisting.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository contactRepository;
    private final JavaMailSender mailSender;

    @Value("${app.notification.email}")
    private String notificationEmail;

    public ContactService(ContactRepository contactRepository, JavaMailSender mailSender) {
        this.contactRepository = contactRepository;
        this.mailSender = mailSender;
    }

    public ContactSubmission saveAndNotify(ContactRequest request) {
        // Persist submission
        ContactSubmission submission = new ContactSubmission();
        submission.setName(request.getName());
        submission.setEmail(request.getEmail());
        submission.setPhone(request.getPhone());
        submission.setCompany(request.getCompany());
        submission.setService(request.getService());
        submission.setMessage(request.getMessage());
        submission = contactRepository.save(submission);

        // Send notification email (non-blocking failure)
        try {
            sendNotificationEmail(submission);
            sendAutoReplyEmail(submission);
            submission.setNotified(true);
            contactRepository.save(submission);
        } catch (Exception e) {
            // Log but don't fail the request if mail fails
            System.err.println("Failed to send email notification: " + e.getMessage());
        }

        return submission;
    }

    private void sendNotificationEmail(ContactSubmission s) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(notificationEmail);
        msg.setSubject("New Lead: " + s.getName() + " – " + s.getService());
        msg.setText(buildNotificationBody(s));
        mailSender.send(msg);
    }

    private void sendAutoReplyEmail(ContactSubmission s) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(s.getEmail());
        msg.setSubject("We received your message – TopListing");
        msg.setText(buildAutoReplyBody(s));
        mailSender.send(msg);
    }

    private String buildNotificationBody(ContactSubmission s) {
        return String.format("""
                🚀 New Contact Form Submission – TopListing

                Name:    %s
                Email:   %s
                Phone:   %s
                Company: %s
                Service: %s

                Message:
                %s

                Received: %s
                """,
                s.getName(), s.getEmail(),
                s.getPhone() != null ? s.getPhone() : "—",
                s.getCompany() != null ? s.getCompany() : "—",
                s.getService(), s.getMessage(), s.getSubmittedAt());
    }

    private String buildAutoReplyBody(ContactSubmission s) {
        return String.format("""
                Hi %s,

                Thank you for reaching out to TopListing!

                We've received your enquiry about "%s" and our team will review it and get back to you within 24 hours.

                Here's a summary of your message:
                ——————————————
                %s
                ——————————————

                In the meantime, feel free to explore our services at toplisting.com.

                Best regards,
                The TopListing Team
                hello@toplisting.com
                """,
                s.getName(), s.getService(), s.getMessage());
    }
}
