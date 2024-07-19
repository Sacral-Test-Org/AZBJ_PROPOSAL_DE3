package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.ChildCoversService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/child-covers")
public class ChildCoversController {

    @Autowired
    private ChildCoversService childCoversService;

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteChildCovers() {
        childCoversService.deleteChildCovers();
        return ResponseEntity.ok("Child cover records deleted successfully");
    }
}
