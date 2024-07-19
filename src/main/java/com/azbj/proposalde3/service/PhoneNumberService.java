package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PhoneNumberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PhoneNumberService {

    @Autowired
    private PhoneNumberRepository phoneNumberRepository;

    public boolean validatePhoneNumber(String phoneNumber) {
        // Business logic to validate phone number
        // Phone number should be in the format: [STD CODE][NUMBER]
        // Example: 0123456789
        String regex = "^[A-Z0-9]+$";
        if (phoneNumber.matches(regex)) {
            return phoneNumberRepository.validatePhoneNumber(phoneNumber);
        }
        return false;
    }

    public String fetchPhoneNumberData(String currentItem, String currentBlock, String proposalType) {
        // Business logic to fetch phone number data based on the current item, block, and proposal type
        return phoneNumberRepository.fetchPhoneNumberData(currentItem, currentBlock, proposalType);
    }
}
