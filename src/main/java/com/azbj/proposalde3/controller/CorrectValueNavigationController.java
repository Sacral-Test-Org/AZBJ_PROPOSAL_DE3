package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.CorrectValueNavigationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CorrectValueNavigationController {

    @Autowired
    private CorrectValueNavigationService correctValueNavigationService;

    @GetMapping("/navigateToPreviousItem")
    public String navigateToPreviousItem(@RequestParam String currentBlock, 
                                         @RequestParam String currentItem, 
                                         @RequestParam String proposalType) {
        if ("CORRECT".equals(currentBlock)) {
            String previousItem = correctValueNavigationService.getPreviousItem(currentBlock, currentItem, proposalType);
            if (previousItem != null) {
                return previousItem;
            }
        }
        return "L_" + currentItem;
    }

    @GetMapping("/loadFieldFromImage")
    public String loadFieldFromImage(@RequestParam String currentBlock, 
                                     @RequestParam String currentItem, 
                                     @RequestParam String proposalType) {
        return correctValueNavigationService.getStripNumber(currentBlock, currentItem, proposalType);
    }
}