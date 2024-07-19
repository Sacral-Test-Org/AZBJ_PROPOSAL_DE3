package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.DocumentDEService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class DocumentDEController {

    @Autowired
    private DocumentDEService documentDEService;

    @PostMapping("/document-de")
    public void handleDocumentDEButton(@RequestBody Map<String, Object> paramList) {
        documentDEService.callFinancialDocumentForm(paramList);
    }
}
