package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.PinCodeRepository;
import com.azbj.proposalde3.model.PinCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PinCodeService {

    @Autowired
    private PinCodeRepository pinCodeRepository;

    public List<PinCode> fetchValidPinCodes() {
        return pinCodeRepository.findValidPinCodes();
    }
}
