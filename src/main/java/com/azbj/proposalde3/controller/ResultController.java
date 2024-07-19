package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResultController {

    @Autowired
    private ResultService resultService;

    @GetMapping("/result/first")
    public Object getFirstRecord() {
        return resultService.fetchFirstRecord();
    }

    @GetMapping("/result/type")
    public String getResultType(@RequestParam String resultField) {
        return resultService.determineResultType(resultField);
    }
}
