package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ContextService;
import com.azbj.proposalde3.model.Context;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContextController {

    @Autowired
    private ContextService contextService;

    @GetMapping("/context")
    public ResponseEntity<Context> getContext(@RequestParam String currentBlock, @RequestParam String currentItem) {
        Context context = contextService.determineContext(currentBlock, currentItem);
        return ResponseEntity.ok(context);
    }

    @PostMapping("/context")
    public ResponseEntity<Void> setContext(@RequestBody Context context) {
        contextService.setContext(context);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/family-details")
    public ResponseEntity<Object> getFamilyDetails(@RequestParam String currentBlock, @RequestParam String currentItem) {
        Context context = contextService.determineContext(currentBlock, currentItem);
        Object familyDetails = contextService.getFamilyDetails(context);
        return ResponseEntity.ok(familyDetails);
    }
}
