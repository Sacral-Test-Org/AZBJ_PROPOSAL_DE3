package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ScrutinyFailureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/scrutiny-failure")
public class ScrutinyFailureController {

    @Autowired
    private ScrutinyFailureService scrutinyFailureService;

    @PostMapping("/initiate")
    public ResponseEntity<Object> initiateScrutinyFailure(@RequestBody Map<String, String> request) {
        String applicationNumber = request.get("applicationNumber");
        String userId = request.get("userId");

        if (applicationNumber == null || applicationNumber.isEmpty()) {
            return new ResponseEntity<>("Application number cannot be null.", HttpStatus.BAD_REQUEST);
        }

        if (!userId.startsWith("UU")) {
            return new ResponseEntity<>("Not an Authorized ID.", HttpStatus.FORBIDDEN);
        }

        Map<String, String> parameterList = new HashMap<>();
        parameterList.put("RES_TYPE", "QC");
        parameterList.put("RES_appln", applicationNumber);

        scrutinyFailureService.handleScrutinyFailure(parameterList);

        return new ResponseEntity<>("Scrutiny failure process initiated.", HttpStatus.OK);
    }
}
