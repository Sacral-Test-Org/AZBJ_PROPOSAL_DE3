package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ProfessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProfessionController {

    @Autowired
    private ProfessionService professionService;

    @GetMapping("/professions")
    public ResponseEntity<List<String>> fetchProfessions(@RequestParam("industryCode") String industryCode) {
        List<String> professions = professionService.getProfessions(industryCode);
        return ResponseEntity.ok(professions);
    }
}
