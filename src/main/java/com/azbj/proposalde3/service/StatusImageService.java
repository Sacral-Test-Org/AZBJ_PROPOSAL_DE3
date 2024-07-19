package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.StatusImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Service
public class StatusImageService {

    private static final Logger logger = LogManager.getLogger(StatusImageService.class);

    @Autowired
    private StatusImageRepository statusImageRepository;

    public byte[] loadImage() {
        try {
            // Call the repository to load the image data
            byte[] imageData = statusImageRepository.loadImageData();
            if (imageData == null) {
                throw new Exception("Image data is null");
            }
            return imageData;
        } catch (Exception e) {
            // Log the error details
            logger.error("Failed to load image data", e);
            return null;
        }
    }
}
