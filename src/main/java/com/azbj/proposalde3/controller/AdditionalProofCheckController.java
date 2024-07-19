package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.AdditionalProofCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdditionalProofCheckController {

    @Autowired
    private AdditionalProofCheckService additionalProofCheckService;

    @GetMapping("/validateAdditionalProofCheck")
    public ResponseEntity<String> validateAdditionalProofCheck(@RequestParam String partnerId, @RequestParam int globalViewImageCount) {
        String result = additionalProofCheckService.validateAdditionalProofCheck(partnerId, globalViewImageCount);
        return ResponseEntity.ok(result);
    }
}
