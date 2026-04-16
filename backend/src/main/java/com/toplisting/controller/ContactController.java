package com.toplisting.controller;

import com.toplisting.model.ContactRequest;
import com.toplisting.model.ContactResponse;
import com.toplisting.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactResponse> submit(@Valid @RequestBody ContactRequest request) {
        contactService.saveAndNotify(request);
        return ResponseEntity.ok(new ContactResponse(
                true,
                "Thank you! We'll get back to you within 24 hours."
        ));
    }

    @GetMapping("/health")
    public ResponseEntity<String> health() {
        return ResponseEntity.ok("TopListing API is running");
    }
}
