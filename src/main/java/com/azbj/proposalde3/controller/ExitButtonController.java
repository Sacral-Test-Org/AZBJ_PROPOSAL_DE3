package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ExitButtonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/exit")
public class ExitButtonController {

    @Autowired
    private ExitButtonService exitButtonService;

    @PostMapping("/clearFields")
    public void clearFields() {
        exitButtonService.clearFields();
    }

    @PostMapping("/resetForm")
    public void resetForm() {
        exitButtonService.resetForm();
    }
}
