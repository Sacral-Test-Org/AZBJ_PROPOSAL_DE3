package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.FundDetailsImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FundDetailsImageService {

    @Autowired
    private FundDetailsImageRepository fundDetailsImageRepository;

    public byte[] fetchImageData(String currentBlock, String currentItem, String proposalType) {
        // Fetch the image data from the repository
        return fundDetailsImageRepository.getImageData(currentBlock, currentItem, proposalType);
    }
}
