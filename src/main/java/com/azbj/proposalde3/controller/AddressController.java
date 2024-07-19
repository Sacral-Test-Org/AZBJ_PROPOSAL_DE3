package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AddressController {

    @Autowired
    private AddressService addressService;

    @GetMapping("/getAddressDetails")
    public ResponseEntity<?> getAddressDetails(@RequestParam String landmarkArea) {
        return ResponseEntity.ok(addressService.fetchAddressDetails(landmarkArea));
    }
}
