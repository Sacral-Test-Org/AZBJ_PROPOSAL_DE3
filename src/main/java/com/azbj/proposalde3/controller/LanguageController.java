package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/languages")
public class LanguageController {

    @Autowired
    private LanguageService languageService;

    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> getLanguages() {
        List<Map<String, Object>> languages = languageService.getLanguages();
        return ResponseEntity.ok(languages);
    }

    @PostMapping("/select")
    public ResponseEntity<String> saveSelectedLanguage(@RequestBody Map<String, String> request) {
        String selectedLanguage = request.get("selectedLanguage");
        languageService.saveSelectedLanguage(selectedLanguage);
        return ResponseEntity.ok("Selected language saved successfully.");
    }
}
