package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.AadhaarDetailsRepository;
import com.azbj.proposalde3.model.AadhaarDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AadhaarDetailsService {

    @Autowired
    private AadhaarDetailsRepository aadhaarDetailsRepository;

    public String verifyAadhar(String aadharNumber) {
        AadhaarDetails aadhaarDetails = aadhaarDetailsRepository.findByAadharNumber(aadharNumber);
        if (aadhaarDetails != null) {
            return "Aadhar details found: " + aadhaarDetails.toString();
        } else {
            return "Aadhar card data is not available";
        }
    }
}
