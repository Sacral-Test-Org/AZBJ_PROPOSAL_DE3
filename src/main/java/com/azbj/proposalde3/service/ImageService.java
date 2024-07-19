package com.azbj.proposalde3.service;

import com.azbj.proposalde3.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public byte[] getImage(String imageFileName) {
        return imageRepository.findImageByFileName(imageFileName);
    }

    public int fetchAgeFromImage(byte[] imageData) {
        return imageRepository.findAgeFromImage(imageData);
    }

    public String getImagePath(String formName) {
        String imagePath = imageRepository.fetchImagePath(formName);
        if ("NEW_BBU".equals(formName)) {
            imagePath = imagePath.replace("/server/path/", "/local/path/");
        }
        return imagePath;
    }

    public byte[] fetchImageData(Long imageId) {
        return imageRepository.findImageData(imageId);
    }

    public byte[] fetchImage(String currentBlock, String currentItem) {
        String imageFileName = imageRepository.getImageFileName(currentBlock, currentItem);
        return imageRepository.findImage(imageFileName);
    }

    public byte[] getImage(String policyType) {
        return imageRepository.findImageByPolicyType(policyType);
    }

    public byte[] fetchImage(String proposalType, int numberOfPages) {
        return imageRepository.findImage(proposalType, numberOfPages);
    }

    public byte[] fetchImage(String proposalType, String currentBlock, String currentItem) {
        return imageRepository.findImage(proposalType, currentBlock, currentItem);
    }

    public byte[] fetchImage(Long imageId) {
        return imageRepository.findById(imageId).orElse(null);
    }

    public String getImagePath(String proposalNumber, String imageName) {
        return imageRepository.getImagePath(proposalNumber, imageName);
    }

    public void downloadImage(String imagePath) {
        imageRepository.downloadImage(imagePath);
    }

    public byte[] getImage(String currentItem, String currentBlock) {
        return imageRepository.findImage(currentItem, currentBlock);
    }
}