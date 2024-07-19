package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.PanApprovalService;
import com.azbj.proposalde3.model.PanApproval;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pan-approval")
public class PanApprovalController {

    @Autowired
    private PanApprovalService panApprovalService;

    @PostMapping("/approve")
    public ResponseEntity<String> approvePanDetails(@RequestBody PanApproval panApprovalDetails) {
        String result = panApprovalService.approvePanDetails(panApprovalDetails);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/set-validation-variables")
    public ResponseEntity<Void> setPanValidationVariables() {
        panApprovalService.setPanValidationVariables();
        return ResponseEntity.ok().build();
    }

    @PostMapping("/supervisor-approve")
    public ResponseEntity<String> approveSupervisor(@RequestBody PanApproval approvalData) {
        String response = panApprovalService.validateAndApprove(approvalData);
        return ResponseEntity.ok(response);
    }
}