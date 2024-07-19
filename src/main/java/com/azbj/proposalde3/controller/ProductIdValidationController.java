package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ProductIdValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductIdValidationController {

    @Autowired
    private ProductIdValidationService productIdValidationService;

    @GetMapping("/validateProductId")
    public ResponseEntity<?> validateProductId(@RequestParam String productId) {
        return ResponseEntity.ok(productIdValidationService.validateProductId(productId));
    }
}
