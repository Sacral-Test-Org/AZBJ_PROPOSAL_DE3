package com.azbj.proposalde3.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.azbj.proposalde3.service.SummaryService;
import java.util.List;

@RestController
@RequestMapping("/api/summary")
public class SummaryController {

    @Autowired
    private SummaryService summaryService;

    @GetMapping("/gender-options")
    public List<String> getGenderOptions() {
        return summaryService.getGenderOptions();
    }
}
