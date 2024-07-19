package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PinCodeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/pincode")
public class PinCodeController {

    @Autowired
    private PinCodeService pinCodeService;

    @GetMapping("/valid")
    public List<Map<String, String>> getValidPinCodes() {
        return pinCodeService.fetchValidPinCodes();
    }
}
