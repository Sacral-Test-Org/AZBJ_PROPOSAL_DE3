package com.azbj.proposalde3.controller;

import com.azbj.proposalde3.service.RiderCover1SAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/rider-cover1-sa")
public class RiderCover1SAController {

    @Autowired
    private RiderCover1SAService riderCover1SAService;

    @GetMapping("/load-data")
    public Object getRiderCover1SAData(@RequestBody Object context) {
        return riderCover1SAService.loadRiderCover1SAData(context);
    }
}
